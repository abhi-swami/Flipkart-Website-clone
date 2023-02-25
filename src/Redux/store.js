
import { legacy_createStore,combineReducers,applyMiddleware } from 'redux'
import { searchReducer } from './Search/searchReducer'
import thunk from 'redux-thunk'





const rootReducer=combineReducers({searchReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))



