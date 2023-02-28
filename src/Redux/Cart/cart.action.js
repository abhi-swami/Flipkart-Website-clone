import {
  REQUEST,
  ERROR,
  GET_SUCCESS,
  POST_SUCCESS,
  PATCH_SUCCESS,
  DELETE_SUCCESS,
} from "./cart.actionType";

import {
  CartApiPostReq,
  CartApiGetReq,
  CartApiDeleteReq,
  CartApiPatchReq,
} from "./cart.api";

const CarthRequest = () => {
  return {
    type: REQUEST,
  };
};
const getCartSuccess = (data) => {
  return {
    type: GET_SUCCESS,
    payload: data,
  };
};
const postCartSuccess = (data) => {
  return {
    type: POST_SUCCESS,
    payload: data,
  };
};
const patchCartSuccess = (data) => {
  return {
    type: PATCH_SUCCESS,
    payload: data,
  };
};
const deleteCartSuccess = (id) => {
  return {
    type: DELETE_SUCCESS,
    payload: id,
  };
};
const CartError = () => {
  return {
    type: ERROR,
  };
};

export const PostCartProduct = (cartdata) => async (dispatch) => {
  dispatch(CarthRequest());
  try {
    const data = await CartApiPostReq(cartdata);
    dispatch(postCartSuccess(data));
  } catch (er) {
    dispatch(CartError());
  }
};
export const patchCartProduct = (id, cartdata) => async (dispatch) => {
  dispatch(CarthRequest());
  try {
    const data = await CartApiPatchReq(id, cartdata);
    dispatch(patchCartSuccess(data));
  } catch (er) {
    dispatch(CartError());
  }
};
export const getCartProduct = () => async (dispatch) => {
  dispatch(CarthRequest());
  try {
    const data = await CartApiGetReq();
    dispatch(getCartSuccess(data));
  } catch (er) {
    dispatch(CartError());
  }
};
export const deleteCartProduct = (id) => async (dispatch) => {
  dispatch(CarthRequest());
  try {
    await CartApiDeleteReq(id);
    dispatch(deleteCartSuccess(id));
  } catch (er) {
    dispatch(CartError());
  }
};
