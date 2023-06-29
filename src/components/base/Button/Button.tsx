import { ReactNode } from "react"
import { motion } from "framer-motion"
import styles from "./Button.module.css"

type Props = {
  children: ReactNode
  disabled?: boolean
  type?: "submit" | "button"
  style?: object
  handleClick?: () => void
}

export const Button = ({ children, handleClick, style = {}, disabled = false, type = "submit" }: Props) => {
  return (
    <motion.button
      className={styles.button__container}
      style={style}
      type={type}
      disabled={disabled}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      { children }
    </motion.button>
  )
}
