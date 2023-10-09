import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;
const accessToken = localStorage.getItem("accessToken");

const clientApi = axios.create({
  baseURL,
});

clientApi.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + accessToken;
  return config;
});

export default clientApi;
