import { configureStore } from "@reduxjs/toolkit";
import { themeReducer, authReducer } from "./slices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});