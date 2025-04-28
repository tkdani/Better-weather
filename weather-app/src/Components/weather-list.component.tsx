import { Weather } from "../types/weather";
import WeatherDetail from "./weather-detail.component";

const WeatherList = (props: any) => {
  const { locations, onFavClick } = props;
  return (
    <div className="mt-15 w-11/12 h-max max-auto">
      {locations.length === 0 ? (
        <div className="w-full border-t-2 ml-1 font-light italic">
          No favourites
        </div>
      ) : (
        <div className="w-full border-t-2 grid grid-cols-5 gap-1 my-4 justify-center pt-2">
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
