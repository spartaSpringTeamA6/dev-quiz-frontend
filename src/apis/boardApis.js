import axios from "axios";
import { API_BASE_URL } from "../constants/index";

axios.defaults.withCredentials = true;

export const boardGetListApi = async (quizId) => {
  const response = await axios
    .get(`${API_BASE_URL}/api/quizzes/${quizId}/boards`)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const boardCreateApi = async (quizId, data) => {
  const response = await axios
    .post(`${API_BASE_URL}/api/quizzes/${quizId}/boards`, data)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const boardGetApi = async (boardId) => {
  const response = await axios
    .get(`${API_BASE_URL}/api/boards/${boardId}`)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const boardDeleteApi = async (boardId) => {
  const response = await axios
    .delete(`${API_BASE_URL}/api/boards/${boardId}`)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const boardUpdateApi = async (boardId, data) => {
  const response = await axios
    .patch(`${API_BASE_URL}/api/boards/${boardId}`, data)
    .catch((error) => null);
  return !response ? null : response.data;
};
