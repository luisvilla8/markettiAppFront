import { TbMoonFilled, TbMoon, TbSunHigh } from "react-icons/tb"

import styles from "./ToggleTheme.module.css"

export const ToggleTheme = () => {
  return (
    <div className={styles.toggle_theme__container}>
      <span><TbMoonFilled /></span>
      <span><TbSunHigh /></span>
    </div>
  )
}
