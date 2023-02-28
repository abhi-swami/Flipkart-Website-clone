import {
  REQUEST,
  ERROR,
  GET_SUCCESS,
  HANDLE_PAGE_CHANGE,
} from "./admin.actionType";

import { AdminApiFunction } from "./admin.api";

const getSearchRequest = () => {
  return {
    type: REQUEST,
  };
};
const getAdminSuccess = (data) => {
  return {
    type: GET_SUCCESS,
    payload: data,
  };
};
const getSearchError = () => {
  return {
    type: ERROR,
  };
};
const handldePageChange = (payload) => {
  return {
    type: HANDLE_PAGE_CHANGE,
    payload,
  };
};
export const getSearchProducts =
  (getProductsParam, url) => async (dispatch) => {
    dispatch(getSearchRequest());
    try {
      const data = await AdminApiFunction(getProductsParam, url);
      dispatch(getAdminSuccess(data));
    } catch (er) {
      dispatch(getSearchError());
    }
  };
export const handlePage = (param) => (dispatch) => {
  dispatch(handldePageChange(param));
};
