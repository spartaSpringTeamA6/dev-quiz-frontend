import api from "../helper/jwtInterceptor";
import { API_BASE_URL } from "../constants/index";

export const authReissueApi = async () => {
  const response = await api
    .post(`${API_BASE_URL}/api/auth/reissue`)
    .catch((error) => error.response);
  return response;
};

export const authLogoutApi = async () => {
  const response = await api
    .post(`${API_BASE_URL}/api/auth/logout`)
    .catch((error) => error.response);
  return response;
};
