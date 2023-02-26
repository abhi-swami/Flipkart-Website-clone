import axios from "axios";
import { base_url } from "../../Utils/url";
const url = `${base_url}/cart`;

export const CartApiPostReq = async (cartData) => {
  const res = await axios.post(`${url}`, cartData);
  const data = res.data;
  return data;
};
export const CartApiPatchReq = async (id, qty) => {
  const res = await axios.patch(
    `${url}/${id}`,
    {
      quantity: qty,
    },
    {
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );
  const data = res.data;
  return data;
};
export const CartApiGetReq = async () => {
  const res = await axios.get(`${url}`);
  const data = res.data;
  return data;
};
export const CartApiDeleteReq = async (id) => {
  const res = await axios.delete(`${url}/${id}`);
  const data = res.data;
  return data;
};
