import { Weather } from "../types/weather";
import WeatherDetail from "./weather-detail.component";

const WeatherList = (props: any) => {
  const { locations, onFavClick, onBackClick } = props;
  return (
    <div className="mt-15 w-11/12 h-max max-auto">
      <div className="w-full border-b-2">
        <button
          onClick={onBackClick}
          className="bg-white/30 hover:bg-white/50 p-2 rounded-tl-xl"
        >
          Back
        </button>
      </div>

      {locations.length === 0 ? (
        <div className="ml-1 font-light italic">No favourites</div>
      ) : (
        <div className="grid grid-cols-5 gap-1 my-4 justify-center">
          {locations.map((location: Weather) => {
            return (
              <WeatherDetail
                key={location.name}
                onFavClick={onFavClick}
                weather={location}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default WeatherList;
