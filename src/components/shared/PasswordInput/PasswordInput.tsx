import { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { Input } from '@/components'
import styles from './PasswordInput.module.css'

type Props = {
  errors: any
  register: any
}

export const PasswordInput = ({ errors, register}: Props) => {

  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const showPassword = (passwordInput: HTMLInputElement) => {
    passwordInput.type = 'text'
    setIsPasswordShown(true)
  }

  const hidePassword = (passwordInput: HTMLInputElement) => {
    passwordInput.type = 'password'
    setIsPasswordShown(false)
  }

  const togglePasswordDisplay = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    evt.stopPropagation()
    let passwordInput = document.getElementById('password') as HTMLInputElement
    if (passwordInput.type === 'password') showPassword(passwordInput)
    else hidePassword(passwordInput)
  }

  return (
    <div className={styles.password__input__container}>
      <Input name="password" label="Password" type="password" errors={errors} register={register}/>
      <button className={styles.password__input__icon} onClick={togglePasswordDisplay}
        aria-label="Show password button"
      >
        { isPasswordShown ? <IoMdEyeOff /> : <IoMdEye />}
      </button>
    </div>
  )
}
