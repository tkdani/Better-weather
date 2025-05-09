import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPinOutlined";
import { Button } from "@mui/material";

const Forecast = (props: any) => {
  const { weather, onFavClick, onPinClick } = props;
  const handleFavClick = () => {
    onFavClick(weather);
  };

  const groupAndAverageForecast = (forecast: any[]) => {
    const grouped: { [key: string]: any[] } = {};

    forecast.forEach((entry) => {
      const date = new Date(entry.dt).toISOString().split("T")[0]; // Extract date part
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(entry);
    });

    return Object.keys(grouped).map((date) => {
      const dayData = grouped[date];
      const avgTemp =
        dayData.reduce((sum, item) => sum + item.temp, 0) / dayData.length;
      const tempMin = Math.min(...dayData.map((item) => item.temp_min));
      const tempMax = Math.max(...dayData.map((item) => item.temp_max));
      const avgPop =
        dayData.reduce((sum: any, item: any) => sum + item.pop, 0) /
        dayData.length;

      return {
        date,
        temp: Math.round(avgTemp),
        temp_min: tempMin,
        temp_max: tempMax,
        pop: Math.round(avgPop),
        icon: dayData[0].icon, // Use the first icon of the day
        description: dayData[0].description,
      };
    });
  };

  const averagedForecast = groupAndAverageForecast(weather.forecast);

  const handlePinClick = () => {
    onPinClick(weather);
  };

  return (
    <div className="relative bg-white/30 rounded-tl-lg rounded-br-lg border-2 p-3 flex flex-col items-center">
      <div className="text-4xl font-normal p-2">{weather.name}</div>
      <Button onClick={handlePinClick}>
        <PushPinIcon className="absolute right-1 top-1" />
      </Button>
      <button onClick={handleFavClick}>
        {weather.fav ? (
          <FavoriteIcon className="absolute right-1 top-1" />
        ) : (
          <FavoriteBorderIcon className="absolute right-1 top-1" />
        )}
      </button>
      <div className="flex p-3">
        <img
          src={`/Assets/weather-icons/${weather.icon}.svg`}
          alt="weather icon"
          className="w-16 mr-5"
        />
        <div className="text-5xl font-normal flex items-center">
          {weather.temp} <span className="text-2xl font-light">°C</span>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-3 w-full border-b-2 text-center font-extralight text-xs">
        <span>Feels like: {weather.feels_like}</span>
        <span>{weather.description}</span>
      </div>
      <div className="grid grid-cols-4 gap-2 p-2 w-full">
        {averagedForecast.slice(1, 5).map((day: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center mb-2 border-2 rounded-xl p-2"
          >
            <div>
              <span className="font-normal">
                {new Date(day.date).toLocaleString("hu-HU", {
                  weekday: "short",
                })}
              </span>
            </div>
            <img
              className="w-8 py-1"
              src={`/Assets/weather-icons/${day.icon}.svg`}
              alt="weather icon"
            />
            <div>
              {day.temp}
              <span className="font-extralight text-xs pl-1">°C</span>
            </div>
            <div className="text-sm font-extralight italic">
              <span className="text-xs font-extralight italic">
                {day.temp_min + " "}
              </span>
              /
              <span className="text-xs font-extralight italic">
                {" " + day.temp_max}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Forecast;
