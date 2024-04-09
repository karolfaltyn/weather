import { ForecastWeatherBox } from "./ForecastWeatherBox";

export const WeatherBox2 = ({ responseData }) => {
  return (
    <div className="mt-16 flex flex-col gap-4 rounded bg-white shadow-md">
      <h1 className="mx-4 mt-4 w-72 text-xl font-semibold text-blue-500 sm:w-60 xs:w-48">
        Forecast
      </h1>
      <hr />
      <div className="justify flex flex-col gap-2 md:mb-4">
        <div className="flex justify-around text-center">
          <ForecastWeatherBox
            icon={responseData.list[0].weather[0].icon}
            temp={responseData.list[0].main.temp}
            feels_like={responseData.list[0].main.feels_like}
            date={responseData.list[0].dt_txt}
          />
          <ForecastWeatherBox
            icon={responseData.list[1].weather[0].icon}
            temp={responseData.list[1].main.temp}
            feels_like={responseData.list[1].main.feels_like}
            date={responseData.list[1].dt_txt}
          />
        </div>
        <hr />
        <div className="flex justify-around text-center">
          <ForecastWeatherBox
            icon={responseData.list[2].weather[0].icon}
            temp={responseData.list[2].main.temp}
            feels_like={responseData.list[2].main.feels_like}
            date={responseData.list[2].dt_txt}
          />
          <ForecastWeatherBox
            icon={responseData.list[3].weather[0].icon}
            temp={responseData.list[3].main.temp}
            feels_like={responseData.list[3].main.feels_like}
            date={responseData.list[3].dt_txt}
          />
        </div>
        <hr />
        <div className="flex justify-around text-center">
          <ForecastWeatherBox
            icon={responseData.list[4].weather[0].icon}
            temp={responseData.list[4].main.temp}
            feels_like={responseData.list[4].main.feels_like}
            date={responseData.list[4].dt_txt}
          />
          <ForecastWeatherBox
            icon={responseData.list[5].weather[0].icon}
            temp={responseData.list[5].main.temp}
            feels_like={responseData.list[5].main.feels_like}
            date={responseData.list[5].dt_txt}
          />
        </div>
      </div>
    </div>
  );
};
