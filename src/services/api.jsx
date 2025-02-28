import axios from "axios";

const baseURL = "https://workintech-fe-ecommerce.onrender.com";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor for setting the token from localStorage
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // Token should already include 'Bearer ' prefix when stored
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("API Response:", {
      url: response.config.url,
      method: response.config.method,
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error) => {
    console.error("API Error Response:", {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      data: error.response?.data,
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;
