export type CREATE_SURVEY_VIEW_CONTENT = {
  TITLE: string,
  PARAGRAPH: string,
  FORM: {
    TITLE: FormItems,
    AVAILABLE_FROM: FormItems,
    AVAILABLE_TO: FormItems
  }
}

export type FormItems = {
  LABEL: string,
  PLACEHOLDER: string,
  TYPE: React.HTMLInputTypeAttribute,
  NAME: string,
  STYLE?: React.CSSProperties
}