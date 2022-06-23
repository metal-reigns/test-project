import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  isAuth: localStorage.getItem("isAuth") || false,
};
const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});
const { actions, reducer } = authSlice;
export const { setAuth } = actions;

export default reducer;
