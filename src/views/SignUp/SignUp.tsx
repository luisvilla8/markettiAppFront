import { Link, useNavigate } from 'react-router-dom'
import { SignUpForm } from '@/types'
import { signUpThunk } from '@/redux'
import { useAppDispatch, useAuthForm } from '@/hooks'
import { PATHS, SignUpFormDefaultValues, SignUpFormSchema } from '@/constants'
import { Button, Input, Paragraph, Title, Copyright,PasswordInput, AuthHeader} from '@/components'
import styles from './SignUp.module.css'

export const SignUp = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const redirectTo = () => navigate(PATHS.HOME)
  const onSubmit = async (data: SignUpForm): Promise<any> => dispatch(signUpThunk(data, redirectTo))

  const {
    register,
    handleSubmit,
    errors,
    isValid,
  } = useAuthForm(SignUpFormDefaultValues, SignUpFormSchema, onSubmit)

  return (
    <div className={styles.signup__container}>
      <AuthHeader />
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
