import styles from './Input.module.css'

type Props = {
  name: string
  label?: string
  type: string
  errors?: any
  register?: any
  style?: object
}

export const Input = ({ name, label, style = {}, errors = [], register = () => {}, type = "text"}: Props) => {
  return (
    <div className={styles.input__container} style={style}>
      <label htmlFor={name} className={styles.input__label}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className={styles.input__box}
        placeholder={`Ingresa tu ${label ?? name}...`}
        {...register(name)}
        style={{ outlineColor: errors[name] && 'var(--dangerColor)' }}
      />
      { errors[name] && <span className={styles.input_message} role="error">{errors[name].message}</span>}
    </div>
  )
}