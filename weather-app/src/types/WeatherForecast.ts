export interface WeatherForecast {
  name: string;
  country: string;
  list: Forecast[];
}

interface Forecast {
  dt: number;
  temp: number;
  feels_like: number;
  icon: string;
  description: string;
}
