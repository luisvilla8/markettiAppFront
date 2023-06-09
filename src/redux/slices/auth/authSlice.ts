import { createSlice } from "@reduxjs/toolkit";
import { getItemFromLG, setItemToLG } from "@/helpers";
import { LOCAL_STORAGE_KEYS } from "@/constants";

const initialState = getItemFromLG(LOCAL_STORAGE_KEYS.AUTH) ?? {
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
      setItemToLG(LOCAL_STORAGE_KEYS.AUTH, state);
    },
    setAuthDataOnFail: (state, action) => {
      state.user = null;
      state.authKey = null;
      state.isAuth = false;
      state.error = action.payload;
      setItemToLG(LOCAL_STORAGE_KEYS.AUTH, state)
    }
  },
});

export const { setAuthDataOnSuccess, setAuthDataOnFail } = authSlice.actions;
export default authSlice.reducer;
