import { useState } from "react";

import Forecast from "./Components/forecast.component";
import SearchBar from "./Components/search-bar.component";
import useWeatherFetch from "./useWeatherFetch";
import { Weather } from "./types/weather";
import WeatherList from "./Components/weather-list.component";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [name, setName] = useState("Szombathely");
  const [onMainPage, setOnMainPage] = useState(true);
  const [favLocations, setFavLocations] = useState<Weather[]>([]);
  const { weather, isLoading, error } = useWeatherFetch(name, apiKey);

  const searchLocation = (name: string) => {
    setName(name);
  };

  const handelFav = (location: Weather) => {
    setFavLocations((prevFavLocations) => {
      const isAlreadyFav = prevFavLocations.some(
        (loc) => loc.name === location.name
      );

      if (isAlreadyFav) {
        return prevFavLocations.filter((loc) => loc.name !== location.name);
      } else {
        return [...prevFavLocations, { ...location, fav: true }];
      }
    });
    if (weather && weather.name === location.name) {
      weather.fav = !weather.fav;
    }
  };
  const handleMainPage = () => {
    setOnMainPage(!onMainPage);
  };
  return (
    <div className="bg-gradient-to-bl from-white from-10% via-sky-300 via-30% to-sky-500 to-100% min-h-screen font-roboto flex flex-col items-center">
      <h1 className="font-pacifico text-5xl mt-10 mb-16">Better Weather</h1>
      <SearchBar
        onSearch={searchLocation}
        placeholderText="Search city"
        onMainPage={handleMainPage}
        isOnMain={onMainPage}
        icon={onMainPage ? <FavoriteIcon /> : <HomeIcon />}
      />
      {onMainPage ? (
        <>
          {isLoading && <div>Loading...</div>}
          {error && <div>No data for {name}</div>}
          {weather && <Forecast weather={weather} onFavClick={handelFav} />}
        </>
      ) : (
        <WeatherList
          onPinClick={searchLocation}
          locations={favLocations}
          onFavClick={handelFav}
        />
      )}
    </div>
  );
}

export default App;
