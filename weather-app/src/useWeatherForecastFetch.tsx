import { useEffect, useState } from "react";
import { WeatherForecast } from "./types/WeatherForecast";

interface WeatherResponse {
  city: {
    name: string;
    country: string;
  };
  list: Forecast[];
}

interface Forecast {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

const useWeatherForecastFetch = (name: string, apiKey: string) => {
  const [weather, setWeather] = useState<WeatherForecast | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name || !apiKey) return;
    setIsLoading(true);
    setError(null);

    fetch(`api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: WeatherResponse) => {
        const transformedWeather = {};
      });
  }, [name, apiKey]);

  return;
};
export default useWeatherForecastFetch;
