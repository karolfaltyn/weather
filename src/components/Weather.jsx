import React, { useState } from "react";
import "../assets/style/style.css";
import { getDirection } from "../utils/get-directions";

export const Weather = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleApiCall = () => {
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
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center p-12">
        <div className="flex flex-col gap-4 rounded bg-white shadow-md">
          <h1 className="mx-4 mt-4 text-xl font-semibold text-blue-500">
            Weather App
          </h1>
          <hr />
          <input
            className="bd mx-4 w-72 rounded border border-gray-500 p-2 text-center text-zinc-500"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a city"
          />
          <button
            onClick={handleApiCall}
            className="mx-4 mb-4 w-72 rounded border border-gray-500 bg-blue-400 p-2 text-white"
          >
            Search
          </button>
        </div>

        {responseData && (
          <div className="mt-32 flex flex-col gap-4 rounded bg-white shadow-md">
            <h1 className="mx-4 mt-4 w-72 text-xl font-semibold text-blue-500">
              Weather App
            </h1>
            <hr />
            <div className="mb-4 text-center">
              <div className="mb-4">
                ICON
                {/* <img src="" alt="weather icon" /> */}
                {responseData.weather.icon}
              </div>
              <p className="mb-2 text-6xl ">
                {Math.round(responseData.main.temp)}°C
              </p>
              <p className=" text-md font-semibold">
                {responseData.weather.main}
              </p>
              <p className="text-md font-semibold">{responseData.name}</p>
              {/* <p>
                Min: {Math.round(responseData.main.temp_min)}°C / Max:{" "}
                {Math.round(responseData.main.temp_max)}°C
              </p> */}
              {/* <p>Pressure: {responseData.main.pressure}mbar</p> */}
            </div>
            <hr />

            <div className="mx-4 flex justify-evenly">
              <div className="flex flex-col items-center">
                {/* <img src="" alt="thermometer" /> */}
                <p className="text-md font-medium">
                  {Math.round(responseData.main.feels_like)}°C
                </p>
                <p>Feels like </p>
              </div>
              <div className="flex flex-col items-center">
                {/* <img src="" alt="water-drop" /> */}
                <p className="text-md font-medium">
                  {responseData.main.humidity}%
                </p>
                <p>Humidity: </p>
              </div>
            </div>
            <hr />
            <div className="justify mb-4 flex flex-col items-center">
              Wind {responseData.wind.speed}kmh
              <p>{getDirection(responseData.wind.deg)} direction</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
