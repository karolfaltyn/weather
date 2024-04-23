import React, { useState } from "react";
import { WeatherBox } from "./WeatherBox";
import { WeatherBox2 } from "./WeatherBox2";
import "../assets/style/style.css";
import { checkIfEmpty } from "../utils/check-if-empty";
import { getLocation } from "../utils/get-location";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export const SearchBox = () => {
  let pin = require("../assets/images/other-icons/bx-map-pin.svg").default;
  let search = require("../assets/images/other-icons/bx-search.svg").default;

  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [responseData2, setResponseData2] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  async function handleApiCallLocation() {
    const { REACT_APP_API_KEY } = process.env;
    try {
      const location = await getLocation();
      const { latitude, longitude } = location;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${REACT_APP_API_KEY}&units=metric`;
      const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${REACT_APP_API_KEY}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();
      setResponseData(data);

      const response2 = await fetch(url2);
      const data2 = await response2.json();
      setResponseData2(data2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function handleApiCallInput() {
    const { REACT_APP_API_KEY } = process.env;
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=${REACT_APP_API_KEY}&units=metric`;
      const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&APPID=${REACT_APP_API_KEY}&units=metric`;

      const response = await fetch(url);
      const data = await response.json();
      setResponseData(data);

      const response2 = await fetch(url2);
      const data2 = await response2.json();
      setResponseData2(data2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="container">
      <header>
        <h1 className="flex justify-center pt-4 text-xl font-light text-white">
          Check if you need an umbrella?
        </h1>
      </header>
      <main>
        <section>
          <div className="mb-12 flex items-center justify-center pt-4">
            <div className="mx-16 flex flex-col gap-4 rounded bg-[#ccc] bg-opacity-65 shadow-md">
              <div className="px-4 pt-2">
                <TextField
                  label="Set Location"
                  variant="standard"
                  className="w-80 rounded border border-gray-500 p-2 text-zinc-500"
                  id="input"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter a city"
                />
              </div>
              <div className="flex gap-4 px-4 pb-4">
                <Button
                  variant="contained"
                  onClick={() => {
                    checkIfEmpty();
                    handleApiCallInput();
                  }}
                  className="flex w-full items-center justify-center rounded border border-gray-500"
                >
                  <img src={search} alt="search" />
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    handleApiCallLocation();
                  }}
                  className="flex w-full items-center justify-center rounded border border-gray-500 "
                >
                  <img src={pin} alt="pin" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-16 flex flex-col gap-4">
            <div className="flex justify-center">
              {responseData && <WeatherBox responseData={responseData} />}
            </div>
            <div className="flex items-center justify-center">
              {responseData2 && <WeatherBox2 responseData={responseData2} />}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
