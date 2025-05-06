import { Weather } from "./weather";

export interface WeatherListProp {
  locations: Weather[];
  onFavClick: any;
  onPinClick: any;
  pinnedWeather: String;
}
