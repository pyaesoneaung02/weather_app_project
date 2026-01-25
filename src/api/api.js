import axios from "axios";


export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const api_key = "fd1d5b8642834e1bfee818fa7b46a839";