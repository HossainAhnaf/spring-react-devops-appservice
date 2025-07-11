import axios from "axios";
import config from "../../config.json"

// axios instance for making requests
const axiosInstance = axios.create({
  baseURL: config[process.env.NODE_ENV || "development"].api_url,
});

// request interceptor for adding token
axiosInstance.interceptors.request.use((config) => {
  // add token to request headers
  config.headers["Authorization"] = localStorage.getItem("token");
  return config;
});

export default axiosInstance;
