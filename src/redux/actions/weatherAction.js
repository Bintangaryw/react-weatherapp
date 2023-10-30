import axios from "axios";
import { setWeatherData } from "../reducers/weatherReducer";

export const getWeatherData = (location, setTemperatur, setFeelsLike, setHumidity) => async (dispatch) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}q=${location}&appid=${import.meta.env.VITE_API_KEY}`);
    const dataWeather = response.data;
    console.log(dataWeather);

    const temp = Math.floor(dataWeather.main?.temp - 273);
    setTemperatur(temp);
    const feels = Math.floor(dataWeather.main?.feels_like - 273);
    setFeelsLike(feels);
    const humid = Math.floor(dataWeather.main?.humidity);
    setHumidity(humid);

    dispatch(setWeatherData(dataWeather));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error);
      console.error(error);
    }
  }
};
