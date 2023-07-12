import { useState } from "react"
import { motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io"
import styles from "./Select.module.css"
import { SelectOption, SelectOptionValue } from "@/types"

type Props = {
  value?: SelectOption
  options: SelectOption[]
  updateValue: (option: SelectOptionValue) => void
  customStyles?: React.CSSProperties
}

const selectVariants = {
  open: {
    opacity: 1,
    height: "auto",
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

export const Select = ({value, options, updateValue, customStyles}: Props) => {

  const [ isOpen, setIsOpen] = useState<'open' | 'closed'>('closed')
  const toggleIsOpen = () => setIsOpen(isOpen === 'closed' ? 'open' : 'closed')
  const handleSelect = (option: SelectOption) => {
    updateValue(option.value)
    toggleIsOpen()
  }

  return (
    <>
      <div className={styles.container} onClick={toggleIsOpen} is-open={isOpen} style={customStyles}>
        { !value ? "Select and option" : value.value }
        <span className={styles.icon}>
          <IoIosArrowDown />
        </span>
        <motion.ul className={styles.options}
          variants={selectVariants}
          initial="closed"
          animate={isOpen}
        >
          { options.map(option => (
            <li key={option.value} className={styles.option}
              onClick={() => handleSelect(option)}
            >
              { option.label }
            </li>
          ))}
        </motion.ul>
      </div>
    </>
  )
}
