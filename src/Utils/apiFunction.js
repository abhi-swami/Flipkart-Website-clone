import axios from "axios";

export const getProduct = (url) => {
  return axios
    .get(`${url}`)
    .then((res) => res.data)
    .catch((err) => err);
};
export const patchProduct = (url, data) => {
  return axios
    .patch(`${url}`, data)
    .then((res) => res.data)
    .catch((err) => err);
};
