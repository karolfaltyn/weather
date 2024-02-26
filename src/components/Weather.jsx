import React, { useState } from "react";
import "../assets/style/style.css";
import { getDirection } from "../utils/get-directions";
import { checkIfEmpty } from "../utils/check-if-empty";
import { getWetherIcon } from "../utils/get-wether-icon";

export const Weather = () => {
  let pin = require("../assets/images/other-icons/bx-map.svg").default;
  let droplet =
    require("../assets/images/other-icons/bxs-droplet-half.svg").default;
  let thermometer =
    require("../assets/images/other-icons/bxs-thermometer.svg").default;

  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  function handleApiCall() {
    const apiKey = "6e3f0299b90cb072866921e2fff0b929";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center p-12">
        <div className="flex flex-col gap-4 rounded bg-white shadow-md">
          <h1 className="mx-4 mt-4 text-xl font-semibold text-blue-500">
            Select Location
          </h1>
          <hr />
          <input
            className="mx-4 w-72 rounded border border-gray-500 p-2 text-center text-zinc-500 sm:w-48"
            id="input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a city"
          />
          <button
            onClick={() => {
              checkIfEmpty();
              handleApiCall();
            }}
            className="mx-4 mb-4 w-72 rounded border border-gray-500 bg-blue-400 p-2 text-white sm:w-48"
          >
            Search
          </button>
        </div>

        {responseData && (
          <div className="mt-16 flex flex-col gap-4 rounded bg-white shadow-md">
            <h1 className="mx-4 mt-4 w-72 text-xl font-semibold text-blue-500 sm:w-48">
              Weather App
            </h1>
            <hr />
            <div className="mb-4 text-center">
              <div className="mb-4 flex justify-center">
                <img
                  className="w-28"
                  src={getWetherIcon(
                    responseData.weather[0].id,
                    responseData.weather[0].icon,
                  )}
                  alt="weather icon"
                />
              </div>
              <p className="bold mb-2 text-6xl font-semibold">
                {Math.round(responseData.main.temp)}°C
              </p>
              <p className=" text-lg font-semibold">
                {responseData.weather[0].main}
              </p>
              <div className="flex items-center justify-center">
                <img src={pin} alt="pin" />
                <p className="text-md font-semibold">{responseData.name}</p>
              </div>
              {/* <p className="text-sm">Pressure: {responseData.main.pressure}mbar</p> */}
            </div>
            <hr />

            <div className="mx-4 flex justify-evenly">
              <div className="flex items-center justify-center">
                <img src={thermometer} alt="thermometer" className="w-10" />
                <div>
                  <p className="text-md font-medium">
                    {Math.round(responseData.main.feels_like)}°C
                  </p>
                  <p className="text-xs">Feels like </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <img src={droplet} alt="droplet" className="w-10" />
                  <div>
                    <p className="text-md font-medium">
                      {responseData.main.humidity}%
                    </p>
                    <p className="text-xs">Humidity</p>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="justify mb-4 flex flex-col items-center text-sm">
              Wind {responseData.wind.speed}kmh
              <p>{getDirection(responseData.wind.deg)} direction</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
