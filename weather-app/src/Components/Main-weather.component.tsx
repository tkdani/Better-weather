const MainWeather = ({ location }: any) => {
  const name: string = location["name"];
  const country: string = location["country"];
  const lat: string = location["lat"];
  const lon: string = location["lon"];

  return (
    <div className="w-max h-max text-center p-5 mt-10">
      <div className="p-2 text-6xl font-medium">18 °C</div>
      <div className="p-2">
        <div className="text-3xl">{name}</div>
        <div className="text-lg font-extralight italic">{country}</div>
      </div>
    </div>
  );
};

export default MainWeather;
