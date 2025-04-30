import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Forecast = (props: any) => {
  const { weather, onFavClick } = props;
  const handleFavClick = () => {
    onFavClick(weather);
  };
  return (
    <div className="relative w-[40rem] h-[20rem] bg-white/30 mb-5 rounded-tl-lg rounded-br-lg border-2">
      <button onClick={handleFavClick}>
        {weather.fav ? (
          <FavoriteIcon className="absolute right-1 top-1" />
        ) : (
          <FavoriteBorderIcon className="absolute right-1 top-1" />
        )}
      </button>
    </div>
  );
};
export default Forecast;
