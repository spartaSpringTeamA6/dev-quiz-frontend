import { API_BASE_URL } from "../constants/index";
import api from "../helper/jwtInterceptor";

export const teamCreateTeamApi = async (data) => {
  const response = await api
    .post(`${API_BASE_URL}/api/teams`, data)
    .catch((error) => error.response);
  return response.data;
};

export const teamInviteUserApi = async (teamId, data) => {
  const response = await api
    .post(`${API_BASE_URL}/api/teams/${teamId}/invitation`, data)
    .catch((error) => error.response);
  return response.data;
};

export const teamUpdateTeamNameApi = async (teamId, data) => {
  const response = await api
    .patch(`${API_BASE_URL}/api/teams/${teamId}/name`, data)
    .catch((error) => error.response);
  return response.data;
};

export const teamUpdateTeamAdminApi = async (teamId, data) => {
  const response = await api
    .patch(`${API_BASE_URL}/api/teams/${teamId}/admin`, data)
    .catch((error) => error.response);
  return response.data;
};

export const teamGetTeamInfoApi = async (teamId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/teams/${teamId}`)
    .catch((error) => error.response);
  return response.data;
};

export const teamDeleteTeamApi = async (teamId) => {
  const response = await api
    .delete(`${API_BASE_URL}/api/teams/${teamId}`)
    .catch((error) => error.response);
  return response.data;
};

export const teamWithdrawTeamApi = async (teamId) => {
  const response = await api
    .delete(`${API_BASE_URL}/api/teams/${teamId}/withdraw`)
    .catch((error) => error.response);
  return response.data;
};

export const teamDeleteTeamUserApi = async (teamId, data) => {
  const response = await api
    .delete(`${API_BASE_URL}/api/teams/${teamId}/user`, {
      data: {
        ...data,
      },
    })
    .catch((error) => error.response);
  return response.data;
};

export const teamGetTeamsApi = async (userId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/users/${userId}/teams`)
    .catch((error) => error.response);
  return response.data;
};
