import { ReactNode } from "react"
import styles from "./Paragraph.module.css"

type Props = {
  children: ReactNode
}

export const Paragraph = ({ children }: Props) => {
  return (
    <p className={styles.paragraph}>{ children }</p>
  )
}
