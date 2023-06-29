import { motion } from "framer-motion"
import { Logo, LogoTitle, ToggleTheme } from '@/components'
import styles from './AuthHeader.module.css'

export const AuthHeader = () => {
  return (
    <header className={styles.auth__header}>
      <div className={styles.auth__logo_container}>
        <motion.span
          transition={{ ease: "easeInOut", duration: .3, times: [.6, .7, .8, .9, 1] }}
          animate={{ y: [-40, 0], rotate: [0, 0, -20, 20, 0] }}
        >
          <Logo />
        </motion.span>
        <motion.span
          transition={{ ease: "easeInOut", duration: .6, delay: .3 }}
          animate={{ x: [-40, 0], opacity: [0, 1] }}
        >
          <LogoTitle>MarkettiApp</LogoTitle>
        </motion.span>
      </div>
      <ToggleTheme />
    </header>
  )
}
