import axiosInstance from "@/api";

const AUTH_URL = "/api/auth";

export const authApi = {
  login: (payload) => {
    return axiosInstance.post(`${AUTH_URL}/login`, payload);
  },

  register: (payload) => {
    return axiosInstance.post(`${AUTH_URL}/register`, payload);
  },
};
