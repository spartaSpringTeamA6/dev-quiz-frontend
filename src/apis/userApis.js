import axios from "axios";
import { API_BASE_URL } from "../constants/index";

export const userGetMyInfoApi = async () => {
  const response = await axios
    .get(`${API_BASE_URL}/api/users`, {
      withCredentials: true,
    })
    .catch((error) => null);
  return !response ? null : response.data;
};

export const userUpdateInfoApi = async (userId, data) => {
  const response = await axios
    .patch(`${API_BASE_URL}/api/users/${userId}`, data, {
      withCredentials: true,
    })
    .catch((error) => null);
  return !response ? null : response.data;
};
