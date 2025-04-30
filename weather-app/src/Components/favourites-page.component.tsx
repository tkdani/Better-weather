import WeatherList from "./weather-list.component";

const Favouritepage = (props: any) => {
  const { favLocations, onFavClick, handleMainPage } = props;
  return (
    <div>
      <WeatherList locations={favLocations} onFavClick={onFavClick} />
    </div>
  );
};
export default Favouritepage;
