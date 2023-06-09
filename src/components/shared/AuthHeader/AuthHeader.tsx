import { Logo, LogoTitle, ToggleTheme } from '@/components'
import styles from './AuthHeader.module.css'

export const AuthHeader = () => {
  return (
    <header className={styles.login__header}>
      <div className={styles.login__logo_container}>
        <Logo />
        <LogoTitle>MarkettiApp</LogoTitle>
      </div>
      <ToggleTheme />
    </header>
  )
}
