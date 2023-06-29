import { Survey } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type SurveyState = {
  surveys: Survey[];
}

const initialState: SurveyState = {
  surveys: [],
}

export const surveySlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSurveys: (state, action) => {
      state.surveys = action.payload;
      return state;
    },
  },
});

export const { setSurveys } = surveySlice.actions;
export default surveySlice.reducer;
