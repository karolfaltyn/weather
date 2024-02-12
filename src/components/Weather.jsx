import React, { useState } from "react";
import "../assets/style/style.css";

export const Weather = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleApiCall = () => {
    const apiKey = "6e3f0299b90cb072866921e2fff0b929";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <section>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a city"
        />
        <button onClick={handleApiCall}>Search</button>

        {responseData && (
          <div>
            <p>Specific Data: {responseData.name}</p>
            <p>Temp: {responseData.main.temp}</p>
          </div>
        )}
      </div>
    </section>
  );
};
