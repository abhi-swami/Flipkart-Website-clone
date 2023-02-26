import {
  REQUEST,
  ERROR,
  GET_SUCCESS,
  POST_SUCCESS,
  HANDLE_PAGE_CHANGE,
} from "./favourite.actionType";

const initial = {
  isError: true,
  isLoading: true,
  data: [],
};

export const favouriteReducer = (state = initial, action) => {
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
    case GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }
    case HANDLE_PAGE_CHANGE: {
      return {
        ...state,
        isLoading: false,
        activePage: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
