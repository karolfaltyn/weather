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
    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=${apiKey}&units=metric`;

    fetch(weather)
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
      <div className="flex flex-col justify-center items-center p-12">
        <div className="flex flex-col gap-4 bg-white rounded shadow-md">
          <h1 className="text-blue-500 font-semibold text-xl mx-4 mt-4">
            Weather App
          </h1>
          <hr />
          <input
            className="w-72 bd rounded border border-gray-500 text-center mx-4 p-2 text-zinc-500"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a city"
          />
          <button
            onClick={handleApiCall}
            className="w-72 bg-blue-400 rounded border border-gray-500 mx-4 mb-4 p-2 text-white"
          >
            Search
          </button>
        </div>

        <div className="mt-64 text-center mb-4">
          {responseData && (
            <>
              <div className="mb-4">
                ICON
                {/* <img src="" alt="weather icon" /> */}
              </div>
              <p className="text-6xl mb-2 ">
                {Math.round(responseData.main.temp)}°C
              </p>
              <p className="text-3xl font-semibold mb-2">{responseData.name}</p>
              <p>Feels like: {Math.round(responseData.main.feels_like)}°C</p>
              <p>
                Min: {Math.round(responseData.main.temp_min)}°C / Max:{" "}
                {Math.round(responseData.main.temp_max)}°C
              </p>
            </>
          )}
        </div>

        <div className="">
          {responseData && (
            <>
              <div className="">
                <p>Pressure: {responseData.main.pressure}mbar</p>
                <p>Humidity: {responseData.main.humidity}%</p>
                <p>
                  Wind: {responseData.wind.speed}kmh,{" "}
                  {getDirection(responseData.wind.deg)} direction
                </p>
              </div>

              <div className="">
                <p>Co2 level: </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
