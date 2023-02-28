import axios from "axios";

// import { base_url } from "../../Utils/url";

export const AdminApiFunction = async (getProductsParam, url) => {
  const res = await axios.get(`${url}`, getProductsParam);
  // console.log(res.headers.getAll('X-Total-Count'))
  const data = res.data;

  return data;
};
