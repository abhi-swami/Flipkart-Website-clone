
import { legacy_createStore,combineReducers,applyMiddleware } from 'redux'
import { searchReducer } from './Search/searchReducer'
import { cartReducer } from "./cart/reducer"
import thunk from 'redux-thunk'





const rootReducer=combineReducers({
    searchReducer:searchReducer,
    cartReducer:cartReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))



