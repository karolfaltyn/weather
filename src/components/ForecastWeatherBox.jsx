import { getWetherIcon } from "../utils/get-wether-icon";
import { getDayOfWeek } from "../utils/get-day-of-week";
import { getHour } from "../utils/get-hour";

export const ForecastWeatherBox = ({ icon, temp, feels_like, date }) => {
  return (
    <div className="flex flex-col">
      <p className="text-xs ">{getDayOfWeek(date)}</p>
      <p className="text-md font-medium">{getHour(date)}</p>
      <div className="">
        <img className="w-16" src={getWetherIcon(icon)} alt="weather icon" />
        <p>
          {Math.round(temp)}° / {Math.round(feels_like)}°
        </p>
      </div>
    </div>
  );
};
