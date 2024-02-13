import React, { useState } from "react";
import "../assets/style/style.css";
import { getDirection } from "../utils/get-directions";
import { getDayOfWeek } from "../utils/get-time";

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
        // const lon = data.cord.lot;
        // const lat = data.cord.lat;
        // const forcast = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        // fetch(forcast)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setResponseData(data);
        //     test.textContent += data.message;
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching data:", error);
        //   });

        // const air_pol = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        // fetch(air_pol)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setResponseData(data);
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching data:", error);
        //   });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <section className="">
      <div className="flex flex-col justify-center items-center p-12">
        <div className="flex gap-2">
          <input
            className="input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a city"
          />
          <button onClick={handleApiCall} className="button">
            Search
          </button>
        </div>

        <div className="mt-64 text-center mb-40">
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

        <div className="flex gap-10 flex-col">
          {responseData && (
            <>
              <div className="weather-info p-6 bg-gradient-to-r from-zinc-400 to-zinc-200 rounded-lg shadow-md">
                <p>Pressure: {responseData.main.pressure}mbar</p>
                <p>Humidity: {responseData.main.humidity}%</p>
                <p>
                  Wind: {responseData.wind.speed}kmh,{" "}
                  {getDirection(responseData.wind.deg)} direction
                </p>
              </div>

              <div className="polution p-6 bg-gradient-to-r from-zinc-400 to-zinc-200 rounded-lg shadow-md">
                <p>Co2 level: </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
