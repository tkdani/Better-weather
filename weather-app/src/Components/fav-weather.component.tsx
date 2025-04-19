const FavWeather = (props: any) => {
  const { weather } = props;

  {
    if (weather.length == 0) {
      return <div>No weather data</div>;
    }
  }

  const name: string = weather?.name || "";
  const country: string = weather?.sys?.country || "";
  const temp: number = weather?.main?.temp || 0;
  const icon: string = weather?.weather[0]?.icon || "";

  return (
    <div className="w-max h-max text-center px-5 py-4 relative bg-white/30 border-2 rounded-tl-lg rounded-br-lg">
      <div className="border-b-2 pb-4 flex flex-row justify-between h-24">
        <img
          src="/Assets/icons/ei-heart.svg"
          className="w-8 absolute top-0 right-0"
          alt="likeButton"
        />
        <img
          src={`/Assets/weather-icons/${icon}.svg`}
          alt="weather icon"
          className="w-auto"
        />
        <div className="p-2 text-4xl font-medium flex items-center">
          {Math.round(temp)} °C
        </div>
      </div>
      <div className="h-max pt-2">
        <div className="text-3xl">{name}</div>
        <div className="text-lg font-extralight italic">{country}</div>
      </div>
    </div>
  );
};

export default FavWeather;
