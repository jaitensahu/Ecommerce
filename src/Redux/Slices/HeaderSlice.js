import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  isDark: true,
  isOpen: false,
};

export const headerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },

    setIsDark: (state, action) => {
      state.isDark = action.payload;
    },

    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },

    setWishListOpen: (state, action) => {
      state.isWishListOpen = action.payload;
    },
  },
});

export const { setIsLogin, setIsDark, setIsOpen, setWishListOpen } =
  headerSlice.actions;
export default headerSlice.reducer;
