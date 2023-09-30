import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
export default axiosInstance;
