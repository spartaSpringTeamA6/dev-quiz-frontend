import { API_BASE_URL } from "../constants/index";
import api from "../helper/jwtInterceptor";

//USER-005
export const userGetMyInfoApi = async () => {
  const response = await api
    .get(`${API_BASE_URL}/api/users`)
    .catch((error) => error.response);
  return response.data;
};

// USER-001
export const userUpdateInfoApi = async (userId, data) => {
  const response = await api
    .patch(`${API_BASE_URL}/api/users/${userId}`, data)
    .catch((error) => error.response);
  return response.data;
};

// USER-012
export const userGetCorrectQuizApi = async (userId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/users/${userId}/quizzes/correct`)
    .catch((error) => error.response);
  return response.data;
};

// USER-013
export const userGetFailQuizApi = async (userId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/users/${userId}/quizzes/fail`)
    .catch((error) => error.response);
  return response.data;
};

// USER-014
export const userGetPassQuizApi = async (userId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/users/${userId}/quizzes/pass`)
    .catch((error) => error.response);
  return response.data;
};
