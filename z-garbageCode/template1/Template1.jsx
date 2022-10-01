import React from 'react'
import { NewSecContactDetails, NewSecEducations, NewSecExperiences, NewSecInterests, NewSecLanguages, NewSecPersonalInfo, NewSecProgLangs, NewSecProjects, NewSecTechnicalSkills, } from './Sections'
import styles from './Template1.module.css'

const Template1 = () => {
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