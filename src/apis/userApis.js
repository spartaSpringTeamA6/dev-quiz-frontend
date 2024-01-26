import { API_BASE_URL } from "../constants/index";
import api from "../helper/jwtInterceptor";

export const userGetMyInfoApi = async () => {
  const response = await api
    .get(`${API_BASE_URL}/api/users`)
    .catch((error) => error.response);
  return response.data;
};

export const userUpdateInfoApi = async (userId, data) => {
  const response = await api
    .patch(`${API_BASE_URL}/api/users/${userId}`, data)
    .catch((error) => null);
  return !response ? null : response.data;
};
