import axios from "axios";
import * as types from "./actionType";

const BASE_URL = "http://localhost:8080";

export const getCartProducts = () => (dispatch) => {
  dispatch({ type: types.GET_CART_LOADING });
  return axios
    .get(`${BASE_URL}/carts`)
    .then((res) => {
      dispatch({ type: types.GET_CART_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.GET_CART_ERROR });
    });
};

export const deleteItemFromCart = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_LOADING });
  return axios
    .delete(`${BASE_URL}/carts/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_CART_SUCCESS,payload:res.data });
    })
    .catch(() => {
      dispatch({ type: types.DELETE_CART_ERROR });
    });
};
