import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SignUpForm } from '@/types'
import { signUpThunk } from '@/redux'
import { SignUpFormSchema } from '@/schemas'
import { useAppDispatch, useCustomForm } from '@/hooks'
import { PATHS, SignUpFormDefaultValues } from '@/constants'
import { Button, Input, Paragraph, Copyright, PasswordInput, MotionTitle, Title } from '@/components'
import { SurveyPromotionalList, AuthHeader } from '@/views';
import styles from '@/styles/Auth/Auth.module.css'

export const SignUp = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const redirectTo = () => navigate(PATHS.HOME.path)
  const onSubmit = async (data: SignUpForm): Promise<any> => dispatch(signUpThunk(data, redirectTo))

  const {
    register,
    handleSubmit,
    errors,
    isValid,
  } = useCustomForm(SignUpFormDefaultValues, SignUpFormSchema, onSubmit)

  return (
    <div className={styles.auth__container}>
      <div className={styles.auth_body}>
        <section className={styles.auth_left}>
          <AuthHeader />
          <motion.form animate={{opacity: [.2, 1]}} transition={{duration: 1}} className={styles.auth__body} onSubmit={() => handleSubmit}>
            <Title>Hola, bienvenido(a)!</Title>
            <Paragraph>Para poder registrarte en el sistema, por favor completa los siguientes campos</Paragraph>
            <section className={styles.form__container}>
              <Input name="name" label="Nombre" type="text" errors={errors} register={register} />
              <Input name="lastName" label="Apellido" type="text" errors={errors} register={register} />
              <Input name="email" label="Email" type="email" errors={errors} register={register} />
              <PasswordInput errors={errors} register={register} />
              <div className={styles.form__footer}>
                <Button disabled={!isValid}>Iniciar Sesión</Button>
                <Paragraph>¿Ya tienes una cuenta? <Link to={PATHS.SIGNIN.path}>Inicia sesión aquí</Link></Paragraph>
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
