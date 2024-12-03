import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk"; // Corrected import

import { authReducer } from "./auth/Reducer"; // Your auth reducer

const rootReducers = combineReducers({
  auth: authReducer, // combine your reducers
});

const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

export default store;
