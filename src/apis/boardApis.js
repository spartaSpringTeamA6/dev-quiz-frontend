import { API_BASE_URL } from "../constants/index";
import api from "../helper/jwtInterceptor";

export const boardGetListApi = async (quizId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/quizzes/${quizId}/boards`)
    .catch((error) => error.response);
  return response.data;
};

export const boardCreateApi = async (quizId, data) => {
  const response = await api
    .post(`${API_BASE_URL}/api/quizzes/${quizId}/boards`, data)
    .catch((error) => error.response);
  return response.data;
};

export const boardGetApi = async (boardId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/boards/${boardId}`)
    .catch((error) => error.response);
  return response.data;
};

export const boardDeleteApi = async (boardId) => {
  const response = await api
    .delete(`${API_BASE_URL}/api/boards/${boardId}`)
    .catch((error) => error.response);
  return response.data;
};

export const boardUpdateApi = async (boardId, data) => {
  const response = await api
    .patch(`${API_BASE_URL}/api/boards/${boardId}`, data)
    .catch((error) => error.response);
  return response.data;
};
