import axios from "axios";
import { API_BASE_URL } from "../constants/index";

axios.defaults.withCredentials = true;

export const authReissueApi = async () => {
  const response = await axios
    .post(`${API_BASE_URL}/api/auth/reissue`)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const authLogoutApi = async () => {
  const response = await axios
    .post(`${API_BASE_URL}/api/auth/logout`)
    .catch((error) => null);
  return !response ? null : response.data;
};
