import { useState } from "react";

import WeatherDetail from "./Components/weather.component";
import SearchBar from "./Components/search-bar.component";
import useWeatherFetch from "./useWeatherFetch";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [name, setName] = useState("Szombathely");
  const { weather, isLoading, error } = useWeatherFetch(name, apiKey);

  return (
    <div className="bg-sky-300 min-h-screen font-roboto flex flex-col items-center">
      <SearchBar placeholderText="search city" />
      {isLoading && <div>Loading...</div>}
      {error && <div>ERROR</div>}
      {weather && <WeatherDetail weather={weather} />}
    </div>
  );
}

export default App;
