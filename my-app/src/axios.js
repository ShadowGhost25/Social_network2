import axios from "axios";
const instance = axios.create({
  // baseURL: "https://social-network2.vercel.app",
  baseURL: "http://localhost:3002",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config
});
export default instance;
