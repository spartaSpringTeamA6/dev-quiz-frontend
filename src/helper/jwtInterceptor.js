import axios from "axios";
import { API_BASE_URL, PATH_LOGIN } from "../constants/index";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});

export async function postRefreshToken() {
  const response = axios.post(`${API_BASE_URL}/api/auth/reissue`);
  return response;
}

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
        try {
          const tokenResponse = await postRefreshToken();
          if (tokenResponse.status === 201) {
            return axios(originalRequest);
          }
        } catch (error) {
          window.location.replace(PATH_LOGIN);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
