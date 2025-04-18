const MainWeather = (props: any) => {
  const { weather } = props;

  {
    if (!weather) {
      return <div>No weather data</div>;
    }
  }

  const name: string = weather?.name || "";
  const country: string = weather?.sys?.country || "";
  const temp: number = weather?.main?.temp || 0;
  const icon: string = weather?.weather[0]?.icon || "";

  return (
    <div className="w-max h-max text-center p-5 mt-10">
      <div className="flex flex-row justify-center">
        <img src={`/svg/${icon}.svg`} alt="weather icon" className="w-20" />
        <div className="p-2 text-4xl font-medium">{Math.round(temp)} °C</div>
      </div>
      <div className="p-2">
        <div className="text-3xl">{name}</div>
        <div className="text-lg font-extralight italic">{country}</div>
      </div>
    </div>
  );
};

export default MainWeather;
