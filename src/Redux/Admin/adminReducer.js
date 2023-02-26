import {
  REQUEST,
  ERROR,
  GET_SUCCESS,
  HANDLE_PAGE_CHANGE,
} from "./admin.actionType";

const initial = {
  isError: true,
  isLoading: true,
  data: [],
  activePage: 1,
  perPage: 6,
};

export const searchReducer = (state = initial, action) => {
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
