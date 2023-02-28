import axios from "axios";

export const postFavouriteApiFunction = async (cartData, url) => {
  const res = await axios.post(`${url}`, cartData);
  const data = res.data;
  return data;
};
export const getFavouriteApiFunction = async (cartData, url) => {
  const res = await axios.post(`${url}`);
  const data = res.data;
  return data;
};
