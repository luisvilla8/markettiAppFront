import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSurveysThunk } from '@/redux'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { PATHS } from '@/constants'
import { SurveyList } from '@/views'
import { Button, SearchInput, SurveyCard, Title } from '@/components'
import styles from './Home.module.css'

export const Home = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { surveys = [] } = useAppSelector(state => state.survey)

  const navigateToCreateSurvey = () => {
    navigate(PATHS.CREATE_SURVEY.path)
  }

  useEffect(() => {
    dispatch(getSurveysThunk())
  }, [])

  return (
    <>
      <section className={styles.survey_list_header}>
        <div>
          <Title fontSize='1.2rem' fontStyle='italic' fontWeight='800'>Last surveys</Title>
          <Button style={{ width: '8rem', padding: '.5rem', margin: '0' }} handleClick={navigateToCreateSurvey}>
            + Create survey
          </Button>
        </div>
        <SearchInput />
      </section>
      <SurveyList>
        {surveys.map(survey => <SurveyCard key={survey.id} survey={survey} />)}
      </SurveyList>
    </>
  )
}