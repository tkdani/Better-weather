import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Forecast = (props: any) => {
  const { weather, onFavClick } = props;
  const handleFavClick = () => {
    onFavClick(weather);
  };
  return (
    <div className="relative bg-white/30 rounded-tl-lg rounded-br-lg border-2 p-3 flex flex-col items-center">
      <div className="text-4xl font-normal p-2">{weather.name}</div>
      <button onClick={handleFavClick}>
        {weather.fav ? (
          <FavoriteIcon className="absolute right-1 top-1" />
        ) : (
          <FavoriteBorderIcon className="absolute right-1 top-1" />
        )}
      </button>
      <div className="flex p-3">
        <img
          src={`/Assets/weather-icons/${weather.icon}.svg`}
          alt="weather icon"
          className="w-16 mr-5"
        />
        <div className="text-5xl font-normal flex items-center">
          {weather.temp} <span className="text-2xl font-light">°C</span>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-3 w-full border-b-2 text-center font-extralight text-xs">
        <span>Min: {weather.temp_min}</span>
        <span>Max: {weather.temp_max}</span>
        <span>Feels like: {weather.feels_like}</span>
        <span>{weather.description}</span>
        <span>Prop: {weather.pop}</span>
      </div>
      <div className="grid grid-cols-5 gap-2  p-2 w-full">
        {weather.forecast
          .filter((day: any) => new Date(day.dt).getHours() === 15) // Filter for data at 3:00 PM
          .slice(0, 5) // Limit to 5 days
          .map((day: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center mb-2 border-2 rounded-xl p-2"
            >
              <div>
                <span className="font-normal">
                  {new Date(day.dt).toLocaleString("hu-HU", {
                    weekday: "short",
                  })}
                </span>
              </div>
              <img
                className="w-8 py-1"
                src={`/Assets/weather-icons/${day.icon}.svg`}
                alt="weather icon"
              />
              <div>
                {Math.round(day.temp)}
                <span className="font-extralight text-xs pl-1">°C</span>
              </div>
              <div className="text-sm font-extralight italic">
                <span className="text-xs font-extralight italic">
                  {day.temp_min + " "}
                </span>
                /
                <span className="text-xs font-extralight italic">
                  {" " + day.temp_max}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Forecast;
