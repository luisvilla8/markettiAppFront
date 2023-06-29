import { LOCAL_STORAGE_KEYS, THEMES } from "@/constants";
import { setItemToLG } from "@/helpers";
import { AppThunk } from "@/types";
import { setTheme } from "./themeSlice";

type Payload = typeof THEMES.DARK | typeof THEMES.LIGHT;

export const setThemeThunk = (payload: Payload): AppThunk => (dispatch) => {
  dispatch(setTheme(payload));
  setItemToLG(LOCAL_STORAGE_KEYS.THEME, payload);
}