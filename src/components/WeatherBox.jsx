import { getDirection } from "../utils/get-directions";
import { getWetherIcon } from "../utils/get-wether-icon";

export const WeatherBox = ({ responseData }) => {
  let pin = require("../assets/images/other-icons/bx-map.svg").default;
  let droplet = require("../assets/images/other-icons/raindrop.svg").default;
  let thermometer =
    require("../assets/images/other-icons/thermometer.svg").default;
  let wind = require("../assets/images/other-icons/wind.svg").default;

  return (
    <div className="mt-16 flex flex-col gap-4 rounded bg-white shadow-md">
      <h1 className="mx-4 mt-4 w-72 text-xl font-semibold text-blue-500 sm:w-60 xs:w-48">
        Weather
      </h1>
      <hr />
      <div className="mb-4 text-center">
        <div className="mb-4 flex justify-center">
          <img
            className="w-28"
            src={getWetherIcon(responseData.weather[0].icon)}
            alt="weather icon"
          />
        </div>
        <p className="bold mb-2 text-6xl font-semibold">
          {Math.round(responseData.main.temp)}°C
        </p>
        <p className=" text-lg font-semibold">{responseData.weather[0].main}</p>
        <div className="flex items-center justify-center">
          <img src={pin} alt="pin" />
          <p className="text-md font-semibold">{responseData.name}</p>
        </div>
      </div>
      <hr />

      <div className="mx-4 flex justify-evenly">
        <div className="flex items-center justify-center">
          <img src={thermometer} alt="thermometer" className="w-12" />
          <div>
            <p className="text-md font-medium">
              {Math.round(responseData.main.feels_like)}°C
            </p>
            <p className="text-xs">Feels like </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center">
            <img src={droplet} alt="droplet" className="w-12" />
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
      <div className="justify mb-4 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <img src={wind} alt="windsock" className="w-12" />
          <div>
            <p className="text-md font-medium">{responseData.wind.speed} kmh</p>
            <p className="text-xs">
              {getDirection(responseData.wind.deg)} direction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
