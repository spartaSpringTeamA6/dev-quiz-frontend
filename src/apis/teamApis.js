import axios from "axios";
import { API_BASE_URL } from "../constants/index";

axios.defaults.withCredentials = true;

export const teamCreateTeamApi = async (data) => {
  const response = await axios
    .post(`${API_BASE_URL}/api/teams`, data)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamInviteUserApi = async (teamId, data) => {
  const response = await axios
    .post(`${API_BASE_URL}/api/teams/${teamId}`, data)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamUpdateTeamNameApi = async (teamId, data) => {
  const response = await axios
    .patch(`${API_BASE_URL}/api/teams/${teamId}/name`, data)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamUpdateTeamAdminApi = async (teamId, data) => {
  const response = await axios
    .patch(`${API_BASE_URL}/api/teams/${teamId}/admin`, data)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamGetTeamInfoApi = async (teamId) => {
  const response = await axios
    .get(`${API_BASE_URL}/api/teams/${teamId}`)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamDeleteTeamApi = async (teamId) => {
  const response = await axios
    .delete(`${API_BASE_URL}/api/teams/${teamId}`)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamWithdrawTeamApi = async (teamId) => {
  const response = await axios
    .delete(`${API_BASE_URL}/api/teams/${teamId}/withdraw`)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamDeleteTeamUserApi = async (teamId, data) => {
  const response = await axios
    .delete(`${API_BASE_URL}/api/teams/${teamId}/user`, data)
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamGetTeamsApi = async (userId) => {
  const response = await axios
    .get(`${API_BASE_URL}/api/users/${userId}/teams`)
    .catch((error) => null);
  return !response ? null : response.data;
};
