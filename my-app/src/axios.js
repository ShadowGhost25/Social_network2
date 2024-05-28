import axios from "axios";
import { localHost } from "./Route/route";
const instance = axios.create({
  // baseURL: "https://social-network2.vercel.app",
  baseURL: localHost,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config
});
export default instance;
