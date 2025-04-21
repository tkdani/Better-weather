import { useState, useEffect } from "react";
import { Weather } from "./types/weather";

interface weatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
  };
  weather: {
    0: {
      icon: string;
    };
  };
}

const useWeatherFetch = (name: string, apiKey: string | undefined) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name || !apiKey) return;
    setIsLoading(true);
    setError(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${name}&appid=${apiKey}`
    )
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data: weatherData) => {
        const transformedWeather = {
          name: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          fav: false,
        };
        setWeather(transformedWeather);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        setWeather(null);
      });
  }, [name, apiKey]);

  return { weather, isLoading, error };
};
export default useWeatherFetch;
