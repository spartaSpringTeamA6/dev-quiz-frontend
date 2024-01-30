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

// USER-003
export const userAcceptTeamInvitationApi = async (userId, teamId) => {
  const response = await api
    .post(`${API_BASE_URL}/api/users/${userId}/teams/${teamId}/accept`)
    .catch((error) => error.response);
  console.log(response);
  console.log(response.data);
  return response.data;
};

// USER-004
export const userRejectTeamInvitationApi = async (userId, teamId) => {
  const response = await api
    .delete(`${API_BASE_URL}/api/users/${userId}/teams/${teamId}/reject`)
    .catch((error) => error.response);
  return response.data;
};

// USER-008
export const userGetTeamInvitationApi = async (userId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/users/${userId}/teams/invitations`)
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
