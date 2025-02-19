import axios from "axios";

const baseURL = "https://workintech-fe-ecommerce.onrender.com";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

// Interceptor for setting the token from localStorage
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token; // Note: No 'Bearer ' prefix
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
