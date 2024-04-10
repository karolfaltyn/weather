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
    <section className="">
      <div className="flex flex-col items-center justify-center p-12">
        <div className="flex flex-col gap-4 rounded bg-white shadow-md">
          <h1 className="mx-4 mt-4 text-xl font-semibold text-blue-500">
            Select Location
          </h1>
          <hr />
          <div className="mx-4">
            <TextField
              label="Location"
              variant="outlined"
              className="w-72 rounded border border-gray-500 p-2 text-zinc-500 sm:w-60 xs:w-48"
              id="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter a city"
            />
          </div>
          <div className="mx-4 mb-4 flex gap-4">
            <Button
              variant="contained"
              onClick={() => {
                checkIfEmpty();
                handleApiCallInput();
              }}
              className="flex w-full items-center justify-center rounded border border-gray-500 bg-blue-400 p-2 text-white"
            >
              <img src={search} alt="search" />
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                handleApiCallLocation();
              }}
              className="flex w-full items-center justify-center rounded border border-gray-500 bg-blue-400 p-2 text-white"
            >
              <img src={pin} alt="pin" />
            </Button>
          </div>
        </div>
        <div className="sm:w-68 mx-4 flex justify-center gap-8 md:flex-col md:gap-1 xs:w-56">
          {responseData && <WeatherBox responseData={responseData} />}
          {responseData2 && <WeatherBox2 responseData={responseData2} />}
        </div>
      </div>
    </section>
  );
};
