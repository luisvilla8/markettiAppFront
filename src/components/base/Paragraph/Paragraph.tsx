import { ReactNode } from "react"
import styles from "./Paragraph.module.css"

type Props = {
  children: ReactNode
  fontWeigth?: string
  fontFamily?: string
}

export const Paragraph = ({ fontFamily = "var(--fontFamily)", fontWeigth = "500", children }: Props) => {
  return (
    <p className={styles.paragraph}
      style={{
        fontWeight: fontWeigth,
        fontFamily: fontFamily,
      }}
    >
      { children }
    </p>
  )
}
