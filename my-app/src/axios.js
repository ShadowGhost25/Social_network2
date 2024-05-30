import axios from "axios";
import { localHost } from "./Route/route";
const instance = axios.create({
  baseURL: localHost,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config
});
export default instance;
