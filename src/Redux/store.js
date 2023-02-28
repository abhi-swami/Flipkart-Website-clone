import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { searchReducer } from "./Search/searchReducer";
import { cartReducer } from "../Redux/Cart/cart.Reducer";
import { favouriteReducer } from "./Favorite/favourite.Reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  searchReducer,
  cartReducer,
  favouriteReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
