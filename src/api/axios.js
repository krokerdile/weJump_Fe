import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const clientApi = axios.create({
  baseURL,
});

export default clientApi;
