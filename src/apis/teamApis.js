import { API_BASE_URL } from "../constants/index";
import api from "../helper/jwtInterceptor";

// TEAM-001
export const teamCreateTeamApi = async (data) => {
  const response = await api
    .post(`${API_BASE_URL}/api/teams`, data)
    .catch((error) => error.response);
  return response.data;
};

// TEAM-008
export const teamInviteUserApi = async (teamId, data) => {
  const response = await api
    .post(`${API_BASE_URL}/api/teams/${teamId}/invitation`, data)
    .catch((error) => error.response);
  return response.data;
};

// TEAM-003
export const teamUpdateTeamNameApi = async (teamId, data) => {
  const response = await api
    .patch(`${API_BASE_URL}/api/teams/${teamId}/name`, data)
    .catch((error) => error.response);
  return response.data;
};

// TEAM-004
export const teamUpdateTeamAdminApi = async (teamId, data) => {
  const response = await api
    .patch(`${API_BASE_URL}/api/teams/${teamId}/admin`, data)
    .catch((error) => error.response);
  return response.data;
};

// TEAM-002
export const teamGetTeamInfoApi = async (teamId) => {
  const response = await api
    .get(`${API_BASE_URL}/api/teams/${teamId}`)
    .catch((error) => error.response);
  return response.data;
};

// TEAM-007
export const teamDeleteTeamApi = async (teamId) => {
  const response = await api
    .delete(`${API_BASE_URL}/api/teams/${teamId}`)
    .catch((error) => error.response);
  return response.data;
};

// TEAM-006
export const teamWithdrawTeamApi = async (teamId) => {
  const response = await api
    .delete(`${API_BASE_URL}/api/teams/${teamId}/withdraw`)
    .catch((error) => error.response);
  return response.data;
};

// TEAM-005
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

// TEAM-009
export const teamAcceptTeamInvitationApi = async (userId, teamId) => {
  const response = await api
    .post(`${API_BASE_URL}/api/teams/${teamId}/accept`)
    .catch((error) => error.response);
  return response.data;
};

// TEAM-010
export const teamRejectTeamInvitationApi = async (userId, teamId) => {
  const response = await api
    .delete(`${API_BASE_URL}/api/teams/${teamId}/reject`)
    .catch((error) => error.response);
  return response.data;
};
