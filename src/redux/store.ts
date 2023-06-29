import { configureStore } from "@reduxjs/toolkit";
import { themeReducer, authReducer, surveyReducer } from "./slices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    survey: surveyReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});