import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdCalendarMonth } from 'react-icons/md';
import { DatepickerValueType, PrevMonthDays, NextMonthDays, DaysInMonth } from '@/components';
import styles from './Calendar.module.css';

export type SelectedDate = Date | null;

export type CalendarProps = {
  label: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  position?: 'left' | 'right';
  state: {
    field: DatepickerValueType;
    options: {
      showDatePicker: boolean;
      setShowDatePicker: (showDatePicker: boolean) => void;
      closeAfterSelect?: boolean;
    }
  };
}

export const Calendar = ({ label, style, position, children, state }:CalendarProps) => {
  const { customUpdateFormField, field, value } = state.field;
  const { showDatePicker, setShowDatePicker, closeAfterSelect = true } = state.options;
  const [selectedDate, setSelectedDate] = useState<Date | null>(value);
  const [currentShownDate, setCurrentShownDate] = useState<Date>(new Date());

  const changeSelectedDate = (date: Date) => {
    if (selectedDate && selectedDate.getDate() === date.getDate()) {
      setSelectedDate(null);
      customUpdateFormField(field, null);
    } else {
      console.log("date", date)
      setSelectedDate(date);
      customUpdateFormField(field, date);
    }
    if (closeAfterSelect) setShowDatePicker(false);
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
      <div className={styles.datepicker_body}>
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

  const datePickerPositionClass = position === 'right' ? styles.datepicker_right : styles.datepicker_left;
  const datePicerkerClass = `${styles.datepicker} ${datePickerPositionClass}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const clickedOnDatepicker = target.closest(`.${styles.datepicker}`);
      if (target && (!clickedOnDatepicker)) {
        console.log("close datepicker")
        setShowDatePicker(false);
      }
    };
    
    if (!showDatePicker) document.removeEventListener('mousedown', handleClickOutside);
    else document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDatePicker]);

  return (
    <div className={styles.container} style={style}>
      <label>{ label }</label>
      <div className={styles.select_input} onClick={toggleDatePicker}>
        <span not-placeholder={selectedDate}>{selectedDate ? selectedDate.toLocaleDateString() : 'Select a date...'}</span>
        <MdCalendarMonth fontSize="1rem"/>
      </div>
      <AnimatePresence>
        {showDatePicker &&
          <motion.div
            className={datePicerkerClass}
            initial={{ opacity: 0, scale: .2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: .2 }}
          >
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
            <div className={styles.footer}>
              <span className={styles.datepicker_legend}>
                { selectedDate && `Picked ${selectedDate.toDateString()} at` }
              </span>
              { children }
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
};