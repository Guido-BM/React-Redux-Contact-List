import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/AuthReducers";

const store = configureStore({
  reducer: authReducer,
});

export default store;
