export interface Weather {
  name: string;
  country: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  icon: string;
  description: string;
  pop: number;
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
