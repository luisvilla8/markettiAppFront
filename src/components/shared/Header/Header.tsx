import { useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { RiMenu4Fill } from "react-icons/ri"
import { AuthHeader } from "@/views"
import { NAVBAR_PATHS } from "@/constants"
import { useWindowSize } from "@/hooks"
import { MotionNavbar } from "@/components"
import styles from './Header.module.css'

const navbarVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      delayChildren: 0.01,
      when: 'beforeChildren'
    }
  },
  hidden: (width: number) => ({
    opacity: 0.5,
    x: width,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren'
    }
  })
}

export const Header = () => {

  const navigate = useNavigate()
  const { width } = useWindowSize()
  const [menuStatus, setmMenuStatus] = useState<'visible' | 'hidden'>('hidden')
  const toggleMenu = () => setmMenuStatus(menuStatus === 'hidden' ? 'visible' : 'hidden')
  
  const handleNavigate = (path: string) => navigate(path)

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <AuthHeader />
        <button className={styles.btn_menu} onClick={toggleMenu}>
          <RiMenu4Fill />
        </button>
      </div>
      <MotionNavbar variants={navbarVariants} initial='hidden' animate={menuStatus} custom={width}>
        { NAVBAR_PATHS.map(path => (
          <motion.li key={path.name} custom={width} variants={navbarVariants} onClick={() => handleNavigate(path.path)}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            style={{ cursor: 'pointer' }}
          >
            {path.label}
          </motion.li>
        ))}
      </MotionNavbar>
    </header>
  )
}
