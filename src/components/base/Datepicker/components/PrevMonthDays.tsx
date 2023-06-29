import styles from '../Datepicker.module.css';

type Props = {
  blankDaysBefore: Array<any>;
  lastDayOfPrevMonth: number;
}

export const PrevMonthDays = ({ blankDaysBefore, lastDayOfPrevMonth }: Props) => {
  return (
    <>
      { blankDaysBefore.map((el, index) => {
        return (
          <div key={index} className={`${styles.datepicker_day} ${styles.prev_month}`}>
            {lastDayOfPrevMonth - (blankDaysBefore.length - index - 1)}
          </div>
        )
      })}
    </>
  )
};