import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  authKey: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthDataOnSuccess: (state, action) => {
      state.user = action.payload.user;
      state.authKey = action.payload.token;
      state.isAuth = true;
    },
    setAuthDataOnFail: (state, action) => {
      state.user = null;
      state.authKey = null;
      state.isAuth = false;
      state.error = action.payload;
    }
  },
});

export const { setAuthDataOnSuccess, setAuthDataOnFail } = authSlice.actions;
export default authSlice.reducer;
