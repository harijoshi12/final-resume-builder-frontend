import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../../contexts/AuthContext'

import { ContactInput, EducationInput, ImageInput, InterestInput, LangInput, MyJourneyInput, NameInput, ProfessionInput, ProfSummaryInput, ProgLangInput, ProjectInput, TechSkillInput, } from './Forms'
import { ContactDetails, Education, Interest, Language, MyJourney, PersonalInfo, ProgLang, Project, TechnicalSkill } from './Items'

import styles from './styles/Template1.module.css'
const HocSec = (Sec) => {
  const NewSec = (props) => {
    const [resumeData, setResumeData] = useState({})
    const { data, status } = useSelector(state => state.resume)

    useEffect(() => {
      setResumeData(data)
    }, [data])
    return (
      <Sec {...props} resumeData={resumeData} setResumeData={setResumeData} status={status}></Sec>
    )
  }
  return NewSec
}

const SecWrapper = (props) => {
  const { children, className } = props
  return (
    <div className={`${styles[className]} ${styles.resumeSec}`}>
      {/* {
        secId === "1" || secId === "5" ? null : <SecTitle setPlusEl={setPlusEl} secTitleName={secTitleName} />
      } */}
      <div className={`${styles[className]} ${styles.secContent}`}>
        {children}
      </div>
      {/* {
        plusEl ? (
          <AddItems addNewItemHandler={addNewItemHandler} />
        ) : null
      } */}
    </div>
  )
}

const SecPersonalInfo = (props) => {
  // const { data: { personalInfo }, status } = useSelector(state => state.resume)

  // console.log("data===> ", data)
  // console.log("pi===> ", personalInfo)
  return (
    <SecWrapper className="personalInfo">
      <PersonalInfo />
    </SecWrapper>
  )
}
const SecTechnicalSkills = () => {
  // const { data: { techSkills }, status } = useSelector(state => state.resume)
  return (
    <SecWrapper className="technicalSkills">
      <TechSkillInput />
      <TechnicalSkill />
    </SecWrapper>
  )
}
const SecProgLangs = () => {
  // const { data: { progLangs }, status } = useSelector(state => state.resume)

  // console.log("Prog=>>> ", progLangs)
  return (
    <SecWrapper className="progLangs">
      <ProgLang />
    </SecWrapper>
  )
}
const SecExperiences = () => {
  // const { data: { progLangs }, status } = useSelector(state => state.resume)

  return (
    <SecWrapper className="myJourney">
      <MyJourneyInput />
      <MyJourney />
    </SecWrapper>
  )
}
const SecContactDetails = () => {
  return (
    <SecWrapper className="contactDetails">
      <ContactInput />
      <ContactDetails />
    </SecWrapper>
  )
}
const SecProjects = () => {
  return (
    <SecWrapper className="projects">
      <ProjectInput />
      <Project />
    </SecWrapper>
  )
}
const SecLanguages = () => {
  return (
    <SecWrapper className="langs">
      <LangInput />
      <Language />
    </SecWrapper>
  )
}
const SecEducations = () => {
  return (
    <SecWrapper className="edus">
      <EducationInput />
      <Education />
    </SecWrapper>
  )
}
const SecInterests = () => {
  return (
    <SecWrapper className="interests">
      <InterestInput />
      <Interest />
    </SecWrapper>
  )
}

const NewSecPersonalInfo = HocSec(SecPersonalInfo)
const NewSecTechnicalSkills = HocSec(SecTechnicalSkills)
const NewSecProgLangs = HocSec(SecProgLangs)
const NewSecExperiences = HocSec(SecExperiences)
const NewSecContactDetails = HocSec(SecContactDetails)
const NewSecProjects = HocSec(SecProjects)
const NewSecLanguages = HocSec(SecLanguages)
const NewSecEducations = HocSec(SecEducations)
const NewSecInterests = HocSec(SecInterests)

export { NewSecPersonalInfo, NewSecTechnicalSkills, NewSecProgLangs, NewSecExperiences, NewSecContactDetails, NewSecProjects, NewSecLanguages, NewSecEducations, NewSecInterests }