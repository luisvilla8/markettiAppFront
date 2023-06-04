import { Link } from 'react-router-dom'
import { PATHS } from '@/constants'
import { useSignUpForm } from './hooks/useSignUpForm'
import { Button, Input, LogoTitle, Paragraph, Title, Copyright, Logo, PasswordInput} from '@/components'
import styles from './SignUp.module.css'

export const SignUp = () => {

  const {
    register,
    handleSubmit,
    errors,
    isValid,
  } = useSignUpForm()

  return (
    <div className={styles.signup__container}>
      <header className={styles.signup__header}>
        <Logo />
        <LogoTitle>MarketiApp</LogoTitle>
      </header>
      <form className={styles.signup__body} onSubmit={() => handleSubmit}>
        <Title>Hola, bienvenido(a)!</Title>
        <Paragraph>Para poder registrarte en el sistema, por favor completa los siguientes campos</Paragraph>
        <section className={styles.form__container}>
          <Input name="name" label="Nombre" type="text" errors={errors} register={register}/>
          <Input name="lastName" label="Apellido" type="text" errors={errors} register={register}/>
          <Input name="email" label="Email" type="email" errors={errors} register={register}/>
          <PasswordInput errors={errors} register={register}/>
          <div className={styles.form__footer}>
            <Button disabled={!isValid}>Iniciar Sesión</Button>
            <Paragraph>¿Ya tienes una cuenta? Inicia sesión <Link to={PATHS.SIGNIN}>aquí</Link></Paragraph>
          </div>
        </section>
      </form>
      <footer className={styles.signup__footer}>
        <Copyright />
      </footer>
    </div>
  )
}
