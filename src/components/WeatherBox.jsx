import { getDirection } from "../utils/get-directions";
import { getWetherIcon } from "../utils/get-wether-icon";

export const WeatherBox = ({ responseData }) => {
  let pin = require("../assets/images/other-icons/bx-map.svg").default;
  let droplet = require("../assets/images/other-icons/raindrop.svg").default;
  let thermometer =
    require("../assets/images/other-icons/thermometer.svg").default;
  let wind = require("../assets/images/other-icons/wind.svg").default;

  return (
    <>
      <div className="flex justify-center rounded bg-[#ccc] bg-opacity-65 p-2 shadow-md sm:flex-col sm:px-24">
        <div className="flex justify-center">
          <div className="mb-2 text-center">
            <div className="flex items-center justify-center sm:flex-col">
              <img
                className="w-28"
                src={getWetherIcon(responseData.weather[0].icon)}
                alt="weather icon"
              />
              <p className="bold text-6xl font-semibold sm:mb-2">
                {Math.round(responseData.main.temp)}°C
              </p>
            </div>
            <p className="text-lg font-semibold">
              {responseData.weather[0].main}
            </p>
            <div className="flex items-center justify-center">
              <img src={pin} alt="pin" />
              <p className="text-md font-semibold">{responseData.name}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-2">
          <div className="flex items-center justify-center">
            <img src={thermometer} alt="thermometer" className="w-12" />
            <div>
              <p className="text-md font-medium">
                {Math.round(responseData.main.feels_like)}°C
              </p>
              <p className="text-xs">Feels like</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img src={droplet} alt="droplet" className="w-12" />
            <div>
              <p className="text-md font-medium">
                {responseData.main.humidity}%
              </p>
              <p className="text-xs">Humidity</p>
            </div>
          </div>

          <div className="flex-col items-center">
            <div className="flex items-center justify-center">
              <img src={wind} alt="windsock" className="w-12" />
              <div>
                <p className="text-md font-medium">
                  {Math.round(responseData.wind.speed)} kmh
                </p>
                <p className="text-xs">{getDirection(responseData.wind.deg)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
