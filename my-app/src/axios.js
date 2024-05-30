import axios from "axios";
import { localHost } from "./Route/route";
const instance = axios.create({
  baseURL: localHost,
});
//    // "start": "node --max-old-space-size=2048 node_modules/.bin/react-scripts start",
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config
});
export default instance;
