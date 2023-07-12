import styles from '../Calendar.module.css';

type Props = {
  blankDaysAfter: Array<any>;
}

export const NextMonthDays = ({ blankDaysAfter }: Props) => {
  return (
    <>
      {
        blankDaysAfter.map((el, index) => (
          <div key={index} className={`${styles.datepicker_day} ${styles.next_month}`}>{index + 1}</div>
        ))
      }
    </>
  )
}
