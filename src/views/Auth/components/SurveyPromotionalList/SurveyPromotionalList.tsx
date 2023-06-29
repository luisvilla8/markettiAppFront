import { Variants } from "framer-motion"
import { PROMOTIONAL_SURVEYS } from "@/constants"
import { MotionSurveyCard } from "@/components"
import { getInvertedCoordinate } from "@/helpers"

import styles from './SurveyPromotionalList.module.css'

const surveyCardVariants: Variants = {
  initial: ({x, y}) => ({
    opacity: 0,
    scale: .8,
    x: getInvertedCoordinate(x),
    y,
  }),
  visible: ({x, y, ind, isBlur}) => ({
    opacity: isBlur ? .5 : 1,
    scale: isBlur ? .6 : .8,
    x,
    y,
    transition: {
      type: 'spring',
      delay: ind * .15,
      stiffness: 100,
      damping: 40,
      mass: .75,
      x: {
        duration: .5,
      },
    },
  })
}

export const SurveyPromotionalList = () => {
  return (
    <div className={styles.container}>
      { PROMOTIONAL_SURVEYS.map((survey, ind) => 
        <MotionSurveyCard
          custom={{ x: survey.x, y: survey.y, ind, isBlur: ind <= 5}}
          initial="initial"
          animate="visible"
          variants={surveyCardVariants}
          survey={survey}
          key={survey.id}
        />
      )}
    </div>
  )
}
