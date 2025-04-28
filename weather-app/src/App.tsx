import { useState } from "react";

import WeatherDetail from "./Components/weather-detail.component";
import SearchBar from "./Components/search-bar.component";
import useWeatherFetch from "./useWeatherFetch";
import { Weather } from "./types/weather";
import FavouritesPage from "./Components/favourites-page.component";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [name, setName] = useState("Szombathely");
  const [favLocations, setFavLocations] = useState<Weather[]>([]);
  const [onMainPage, setOnMainPage] = useState(true);
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
      <h1 className="font-pacifico text-5xl mt-28 mb-16">Better Weather</h1>
      {onMainPage ? (
        <>
          <SearchBar
            onSearch={searchLocation}
            onMainPageClick={handleMainPage}
            placeholderText="search city"
          />
          {isLoading && <div>Loading...</div>}
          {error && <div>No data</div>}
          {weather && (
            <WeatherDetail weather={weather} onFavClick={handelFav} />
          )}
        </>
      ) : (
        <FavouritesPage locations={favLocations} onFavClick={handelFav} />
      )}
    </div>
  );
}

export default App;
