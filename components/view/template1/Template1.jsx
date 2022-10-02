import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../../contexts/AuthContext'
import { getResumeAsync, STATUSES } from '../../../features/resume/resumeSlice'
import { NewSecContactDetails, NewSecEducations, NewSecExperiences, NewSecInterests, NewSecLanguages, NewSecPersonalInfo, NewSecProgLangs, NewSecProjects, NewSecTechnicalSkills, } from './Sections'
import styles from './styles/Template1.module.css'

const Template1 = () => {

  const { currentToken, currentUser } = useAuth();

  const dispatch = useDispatch()

  useEffect(() => {
    if (currentToken) {
      dispatch(getResumeAsync(currentToken))
    }
  }, [currentToken])

  const { status } = useSelector(state => state.resume)
  if (status === STATUSES.PENDING) {
    return <h2>Loading</h2>
  }

  return (
    <>
      {status === STATUSES.SUCCEEDED && currentUser && (
        <div className={styles.resume}>

          <div className={styles.left}>
            <NewSecPersonalInfo />
            <NewSecTechnicalSkills />
            <NewSecProgLangs />
            <NewSecExperiences />
          </div>

          <div className={styles.right}>
            <NewSecContactDetails />
            <NewSecProjects />
            <NewSecLanguages />
            <NewSecEducations />
            <NewSecInterests />
          </div>
        </div>
      )}
    </>
  )
}

export default Template1