import axios from "axios";
import { API_BASE_URL, PATH_LOGIN } from "../constants/index";
import { authReissueApi } from "../apis/authApis";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      if (error.response.data.message === "JWT-001") {
        document.cookie = "access_token=; max-age=0";
        const originalRequest = config;
        const tokenResponse = await authReissueApi();
        if (tokenResponse.status === 201) {
          return axios(originalRequest);
        } else {
          window.location.replace(PATH_LOGIN);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
