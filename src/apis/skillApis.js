import { API_BASE_URL } from "../constants/index";
import api from "../helper/jwtInterceptor";

// SKILL-001
export const skillGetSkillsApi = async () => {
  const response = await api
    .get(`${API_BASE_URL}/api/skills`)
    .catch((error) => error.response);
  return response.data;
};
