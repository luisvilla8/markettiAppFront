import { SurveysResponse } from "@/types";
import instance from "@/services";

const getSurveys = async () => {
  try {
    const data:SurveysResponse = await instance.get("/survey");
    return data;
  } catch (err: any) {
    return err.response
  }
}

export const surveyService = {
  getSurveys,
}