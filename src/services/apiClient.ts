import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

const apiClient = axios.create({
  baseURL: API_HOST,
  timeout: 20000,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (config.url) {
      const url = new URL(config.url, config.baseURL);

      url.searchParams.set("api_key", API_KEY);
      config.url = url.pathname + url.search;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default apiClient;
