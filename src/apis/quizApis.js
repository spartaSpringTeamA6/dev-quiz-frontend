import axios from "axios";
import { API_BASE_URL } from "../constants/index";

export const quizGetListApi = async (data) => {
  const response = await axios
    .get(API_BASE_URL + "/api/quizzes", {
      params: data,
      withCredentials: true,
    })
    .catch((error) => console.error(error));
  return !response ? null : response.data;
};

export const quizGetApi = async (quizId) => {
  const response = await axios
    .get(API_BASE_URL + "/api/quizzes/${quizId}")
    .catch((error) => null);
  return !response ? null : response.data;
};

export const quizSubmitApi = async (quizId, data) => {
  const response = await axios
    .post(API_BASE_URL + "/api/quizzes/${quizId}", data, {
      withCredentials: true,
    })
    .catch((error) => null);
  return !response ? null : response.data;
};
