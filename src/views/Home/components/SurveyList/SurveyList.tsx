import styles from './SurveyList.module.css'

type Props = {
  children?: React.ReactNode
}

export const SurveyList = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      { children }
    </section>
  )
}
