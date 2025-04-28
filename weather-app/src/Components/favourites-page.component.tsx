import { WeatherListProp } from "../types/WeatherListProp";
import WeatherList from "./weather-list.component";

const FavouritesPage = (props: WeatherListProp) => {
  const { locations, onFavClick, onBackClick } = props;

  return (
    <>
      <h1 className="bg-white/30 text-black w-max p-2 mx-auto rounded-tl-xl rounded-br-sm text-2xl mb-10 uppercase font-light">
        Favourites
      </h1>
      <WeatherList
        locations={locations}
        onFavClick={onFavClick}
        onBackClick={onBackClick}
      />
    </>
  );
};
export default FavouritesPage;
