import { LOCAL_STORAGE_KEYS, THEMES } from "@/constants";
import { getItemFromLG } from "@/helpers";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: getItemFromLG(LOCAL_STORAGE_KEYS.THEME) ?? THEMES.LIGHT,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
