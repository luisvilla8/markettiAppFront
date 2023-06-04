import { Link } from 'react-router-dom'
import { useSignInForm } from './hooks';
import { PATHS } from '@/constants';
import { Button, Input, LogoTitle, Paragraph, Title, Copyright, Logo, PasswordInput } from '@/components'
import styles from './SignIn.module.css'

export const SignIn = () => {

  const {
    register,
    handleSubmit,
    errors,
    isValid,
  } = useSignInForm()

  return (
    <div className={styles.login__container}>
      <header className={styles.login__header}>
        <Logo />
        <LogoTitle>MarkettiApp</LogoTitle>
      </header>
      <form className={styles.login__body} onSubmit={handleSubmit}>
        <Title>Bienvenido de vuelta!</Title>
        <Paragraph>Por favor, ingresa tus credenciales para acceder al sistema</Paragraph>
        <section className={styles.form__container}>
          <Input name="email" label="Email" type="email" errors={errors} register={register}/>
          <PasswordInput errors={errors} register={register}/>
          <div className={styles.form__footer}>
            <Button type="submit" disabled={!isValid}>Iniciar Sesión</Button>
            <Paragraph>
              ¿No tienes una cuenta? Create una <Link to={PATHS.SIGNUP}>aquí</Link>
            </Paragraph>
          </div>
        </section>
      </form>
      <footer className={styles.login__footer}>
        <Copyright />
      </footer>
    </div>
  )
}
