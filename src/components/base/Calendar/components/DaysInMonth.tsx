import styles from '../Calendar.module.css';

type Props = {
  selectedDate: Date | null;
  handleDayClick: (day: Date) => void;
  dateDetails: {
    daysInMonth: number;
    currentYear: number;
    currentMonth: number;
  }
}

export const DaysInMonth = ({dateDetails, selectedDate, handleDayClick}: Props) => {

  const { daysInMonth, currentYear, currentMonth } = dateDetails;

  const isSelectedDate = (day: number) => {
    if (!selectedDate) return false;
    return day === selectedDate.getDate() && currentMonth === selectedDate.getMonth() && currentYear === selectedDate.getFullYear();
  }

  return (
    <>
      { [...Array(daysInMonth).keys()].map((_, index) => (
        <div
          key={index}
          className={`${styles.datepicker_day} ${
            isSelectedDate(index + 1) ? styles.selected : ''
          }`}
          onClick={() => handleDayClick(new Date(currentYear, currentMonth, index + 1))}
        >
          {index + 1}
        </div>
      ))}
    </>
  )
}