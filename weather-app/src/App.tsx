import { useState, useEffect } from "react";

import React from "react";

import MainWeather from "./Components/Main-weather.component";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [currentLocation, setCurrentLocation] = useState([]);
  const name = "Szombathely";
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q  =${name}&appid=${apiKey}`
    )
      .then((Response) => Response.json())
      .then((location) => {
        setCurrentLocation(location[0]);
      });
  }, []);

  return (
    <div className="p-1 min-h-screen flex justify-center font-sans">
      <MainWeather location={currentLocation} />
    </div>
  );
}

export default App;
