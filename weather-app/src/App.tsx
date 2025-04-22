import { useState } from "react";

import WeatherDetail from "./Components/weather-detail.component";
import SearchBar from "./Components/search-bar.component";
import useWeatherFetch from "./useWeatherFetch";
import WeatherList from "./Components/weather-list.component";
import { Weather } from "./types/weather";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [name, setName] = useState("Szombathely");
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
  };

  return (
    <div className="bg-sky-300 min-h-screen font-roboto flex flex-col items-center">
      <h1 className="my-16 font-pacifico text-5xl">Better Weather</h1>
      <SearchBar onSearch={searchLocation} placeholderText="search city" />
      {isLoading && <div>Loading...</div>}
      {error && <div>No data</div>}
      {weather && <WeatherDetail weather={weather} onFavClick={handelFav} />}
      <WeatherList locations={favLocations} onFavClick={handelFav} />
    </div>
  );
}

export default App;
