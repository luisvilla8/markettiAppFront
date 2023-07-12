import { ReactNode } from "react"
import { motion } from "framer-motion"
import styles from "./Button.module.css"

type Props = {
  children: ReactNode
  disabled?: boolean
  type?: "submit" | "button"
  style?: {
    role?: "cancel" | "confirm" | "highlight"
    styles?: React.CSSProperties
  }
  onClick?: () => void
}

export const Button = ({ children, onClick, style = {}, disabled = false, type = "button" }: Props) => {

  const role = style.role ?? ""

  const className = `${styles.button__container} ${styles[role]}`

  return (
    <motion.button
      className={className}
      style={style.styles}
      type={type}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      { children }
    </motion.button>
  )
}
