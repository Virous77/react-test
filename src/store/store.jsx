import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const reducer = combineReducers({
  users: userSlice,
});

const Store = configureStore({
  reducer,
});

export default Store;
