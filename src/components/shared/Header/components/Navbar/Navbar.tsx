import { Ref, forwardRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

type Props = {
  children?: React.ReactNode
}

export const Navbar = forwardRef(({ children }: Props, ref: Ref<HTMLUListElement>) => {
  return (
    <ul className={styles.container} ref={ref}>
      { children }
    </ul>
  )
})

export const MotionNavbar = motion(Navbar)