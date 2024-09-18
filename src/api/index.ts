import http from "axios";
import envConfig from "../constants/env.constant";
import useSession from "../hooks/useSession";

// Set the base URL for all requests
http.defaults.baseURL = envConfig.serverUrl;

// Add a request interceptor to include the token and userId in all requests
http.interceptors.request.use(
  (config) => {
    const { token = "", userId = "" } = useSession().getSession();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (userId) {
      config.headers.userId = userId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
