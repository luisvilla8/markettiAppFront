import { useState } from 'react';
import { MdCalendarMonth } from 'react-icons/md';
import { PrevMonthDays } from './components/PrevMonthDays';
import { NextMonthDays } from './components/NextMonthDays';
import styles from './Datepicker.module.css';
import { DaysInMonth } from './components/DaysInMonth';
import { Select } from '../Select/Select';

type Props = {
  label: string;
  style?: React.CSSProperties;
}

export const Datepicker = ({ label, style }:Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentShownDate, setCurrentShownDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

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

  const timeOptions = [
    { id: "1", value: '1:00', name: '1:00' },
    { id: "2", value: '2:00', name: '2:00' },
    { id: "3", value: '3:00', name: '3:00' },
    { id: "4", value: '4:00', name: '4:00' },
    { id: "5", value: '5:00', name: '5:00' },
    { id: "6", value: '6:00', name: '6:00' },
    { id: "7", value: '7:00', name: '7:00' },
    { id: "8", value: '8:00', name: '8:00' },
    { id: "9", value: '9:00', name: '9:00' },
    { id: "10", value: '10:00', name: '10:00' },
    { id: "11", value: '11:00', name: '11:00' },
    { id: "12", value: '12:00', name: '12:00' },
  ];

  return (
    <div className={styles.container} style={style}>
      <label>{ label }</label>
      <div className={styles.select_input} onClick={toggleDatePicker}>
        <span>{selectedDate ? selectedDate.toLocaleDateString() : 'Select a date...'}</span>
        <MdCalendarMonth />
      </div>
      {showDatePicker && 
        <div className={styles.datepicker}>
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
          <Select options={timeOptions} defaultValue={{ id: "9", value: '9:00', name: '9:00' }}/>
        </div>
      }
    </div>
  );
};

export default Datepicker;
