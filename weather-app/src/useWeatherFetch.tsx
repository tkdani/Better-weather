import { useState, useEffect } from "react";
import { Weather, Forecast } from "./types/weather";

interface weatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    feels_like: number;
  };
  weather: {
    0: {
      icon: string;
      description: string;
    };
  };
}
interface WeatherForecastData {
  list: {
    dt_txt: string;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      feels_like: number;
    };
    weather: {
      0: {
        icon: string;
        description: string;
      };
    };
    pop: number;
  }[];
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
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: weatherData) => {
        const transformedWeather: Weather = {
          name: data.name,
          country: data.sys.country,
          temp: Math.round(data.main.temp),
          feels_like: Math.round(data.main.feels_like),
          icon: data.weather[0].icon,
          description: data.weather[0].description,
          fav: false,
          forecast: [], // Placeholder, will be updated after fetching forecast
        };

        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${name}&appid=${apiKey}`
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((forecastData: WeatherForecastData) => {
            const transformedForecast: Forecast[] = forecastData.list.map(
              (forecast) => ({
                dt: forecast.dt_txt,
                temp: Math.round(forecast.main.temp),
                temp_min: Math.round(forecast.main.temp_min),
                temp_max: Math.round(forecast.main.temp_max),
                feels_like: Math.round(forecast.main.feels_like),
                icon: forecast.weather[0].icon,
                description: forecast.weather[0].description,
                pop: forecast.pop,
              })
            );

            setWeather({
              ...transformedWeather,
              forecast: transformedForecast,
            });
            setIsLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
        setWeather(null);
      });
  }, [name, apiKey]);
  return { weather, isLoading, error };
};
export default useWeatherFetch;
