import { combineReducers } from "@reduxjs/toolkit";
import weatherReducer from "./weatherReducer";

export default combineReducers({
  weather: weatherReducer,
});
