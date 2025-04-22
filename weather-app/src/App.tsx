import { useState } from "react";

import WeatherDetail from "./Components/weather-detail.component";
import SearchBar from "./Components/search-bar.component";
import useWeatherFetch from "./useWeatherFetch";
import WeatherList from "./Components/weather-list.component";
function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [name, setName] = useState("Szombathely");
  const { weather, isLoading, error } = useWeatherFetch(name, apiKey);

  const searchLocation = (name: string) => {
    setName(name);
  };

  return (
    <div className="bg-sky-300 min-h-screen font-roboto flex flex-col items-center">
      <SearchBar onSearch={searchLocation} placeholderText="search city" />
      {isLoading && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      {weather && <WeatherDetail weather={weather} />}
      <WeatherList />
    </div>
  );
}

export default App;
