import { Weather } from "../types/weather";

const PinnedWeather = (props: any) => {
  const { weather } = props;

  return (
    <div className="absolute left-1 top-1 flex flex-col items-center">
      <div>{weather.name}</div>
      <div className="flex flex-row items-center">
        <div>{weather.icon}</div>
        <div>{weather.temp}</div>
      </div>
    </div>
  );
};

export default PinnedWeather;
