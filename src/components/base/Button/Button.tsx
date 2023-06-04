import { ReactNode } from "react"
import styles from "./Button.module.css"

type Props = {
  children: ReactNode
  disabled?: boolean
  type?: "submit" | "button"
}

export const Button = ({ children, disabled = false, type = "submit" }: Props) => {
  return (
    <button className={styles.button__container} type={type} disabled={disabled}>
      { children }
    </button>
  )
}
