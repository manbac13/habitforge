import axios from "axios";
// import { notify } from "@/utils/notify/notify";
import { triggerLogout } from "@/utils/authEvents";

const getBaseURL = () => {
  let mode = import.meta.env.MODE;
  if (mode === "development") {
    return "http://localhost:8080";
  } else {
    return import.meta.env.VITE_BACKEND_URL;
  }
};
const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  // withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject(error);
    }
    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
      triggerLogout();
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
