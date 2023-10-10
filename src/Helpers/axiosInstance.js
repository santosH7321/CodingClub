import axios from "axios";

const BASE_URL = "http://localhost:5014/api/v1";
const axiosInstance = axios.create();
axiosInstance.defults.baseURL = BASE_URL;
axiosInstance.defults.withCredentials = true;

export default axiosInstance;