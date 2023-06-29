export interface Survey {
  id: string;
  title: string;
  endDate: string;
  description: string;
  answersQty: string;
  rating: string;
}

export interface PromotionalSurvey extends Survey {
  x: number;
  y: number;
}

export type SurveysResponse = {
  status: number;
  data: {
    message: string;
    response?: {
      surveys: Survey[];
    }
  }
};