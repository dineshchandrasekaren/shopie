import http from "axios";
import envConfig from "../constants/env.constant";

http.defaults.baseURL = envConfig.serverUrl;

export default http;
