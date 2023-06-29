import { useState } from "react"
import { motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io"
import styles from "./Select.module.css"

type Props = {
  defaultValue: Option
  options: Option[]
}

type Option = {
  id: string
  name: string
  value: number | string
}

const selectVariants = {
  open: {
    opacity: 1,
    height: "10rem",
    transition: {
      duration: .3,
      staggerChildren: .1,
      delayChildren: .2,
    }
  },
  closed: {
    opacity: 0,
    height: "0rem",
    transition: {
      duration: .3,
      staggerChildren: .1,
      staggerDirection: -1,
    }
  }
}

export const Select = ({defaultValue, options}: Props) => {

  const [ selected, setSelected ] = useState(defaultValue)
  const [ isOpen, setIsOpen] = useState<'open' | 'closed'>('closed')
  const toggleIsOpen = () => setIsOpen(isOpen === 'closed' ? 'open' : 'closed')
  const handleSelect = (option: Option) => {
    setSelected(option)
    toggleIsOpen()
  }

  return (
    <>
      <div className={styles.container} onClick={toggleIsOpen} is-open={isOpen}>
        { selected.name }
        <span className={styles.icon}>
          <IoIosArrowDown />
        </span>
        <motion.ul className={styles.options}
          variants={selectVariants}
          initial="closed"
          animate={isOpen}
        >
          { options.map(option => (
            <li key={option.id} className={styles.option}
              onClick={() => handleSelect(option)}
            >
              { option.name }
            </li>
          ))}
        </motion.ul>
      </div>
    </>
  )
}
