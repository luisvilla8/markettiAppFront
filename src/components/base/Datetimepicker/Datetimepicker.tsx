import { useState } from "react";
import { CancelButton, DatepickerProps, TimePicker, Calendar, CalendarProps, Button } from "@/components";
import { get12HourFormatIntoTime,getHourTimeTurnedInto12HourFormat } from "./helpers/datetimepicker.helper";

export const Datetimepicker = (props: DatepickerProps) => {
  const { customUpdateFormField, field, value } = props.state;
  const [ showDatePicker, setShowDatePicker ] = useState(false);
  const [ dateTime, setDateTime ] = useState<Date | null>(value);

  const updateDatetime = ( newDatetime = "" ) => {
    const formattedDate = get12HourFormatIntoTime(newDatetime, dateTime);
    setDateTime(formattedDate);
    customUpdateFormField(field, formattedDate);
  }

  const adaptedProps: CalendarProps = {
    ...props,
    state: {
      field: {
        customUpdateFormField: (field: string, value: Date | null) => {
          customUpdateFormField(field, value);
          setDateTime(value);
        },
        field,
        value
      },
      options: {
        showDatePicker,
        setShowDatePicker,
        closeAfterSelect: false,
      }
    },
  }

  return (
    <Calendar {...adaptedProps}>
      <TimePicker
        value={getHourTimeTurnedInto12HourFormat(dateTime)}
        updateValue={updateDatetime}
      />
      <CancelButton
        style={{ width: '48%' }}
        onClick={() => setShowDatePicker(false)}
      >
        Cancel
      </CancelButton>
      <Button
        style={{styles: { width: '48%' }, role: "confirm"}}
        onClick={() => setShowDatePicker(false)}
      >
        Save
      </Button>
    </Calendar>
  )
}