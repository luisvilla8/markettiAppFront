import { Link, useNavigate } from 'react-router-dom'
import { SignInForm } from '@/types';
import { signInThunk } from '@/redux';
import { useAppDispatch, useAuthForm } from '@/hooks';
import { PATHS, SignInFormDefaultValues, SignInFormSchema } from '@/constants';
import { Button, Input, Paragraph, Title, Copyright, PasswordInput, AuthHeader } from '@/components'
import styles from './SignIn.module.css'

export const SignIn = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const redirectTo = () => navigate(PATHS.HOME)

  const onSubmit = async (data: SignInForm): Promise<any> => dispatch(signInThunk(data, redirectTo))

  const {
    register,
    handleSubmit,
    errors,
    isValid,
  } = useAuthForm(SignInFormDefaultValues, SignInFormSchema, onSubmit)

  return (
    <div className={styles.login__container}>
      <AuthHeader />
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
