import { useState } from "react";
import { CancelButton, Calendar, CalendarProps } from "@/components"

export type DatepickerValueType = {
  value: Date | null;
  customUpdateFormField: (field: string, date: Date | null) => void;
  field: string;
}

export type DatepickerProps = {
  label: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  position?: 'left' | 'right';
  state: DatepickerValueType
}

export const Datepicker = (props: DatepickerProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const adaptedProps: CalendarProps = {
    ...props,
    state: {
      field: {
        ...props.state
      },
      options: {
        showDatePicker,
        setShowDatePicker
      }
    }
  }

  return (
    <Calendar {...adaptedProps}>
      <CancelButton
        onClick={() => setShowDatePicker(false)}
      >
        Cancel
      </CancelButton>
    </Calendar>
  )
}
