import { useState, useEffect } from "react";

import MainWeather from "./Components/Main-weather.component";

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
  }, [apiKey, name]);

  return (
    <div className="bg-sky-300 p-1 min-h-screen flex justify-center font-sans">
      <MainWeather weather={currentWeather} />
    </div>
  );
}

export default App;
