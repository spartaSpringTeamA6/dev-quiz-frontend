import { API_BASE_URL } from "../constants/index";
import api from "../helper/jwtInterceptor";

export const commentCreateApi = async (boardId, data) => {
  const response = await api
    .post(`${API_BASE_URL}/api/boards/${boardId}/comments`, data)
    .catch((error) => error.response);
  return response.data;
};

export const commentGetListApi = async (boardId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/boards/${boardId}/comments`)
    .catch((error) => error.response);
  return response.data;
};

export const commentUpdateApi = async (commentId, data) => {
  const response = await api
    .patch(`${API_BASE_URL}/api/comments/${commentId}`, data)
    .catch((error) => error.response);
  return response.data;
};

export const commentDeleteApi = async (commentId) => {
  const response = await api
    .delete(`${API_BASE_URL}/api/comments/${commentId}`)
    .catch((error) => error.response);
  return response.data;
};

export const commentLikeApi = async (commentId) => {
  const response = await api
    .post(`${API_BASE_URL}/api/comments/${commentId}/like`)
    .catch((error) => error.response);
  return response.data;
};

export const commentUnlikeApi = async (commentId) => {
  const response = await api
    .delete(`${API_BASE_URL}/api/comments/${commentId}/unlike`)
    .catch((error) => error.response);
  return response.data;
};
