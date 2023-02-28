import {
  REQUEST,
  ERROR,
  GET_SUCCESS,
  POST_SUCCESS,
  PATCH_SUCCESS,
  DELETE_SUCCESS,
} from "./cart.actionType";

const initial = {
  isError: true,
  isLoading: true,
  data: [],
  activePage: 1,
  perPage: 6,
};

export const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        // data: action.payload,
      };
    }
    case PATCH_SUCCESS: {
      const updatedData = state.data.map((el) =>
        el.id === action.payload.id
          ? { ...el, quantity: action.payload.quantity }
          : el
      );
      return {
        ...state,
        isLoading: false,
        data: updatedData,
      };
    }
    case GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case DELETE_SUCCESS: {
      const newData = state.data.filter((el) => el.id !== action.payload);
      return {
        ...state,
        isLoading: false,
        activePage: newData,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
