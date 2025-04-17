const MainWeather = (props: any) => {
  const { weather } = props;
  const name: string = weather.name;
  const country: string = weather.sys.country;
  const temp: number = weather.main.temp;

  return (
    <div className="w-max h-max text-center p-5 mt-10">
      <div className="p-2 text-6xl font-medium">{Math.round(temp)} °C</div>
      <div className="p-2">
        <div className="text-3xl">{name}</div>
        <div className="text-lg font-extralight italic">{country}</div>
      </div>
    </div>
  );
};

export default MainWeather;
