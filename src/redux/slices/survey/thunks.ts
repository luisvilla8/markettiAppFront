import { surveyService } from "@/services";
import { AppThunk } from "@/types";
import { setSurveys } from "./surveySlice";


export const getSurveysThunk = ():AppThunk => async (dispatch) => {
  const data = await surveyService.getSurveys();
  if (data?.status === 200 && data.data.data) {
    const surveys = data.data.data;
    dispatch(setSurveys(surveys))
  } else {
    dispatch(setSurveys([]))
  }
};