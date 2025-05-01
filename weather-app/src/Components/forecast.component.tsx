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
      <div className="mt-3 w-full border-t-2 text-center font-extralight text-xs">
        Forecast
      </div>
      <div className="grid grid-cols-4 gap-2  p-2 w-full">
        {weather.forecast
          .filter((_: any, index: any) => index % 8 === 0) // Assuming 3-hour intervals, 8 intervals per day
          .slice(1, 5) // Limit to 5 days
          .map((day: any, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center mb-2 border-2 rounded-xl p-2"
            >
              <div>
                <div className="flex flex-col items-center">
                  <span className="font-light">
                    {new Date(day.dt).toLocaleString("hu-HU", {
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </span>
                  <span className="font-normal">
                    {new Date(day.dt).toLocaleString("hu-HU", {
                      weekday: "short",
                    })}
                  </span>
                </div>
              </div>
              <img
                className="w-8 py-1"
                src={`/Assets/weather-icons/${day.icon}.svg`}
                alt="weather icon"
              />
              <div>
                {day.temp}
                <span className="font-extralight text-xs pl-1">°C</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Forecast;
