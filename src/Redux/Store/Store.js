import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../Slices/HeaderSlice";
import AuthSlice from "../Slices/AuthSlice";
import CartSlice from "../Slices/CartSlice";

export const store = configureStore({
  reducer: {
    headerSlice,
    AuthSlice,
    CartSlice,
  },
});
