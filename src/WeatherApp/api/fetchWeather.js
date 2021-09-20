import React from 'react';
import axios from 'axios';

const URL =  "https://api.openweathermap.org/data/2.5/weather";
const API_key = "f6bb6e89127639929c38be22a1d45f1f";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL ,{
    params: {
      q: query,
      units: 'metric',
      APPID: API_key,
    }
  })
  return data;
}