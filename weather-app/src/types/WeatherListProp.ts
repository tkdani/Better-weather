import { Weather } from "./weather";

export interface WeatherListProp {
  locations: Weather[];
  onFavClick: any;
  onBackClick: any;
}
