import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../redux/actions/weatherAction";

const Weather = () => {
  const dispatch = useDispatch();

  const { weatherData } = useSelector((state) => state.weather);

  const [location, setLocation] = useState("");
  const [temperatur, setTemperatur] = useState();
  const [feelsLike, setFeelsLike] = useState();
  const [humidity, setHumidity] = useState();

  const handleWeatherData = async (e) => {
    e.preventDefault();

    dispatch(getWeatherData(location, setTemperatur, setFeelsLike, setHumidity));
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col justify-center items-center font-roboto">
      <div className="mb-5 py-3 ">
        <form onSubmit={handleWeatherData}>
          <input
            type="text"
            className=" border-[1px] rounded-xl bg-gray-500 bg-opacity-50 text-white py-2 px-2 hover:border-violet-500 duration-200 md:"
            placeholder="Search your city"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </form>
      </div>
      <div className="border-1 rounded-md h-[80%] w-[85%] shadow-xl bg-gray-500 bg-opacity-30">
        <div className="">
          <p className="text-white text-2xl py-2 px-2 md:text-5xl">
            {weatherData.name}, {weatherData?.sys?.country}
          </p>
          <div className="grid grid-cols-2">
            <p className="text-white text-6xl py-2 px-2 font-bold md:text-[120px]">{temperatur}°C</p>
            <p className="text-white text-xl pr-2 my-auto text-end md:text-2xl md:pr-[50px]">
              {weatherData.weather ? weatherData.weather[0].main : null}, {weatherData.weather ? weatherData.weather[0].description : null}
            </p>
          </div>
        </div>
        <div className="flex h-[80%] items-end justify-around md:h-[70%]">
          <div className="flex justify-around text-white border-1 rounded-lg bg-fuchsia-700 bg-opacity-30 py-3 px-3 md:text-xl">
            <div className="px-2 text-center">
              <p className="font-bold">Feels Like</p>
              <p>{feelsLike}°C</p>
            </div>
            <div className="px-2 text-center">
              <p className="font-bold">Humidity</p>
              <p>{humidity}%</p>
            </div>
            <div className="px-2 text-center">
              <p className="font-bold">Wind Speed</p>
              <p>{weatherData.wind?.speed}mph</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
