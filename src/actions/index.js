
import axios from 'axios';

const API_KEY = "503fd5b4de533550d28aefd8603e5978";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";

// This is an action creator, so it must return an action
// Action is an object that always has to have a type
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},US`;
  const request = axios.get(url);

  console.log("Request: ", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
