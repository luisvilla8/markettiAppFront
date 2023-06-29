import { CREATE_SURVEY_VIEW_CONTENT } from "../types/CreateSurvey.types";

export const CONTENT: CREATE_SURVEY_VIEW_CONTENT = {
  TITLE: 'Creating a survey',
  PARAGRAPH: 'Please, fill in the following fields to create the basis of your survey',
  FORM: {
    TITLE: {
      LABEL: 'Title',
      PLACEHOLDER: 'Type survey title...',
      TYPE: 'text',
      NAME: 'title',
    },
    AVAILABLE_FROM: {
      LABEL: 'Available From',
      PLACEHOLDER: 'Select a date...',
      TYPE: 'datetime-local',
      NAME: 'availableFrom',
      STYLE: {width: '48%', display: "inline-flex", marginRight: '.8rem'}
    },
    AVAILABLE_TO: {
      LABEL: 'Available To',
      PLACEHOLDER: 'Select a date...',
      TYPE: 'date',
      NAME: 'availableTo',
      STYLE: {width: '48%', display: "inline-flex"}
    },
  }
}