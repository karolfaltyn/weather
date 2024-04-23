import { getWetherIcon } from "../utils/get-wether-icon";
import { getDayOfWeek } from "../utils/get-day-of-week";
import { getHour } from "../utils/get-hour";

export const ForecastWeatherBox = ({ icon, temp, date }) => {
  return (
    <div className="flex flex-col rounded bg-zinc-200 bg-opacity-50 p-2 px-4 shadow hover:scale-105">
      <p className="font-mono text-xs">{getDayOfWeek(date)}</p>
      <p className="text-md font-medium">{getHour(date)}</p>
      <div className="">
        <img className="w-16" src={getWetherIcon(icon)} alt="weather icon" />
        <p className="font-medium">{Math.round(temp)}°</p>
      </div>
    </div>
  );
};
