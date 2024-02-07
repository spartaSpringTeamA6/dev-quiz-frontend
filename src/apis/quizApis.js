import { API_BASE_URL } from "../constants/index";
import api from "../helper/jwtInterceptor";

export const quizGetQuizzesApi = async (param) => {
  const response = await api
    .get(API_BASE_URL + "/api/quizzes", {
      params: param,
    })
    .catch((error) => error.response);
  return response.data;
};

export const quizGetQuizApi = async (quizId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/quizzes/${quizId}`)
    .catch((error) => error.response);
  return response.data;
};

export const quizSubmitAnswerApi = async (quizId, data) => {
  const response = await api
    .post(`${API_BASE_URL}/api/quizzes/${quizId}`, data)
    .catch((error) => error.response);
  return response.data;
};

export const quizSubmitPassApi = async (quizId) => {
  const response = await api
    .post(`${API_BASE_URL}/api/quizzes/${quizId}/pass`)
    .catch((error) => error.response);
  return response.data;
};
