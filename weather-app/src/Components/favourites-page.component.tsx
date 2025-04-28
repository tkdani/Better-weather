import { WeatherListProp } from "../types/WeatherListProp";
import WeatherList from "./weather-list.component";

const FavouritesPage = (props: WeatherListProp) => {
  const { locations, onFavClick, onBackClick } = props;

  return (
    <>
      <div className="flex flex-row mb-10">
        <button
          onClick={onBackClick}
          className="bg-white/30 hover:bg-white/50 rounded p-2 uppercase font-light"
        >
          Back
        </button>
      </div>
      <WeatherList locations={locations} onFavClick={onFavClick} />
    </>
  );
};
export default FavouritesPage;
