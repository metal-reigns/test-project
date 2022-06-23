import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducer from "./auth/auth_reducer";

const rootReducer = combineReducers({
  auth: reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
