import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SignInForm } from '@/types';
import { signInThunk } from '@/redux';
import { SignInFormSchema } from '@/schemas';
import { useAppDispatch, useCustomForm } from '@/hooks';
import { PATHS, SignInFormDefaultValues } from '@/constants';
import { SurveyPromotionalList, AuthHeader } from '@/views';
import { Button, Input, Paragraph, Copyright, PasswordInput,MotionTitle, Title } from '@/components'
import styles from '@/styles/Auth/Auth.module.css'

export const SignIn = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const redirectTo = () => navigate(PATHS.HOME.path)
  const onSubmit = async (data: SignInForm): Promise<any> => dispatch(signInThunk(data, redirectTo))

  const {
    register,
    handleSubmit,
    errors,
    isValid,
  } = useCustomForm(SignInFormDefaultValues, SignInFormSchema, onSubmit)

  return (
    <div className={styles.auth__container}>
      <div className={styles.auth_body}>
        <section className={styles.auth_left}>
          <AuthHeader />
          <motion.form animate={{opacity: [.2, 1]}} transition={{duration: 1}} className={styles.auth_form} onSubmit={handleSubmit}>
            <Title>Bienvenido de vuelta!</Title>
            <Paragraph>Por favor, ingresa tus credenciales para acceder al sistema</Paragraph>
            <section className={styles.form__container}>
              <Input name="email" label="Email" type="email" errors={errors} register={register}/>
              <PasswordInput errors={errors} register={register}/>
              <div className={styles.form__footer}>
                <Button type="submit" disabled={!isValid}>Iniciar Sesión</Button>
                <Paragraph>
                  ¿No tienes una cuenta? <Link to={PATHS.SIGNUP.path}>Create una aquí</Link>
                </Paragraph>
              </div>
            </section>
          </motion.form>
          <footer className={styles.auth__footer}>
            <Copyright />
          </footer>
        </section>
        <aside className={styles.auth__aside}>
          <MotionTitle>Unleash Your Inner Curiosity and Empower Your Voice!</MotionTitle>
          <Paragraph fontWeigth={"300"}>
            Seamlessly create, customize, and deploy surveys with ease. Craft engaging questions, choose from a wide range of response formats, and personalize the survey experience.
          </Paragraph>
          <SurveyPromotionalList />
        </aside>
      </div>
    </div>
  )
}