import { useState } from 'react';
import { MdCalendarMonth } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { SelectOption, SelectOptionValue } from '@/types';
import { CancelButton } from '@/components';
import { PrevMonthDays } from './components/PrevMonthDays';
import { NextMonthDays } from './components/NextMonthDays';
import styles from './Datepicker.module.css';
import { DaysInMonth } from './components/DaysInMonth';
import { Select } from '../Select/Select';

type Props = {
  label: string;
  style?: React.CSSProperties;
}

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

export const Datepicker = ({ label, style }:Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>(`${timeOptions[0].value}`);
  const [currentShownDate, setCurrentShownDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const changeSelectedTime = (time: SelectOptionValue) => {
    if (typeof time === 'string') setSelectedTime(time);
  };

  const changeSelectedDate = (date: Date) => {
    if (selectedDate?.getDay() === date.getDay()) setSelectedDate(null);
    else setSelectedDate(date);
  };

  const changeCurrentShownDate = (date: Date) => {
    setCurrentShownDate(date);
  }

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDayClick = (day: Date) => {
    changeSelectedDate(day);
  };

  const renderDatePicker = () => {
    const currentDate = currentShownDate ? currentShownDate : new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
    const lastDayOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
  
    const blankDaysBefore = Array(firstDayOfWeek).fill(null);
    const blankDaysAfter = Array(7 - ((firstDayOfWeek + daysInMonth) % 7)).fill(null);
  
    return (
      <div className={styles.datepicker_days}>
        <div className={styles.weekdays}>
          <div>SU</div>
          <div>MO</div>
          <div>TU</div>
          <div>WE</div>
          <div>TH</div>
          <div>FR</div>
          <div>SA</div>
        </div>
        <div className={styles.days}>
          <PrevMonthDays blankDaysBefore={blankDaysBefore} lastDayOfPrevMonth={lastDayOfPrevMonth} />
          <DaysInMonth selectedDate={selectedDate} handleDayClick={handleDayClick} dateDetails={{ daysInMonth, currentYear, currentMonth }} />
          <NextMonthDays blankDaysAfter={blankDaysAfter} />
        </div>
      </div>
    );
  };

  const prevMonth = (steps = 1) => {
    const currentDate = currentShownDate ? currentShownDate : new Date();
    const prevMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - steps,
      currentDate.getDate()
    );
    changeCurrentShownDate(prevMonthDate);
  };

  const nextMonth = (steps = 1) => {
    const currentDate = currentShownDate ? currentShownDate : new Date();
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + steps,
      currentDate.getDate()
    );
    changeCurrentShownDate(nextMonthDate);
  };

  return (
    <div className={styles.container} style={style}>
      <label>{ label }</label>
      <div className={styles.select_input} onClick={toggleDatePicker}>
        <span>{selectedDate ? selectedDate.toLocaleDateString() : 'Select a date...'}</span>
        <MdCalendarMonth />
      </div>
      <AnimatePresence>
        {showDatePicker &&
          <motion.div className={styles.datepicker} exit={{ opacity: 0, scale: .2 }}>
            <div className={styles.datepicker_header}>
              <div>
                <button className={styles.prev_month} onClick={() => prevMonth(2)}>
                  &lt;&lt;
                </button>
                <button className={styles.prev_month} onClick={() => prevMonth(1)}>
                  &lt;
                </button>
              </div>
              <div className={styles.current_month}>
                {currentShownDate.toLocaleString('en-us', { month: 'long', year: 'numeric' })}
              </div>
              <div>
                <button className={styles.next_month} onClick={() => nextMonth(1)}>
                  &gt;
                </button>
                <button className={styles.next_month} onClick={() => nextMonth(2)}>
                  &gt;&gt;
                </button>
              </div>
            </div>
            {renderDatePicker()}
            { selectedDate && <span className={styles.datepicker_footer}>You picked {selectedDate.toDateString()}</span>}
            <Select
              options={timeOptions}
              value={timeOptions.find(option => option.value === selectedTime)}
              updateValue={changeSelectedTime}
            />
            <CancelButton
              onClick={toggleDatePicker}
            >
              Cancel
            </CancelButton>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
};

export default Datepicker;
