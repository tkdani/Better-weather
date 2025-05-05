export interface Weather {
  name: string;
  country: string;
  temp: number;
  feels_like: number;
  icon: string;
  description: string;
  fav: boolean;
  forecast: Forecast[];
}

export interface Forecast {
  dt: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  icon: string;
  description: string;
  pop: number;
}
