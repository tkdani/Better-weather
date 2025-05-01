import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Weather } from "../types/weather";

interface weatherProps {
  weather: Weather;
  onFavClick: any;
}
const CurrentWeather = (props: weatherProps) => {
  const { weather, onFavClick } = props;

  const handleFavClick = () => {
    onFavClick(weather);
  };
  return (
    <div className="w-56 h-52 text-center px-5 py-4 relative bg-white/30 border-2 rounded-tl-lg rounded-br-lg">
      <div className="border-b-2 pb-4 flex flex-row justify-between h-24">
        <button onClick={handleFavClick}>
          {weather.fav ? (
            <FavoriteIcon className="absolute right-1 top-1" />
          ) : (
            <FavoriteBorderIcon className="absolute right-1 top-1" />
          )}
        </button>
        <img
          src={`/Assets/weather-icons/${weather.icon}.svg`}
          alt="weather icon"
          className="w-auto"
        />
        <div className="p-2 text-4xl font-medium flex items-center">
          {weather.temp}
          <span className="text-2xl font-normal">°C</span>
        </div>
      </div>
      <div className="pt-2">
        <div className={weather.name.length > 15 ? "text-xl" : "text-3xl"}>
          {weather.name}
        </div>
        <div className="text-lg font-extralight italic">{weather.country}</div>
      </div>
    </div>
  );
};

export default CurrentWeather;
