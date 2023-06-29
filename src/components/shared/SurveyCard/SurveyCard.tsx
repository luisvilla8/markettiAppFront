import { Ref, forwardRef } from 'react'
import { MdCalendarMonth, MdOutlineQuestionAnswer } from 'react-icons/md'
import { Survey } from '@/types'
import { Title, Paragraph, TextWithIcon, RatingIcon } from '@/components'
import styles from './SurveyCard.module.css'
import { motion } from 'framer-motion'

type Props = {
  survey: Survey
}

export const SurveyCard = forwardRef(({ survey }: Props, ref: Ref<HTMLDivElement>) => {
  return (
    <div className={styles.card_container} ref={ref}>
      <div className={styles.card}>
        <header>
          <Title fontSize='.9rem' fontWeight="600">{survey.title}</Title>
          <TextWithIcon text={survey.endDate}>
            <MdCalendarMonth />
          </TextWithIcon>
        </header>
        <main>
          <Paragraph>{survey.description}</Paragraph>
        </main>
        <footer>
          <TextWithIcon text={survey.rating} inverted={true}>
            <RatingIcon rating={Number(survey.rating)} max={5}/>
          </TextWithIcon>
          <TextWithIcon text={survey.answersQty}>
            <MdOutlineQuestionAnswer />
          </TextWithIcon>
        </footer>
      </div>
      <div className={styles.card_bg}></div>
    </div>
  )
})

export const MotionSurveyCard = motion(SurveyCard)