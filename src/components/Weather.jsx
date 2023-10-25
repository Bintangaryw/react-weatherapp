const Weather = () => {
  // const url = ``;
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center font-roboto">
      <div className="border-1 rounded-md h-[80%] w-[85%] shadow-xl bg-gray-500 bg-opacity-30">
        <div className="">
          <p className="text-white text-2xl py-2 px-2 md:text-5xl">Semarang</p>
          <div className="grid grid-cols-2">
            <p className="text-white text-6xl py-2 px-2 md:text-[120px]">39°C</p>
            <p className="text-white text-2xl pr-2 my-auto text-end md:text-4xl md:pr-[50px]">Clear</p>
          </div>
        </div>
        <div className="flex h-[80%] items-end justify-around md:h-[70%]">
          <div className="flex justify-around text-white border-1 rounded-lg bg-fuchsia-700 bg-opacity-30 py-3 px-3 md:text-xl">
            <div className="px-2 text-center">
              <p className="font-bold">Feels Like</p>
              <p>39°C</p>
            </div>
            <div className="px-2 text-center">
              <p className="font-bold">Humidity</p>
              <p>20%</p>
            </div>
            <div className="px-2 text-center">
              <p className="font-bold">Wind Speed</p>
              <p>12mph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
