import { ForecastWeatherBox } from "./ForecastWeatherBox";

export const Forecast = ({ responseData }) => {
  return (
    <div className="w-1/2 min-w-96 rounded bg-white bg-opacity-65 p-4 shadow-md md:mt-0 xs:min-w-72">
      <div className="flex flex-wrap justify-around gap-4 text-center">
        <ForecastWeatherBox
          icon={responseData.list[0].weather[0].icon}
          temp={responseData.list[0].main.temp}
          date={responseData.list[0].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[1].weather[0].icon}
          temp={responseData.list[1].main.temp}
          date={responseData.list[1].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[2].weather[0].icon}
          temp={responseData.list[2].main.temp}
          date={responseData.list[2].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[3].weather[0].icon}
          temp={responseData.list[3].main.temp}
          date={responseData.list[3].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[4].weather[0].icon}
          temp={responseData.list[4].main.temp}
          date={responseData.list[4].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[5].weather[0].icon}
          temp={responseData.list[5].main.temp}
          date={responseData.list[5].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[6].weather[0].icon}
          temp={responseData.list[6].main.temp}
          date={responseData.list[6].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[7].weather[0].icon}
          temp={responseData.list[7].main.temp}
          date={responseData.list[7].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[8].weather[0].icon}
          temp={responseData.list[8].main.temp}
          date={responseData.list[8].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[9].weather[0].icon}
          temp={responseData.list[9].main.temp}
          date={responseData.list[9].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[10].weather[0].icon}
          temp={responseData.list[10].main.temp}
          date={responseData.list[10].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[11].weather[0].icon}
          temp={responseData.list[11].main.temp}
          date={responseData.list[11].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[12].weather[0].icon}
          temp={responseData.list[12].main.temp}
          date={responseData.list[12].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[13].weather[0].icon}
          temp={responseData.list[13].main.temp}
          date={responseData.list[13].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[14].weather[0].icon}
          temp={responseData.list[14].main.temp}
          date={responseData.list[14].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[15].weather[0].icon}
          temp={responseData.list[15].main.temp}
          date={responseData.list[15].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[16].weather[0].icon}
          temp={responseData.list[16].main.temp}
          date={responseData.list[16].dt_txt}
        />
        <ForecastWeatherBox
          icon={responseData.list[17].weather[0].icon}
          temp={responseData.list[17].main.temp}
          date={responseData.list[17].dt_txt}
        />
      </div>
    </div>
  );
};
