import axios from "axios";
import { API_BASE_URL } from "../constants/index";

export const teamCreateTeam = async (data) => {
  const response = await axios
    .post(`${API_BASE_URL}/api/teams`, data, { withCredentials: true })
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamInviteUser = async (teamId, data) => {
  const response = await axios
    .post(`${API_BASE_URL}/api/teams/${teamId}`, data, {
      withCredentials: true,
    })
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamUpdateTeamName = async (teamId, data) => {
  const response = await axios
    .patch(`${API_BASE_URL}/api/teams/${teamId}/name`, data, {
      withCredentials: true,
    })
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamUpdateTeamAdmin = async (teamId, data) => {
  const response = await axios
    .patch(`${API_BASE_URL}/api/teams/${teamId}/admin`, data, {
      withCredentials: true,
    })
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamGetTeamInfo = async (teamId) => {
  const response = await axios
    .get(`${API_BASE_URL}/api/teams/${teamId}`, {
      withCredentials: true,
    })
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamDeleteTeam = async (teamId) => {
  const response = await axios
    .delete(`${API_BASE_URL}/api/teams/${teamId}`, {
      withCredentials: true,
    })
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamWithdrawTeam = async (teamId) => {
  const response = await axios
    .delete(`${API_BASE_URL}/api/teams/${teamId}/withdraw`, {
      withCredentials: true,
    })
    .catch((error) => null);
  return !response ? null : response.data;
};

export const teamDeleteTeamUser = async (teamId, data) => {
  const response = await axios
    .delete(`${API_BASE_URL}/api/teams/${teamId}/user`, data, {
      withCredentials: true,
    })
    .catch((error) => null);
  return !response ? null : response.data;
};
