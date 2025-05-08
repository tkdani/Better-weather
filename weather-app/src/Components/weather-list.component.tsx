import { Weather } from "../types/weather";
import { WeatherListProp } from "../types/WeatherListProp";
import CurrentWeather from "./current-weather.component";
import ClearIcon from "@mui/icons-material/Clear";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPinOutlined";
import Forecast from "./forecast.component";
import { useState } from "react";

const WeatherList = (props: WeatherListProp) => {
  const { locations, onFavClick } = props;

  const [searchedWeather, setSearchedWeather] = useState<Weather | null>(null);

  const onSearchClickHandler = (weather: Weather) => {
    {
      searchedWeather === weather
        ? setSearchedWeather(null)
        : setSearchedWeather(weather);
    }
  };

  return (
    <div className="mt-15 w-11/12 h-max max-auto">
      {searchedWeather && (
        <div className="text-center flex flex-col items-center">
          <button
            onClick={() => setSearchedWeather(null)}
            className="hover:bg-white/50 bg-white/30 mb-1 p-1 rounded-lg"
          >
            Clear <ClearIcon />
          </button>
          <Forecast weather={searchedWeather} onFavClick={onFavClick} />
        </div>
      )}
      <h2 className="font-light border-b-2 w-full mb-2">Favourites</h2>
      {locations.length === 0 ? (
        <div className="ml-1 font-light italic">No favourites</div>
      ) : (
        <div className="w-full grid grid-cols-5 gap-10">
          {locations.map((location: Weather) => {
            return (
              <CurrentWeather
                key={location.name}
                onFavClick={onFavClick}
                weather={location}
                onSearchClick={onSearchClickHandler}
                icon={<PushPinOutlinedIcon />}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default WeatherList;
