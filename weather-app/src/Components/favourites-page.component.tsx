import { WeatherListProp } from "../types/WeatherListProp";
import WeatherList from "./weather-list.component";

const FavouritesPage = (props: WeatherListProp) => {
  const { locations, onFavClick } = props;

  return (
    <>
      <WeatherList locations={locations} onFavClick={onFavClick} />
    </>
  );
};
export default FavouritesPage;
