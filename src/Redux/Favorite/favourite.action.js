import {
  REQUEST,
  ERROR,
  GET_SUCCESS,
  POST_SUCCESS,
  HANDLE_PAGE_CHANGE,
} from "./favourite.actionType";

import {
  postFavouriteApiFunction,
  getFavouriteApiFunction,
} from "./favourite.api";

const getFavoriteRequest = () => {
  return {
    type: REQUEST,
  };
};
const postFavoriteSuccess = (data) => {
  return {
    type: POST_SUCCESS,
    payload: data,
  };
};
const getFavoriteSuccess = (data) => {
  return {
    type: GET_SUCCESS,
    payload: data,
  };
};
const getFavoriteError = () => {
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
export const postFavouriteProduct = (cartdata, url) => async (dispatch) => {
  dispatch(getFavoriteRequest());
  try {
    const data = await postFavouriteApiFunction(cartdata, url);
    dispatch(postFavoriteSuccess(data));
  } catch (er) {
    dispatch(getFavoriteError());
  }
};
export const getFavouriteProduct = (url) => async (dispatch) => {
  dispatch(getFavoriteRequest());
  try {
    const data = await getFavouriteApiFunction(url);
    dispatch(getFavoriteSuccess(data));
  } catch (er) {
    dispatch(getFavoriteError());
  }
};

export const handlePage = (param) => (dispatch) => {
  dispatch(handldePageChange(param));
};
