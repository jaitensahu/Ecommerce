import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../Slices/HeaderSlice";
import AuthSlice from "../Slices/AuthSlice";

export const store = configureStore({
  reducer: {
    headerSlice,
    AuthSlice
  },
});
