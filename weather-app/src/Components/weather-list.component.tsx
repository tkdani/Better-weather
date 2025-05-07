import { Weather } from "../types/weather";
import { WeatherListProp } from "../types/WeatherListProp";
import WeatherDetail from "./current-weather.component";

const WeatherList = (props: WeatherListProp) => {
  const { locations, onFavClick } = props;
  return (
    <div className="mt-15 w-11/12 h-max max-auto">
      <h2 className="font-light border-b-2 w-full mb-2">Favourites</h2>
      {locations.length === 0 ? (
        <div className="ml-1 font-light italic">No favourites</div>
      ) : (
        <div className="w-full grid grid-cols-5 gap-10">
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
