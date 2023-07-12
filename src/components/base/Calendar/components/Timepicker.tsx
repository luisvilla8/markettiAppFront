import { Select } from "@/components";
import { SelectOption, SelectOptionValue } from "@/types";
import { useState } from "react";

const timeOptions: SelectOption[] = [
  { value: '1:00', label: '1:00' },
  { value: '2:00', label: '2:00' },
  { value: '3:00', label: '3:00' },
  { value: '4:00', label: '4:00' },
  { value: '5:00', label: '5:00' },
  { value: '6:00', label: '6:00' },
  { value: '7:00', label: '7:00' },
  { value: '8:00', label: '8:00' },
  { value: '9:00', label: '9:00' },
  { value: '10:00', label: '10:00' },
  { value: '11:00', label: '11:00' },
  { value: '12:00', label: '12:00' },
];

const timeModeOptions: SelectOption[] = [
  { value: 'AM', label: 'AM' },
  { value: 'PM', label: 'PM' },
]

export type TimePickerValue = {
  hour: string;
  postFix: string;
}

type Props = {
  value: TimePickerValue;
  updateValue: (value: string) => void;
}

export const TimePicker = ({ value, updateValue}: Props) => {
  const [selectedHour, setSelectedHour] = useState<string>(value.hour);
  const [selectedPostFix, setSelectedPostFix] = useState<string>(value.postFix);

  const updateSelectedHour = (hour: SelectOptionValue) => {
    if (typeof hour !== 'string') return;
    setSelectedHour(hour);
    updateValue(`${hour}-${selectedPostFix}`);
  }

  const updateSelectedPostFix = (postFix: SelectOptionValue) => {
    if (typeof postFix !== 'string') return;
    setSelectedPostFix(postFix);
    updateValue(`${selectedHour}-${postFix}`);
  }
  
  return (
    <>
      <Select
        options={timeOptions}
        value={timeOptions.find(option => option.value === selectedHour)}
        updateValue={updateSelectedHour}
        customStyles={{ width: '4rem', padding: '.5rem'}}
      />
      <Select
        options={timeModeOptions}
        value={timeModeOptions.find(option => option.value === selectedPostFix)}
        updateValue={updateSelectedPostFix}
        customStyles={{ width: '4rem', padding: '.5rem'}}
      />
    </>
  )
}