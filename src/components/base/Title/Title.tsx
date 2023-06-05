import { ReactNode } from "react"
import styles from './Title.module.css'

type Props = {
  fontSize?: string
  children: ReactNode
}

export const Title = ({ fontSize = "2rem", children }: Props) => {
  return (
    <h1 className={styles.title} style={{ fontSize }}>
      { children }
    </h1>
  )
}
