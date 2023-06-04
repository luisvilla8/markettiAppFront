import { ReactNode } from "react"
import styles from './Title.module.css'

type Props = {
  children: ReactNode
}

export const Title = ({ children }: Props) => {
  return (
    <h1 className={styles.title}>{ children }</h1>
  )
}
