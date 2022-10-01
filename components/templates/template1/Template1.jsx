import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../../contexts/AuthContext'
import { getResumeAsync } from '../../../features/resume/resumeSlice'
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
  return (
    <div className={styles.resume}>
      {/* left section */}
      <div className={styles.left}>
        <NewSecPersonalInfo></NewSecPersonalInfo>
        <NewSecTechnicalSkills></NewSecTechnicalSkills>
        <NewSecProgLangs></NewSecProgLangs>
        <NewSecExperiences></NewSecExperiences>
      </div>

      {/* right section */}
      <div className={styles.right}>
        <NewSecContactDetails></NewSecContactDetails>
        <NewSecProjects></NewSecProjects>
        <NewSecLanguages></NewSecLanguages>
        <NewSecEducations></NewSecEducations>
        <NewSecInterests></NewSecInterests>
      </div>
    </div>
  )
}

export default Template1