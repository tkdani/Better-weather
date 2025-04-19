import { useState, useEffect } from "react";

import FavWeather from "./Components/fav-weather.component";

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
  }, [name]);
  return (
    <div className="bg-sky-300 p-2 min-h-screen flex justify-center font-roboto">
      <FavWeather weather={currentWeather} />
    </div>
  );
}

export default App;
