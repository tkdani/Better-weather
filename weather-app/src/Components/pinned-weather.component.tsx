import { Weather } from "../types/weather";

const PinnedWeather = (props: any) => {
  const { weather, onPin } = props;
  return (
    <div className="absolute right-1 top-1">
      <div>{weather.name}</div>
      <div className="flex flex-row">
        <img
          src={`/Assets/weather-icons/${weather.icon}.svg`}
          alt="weather icon"
          className="w-auto"
        />
        <span>{weather.temp} °C</span>
      </div>
    </div>
  );
};
export default PinnedWeather;
