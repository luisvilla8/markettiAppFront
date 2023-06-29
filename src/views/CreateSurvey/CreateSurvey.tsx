import { motion } from 'framer-motion'
import { useCustomForm } from '@/hooks'
import { CreateSurveyFormSchema } from '@/schemas'
import { CreateSurveyFormDefaultValues } from '@/constants'
import { Button, Datepicker, Input, Paragraph, Title } from '@/components'
import { CONTENT } from './constants/CreateSurvey.constant'
import styles from './CreateSurvey.module.css'

export const CreateSurvey = () => {
  const onSubmit = () => {
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  const {
    register,
    handleSubmit,
    errors,
    isValid,
  } = useCustomForm(CreateSurveyFormDefaultValues, CreateSurveyFormSchema, onSubmit)

  return (
    <section className={styles.container}>
      <motion.form animate={{opacity: [.2, 1]}} transition={{duration: 1}} className={styles.auth_form} onSubmit={handleSubmit}>
        <Title fontSize='1.2rem' fontWeight='800'>{CONTENT.TITLE}</Title>
        <Paragraph>{CONTENT.PARAGRAPH}</Paragraph>
        <section className={styles.form__container}>
          <Input
            name={CONTENT.FORM.TITLE.NAME}
            label={CONTENT.FORM.TITLE.LABEL}
            type={CONTENT.FORM.TITLE.TYPE}
            errors={errors} register={register}
          />
          <Datepicker
            label={CONTENT.FORM.AVAILABLE_FROM.LABEL}
            style={CONTENT.FORM.AVAILABLE_FROM.STYLE}
          />
          <Datepicker
            label={CONTENT.FORM.AVAILABLE_TO.LABEL}
            style={CONTENT.FORM.AVAILABLE_TO.STYLE}
          />
          <div className={styles.form__footer}>
            <Button type="submit" disabled={!isValid}>Continue</Button>
          </div>
        </section>
      </motion.form>
    </section>
  )
}
