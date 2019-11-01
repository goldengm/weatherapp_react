import axios from "axios";

const API_KEY = "137a45344a460e9ab7a45fef78b230c1";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;

  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
