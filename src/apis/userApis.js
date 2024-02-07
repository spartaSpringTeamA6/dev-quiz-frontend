import { API_BASE_URL } from "../constants/index";
import api from "../helper/jwtInterceptor";

//USER-006
export const userGetMyInfoApi = async () => {
  const response = await api
    .get(`${API_BASE_URL}/api/users/mypage`)
    .catch((error) => error.response);
  return response.data;
};

// USER-001
export const userUpdateUsernameApi = async (userId, data) => {
  const response = await api
    .patch(`${API_BASE_URL}/api/users/${userId}/username`, data)
    .catch((error) => error.response);
  return response.data;
};

// USER-016
export const userUpdateSkillsApi = async (userId, data) => {
  const response = await api
    .patch(`${API_BASE_URL}/api/users/${userId}/skills`, data)
    .catch((error) => error.response);
  return response.data;
};

// USER-008
export const userGetTeamInvitationApi = async (userId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/users/${userId}/invitations`)
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

// USER-015
export const userGetGrassApi = async (userId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/users/${userId}/grasses`)
    .catch((error) => error.response);
  return response.data;
};

// USER-009
export const teamGetTeamsApi = async (userId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/users/${userId}/teams`)
    .catch((error) => error.response);
  return response.data;
};
