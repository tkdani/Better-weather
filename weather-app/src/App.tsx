import { useState, useEffect } from "react";

import Weather from "./Components/weather.component";
import SearchBar from "./Components/search-bar.component";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const name: string = "Szombathely";
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${name}&appid=${apiKey}`
    )
      .then((Response) => Response.json())
      .then((weather) => {
        setCurrentWeather(weather);
      });
  }, [name, apiKey]);
  return (
    <div className="bg-sky-300 min-h-screen font-roboto">
      <SearchBar placeholderText="search city" />
      <Weather weather={currentWeather} />
    </div>
  );
}

export default App;
