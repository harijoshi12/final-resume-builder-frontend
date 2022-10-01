import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../../contexts/AuthContext'
import { createResumeAsync } from '../../../features/resume/resumeSlice'

import { ContactInput, EducationInput, ImageInput, InterestInput, LangInput, MyJourneyInput, NameInput, ProfessionInput, ProfSummaryInput, ProgLangInput, ProjectInput, TechSkillInput, } from './Forms'
import { ContactDetails, Education, Interest, Language, MyJourney, PersonalInfo, ProgLang, Project, TechnicalSkill } from './Items'

const HocSec = (Sec) => {
  const NewSec = (props) => {
    const [resumeData, setResumeData] = useState()

    const { currentToken, currentUser } = useAuth();

    const dispatch = useDispatch()
    const { data, status } = useSelector(state => state.resume)

    useEffect(() => {
      if (currentToken) {
        dispatch(createResumeAsync(currentToken))
      }
    }, [currentToken])

    useEffect(() => {
      setResumeData(data)
    }, [data])
    return (
      <Sec {...props} resumeData={resumeData} setResumeData={setResumeData} status={status} currentUser={currentUser}></Sec>
    )
  }
  return NewSec
}


const SecPersonalInfo = (props) => {
  const { resumeData } = props
  console.log("hari=>", resumeData?.personalInfo)
  return (
    <PersonalInfo />
  )
}
const SecTechnicalSkills = () => {
  return (
    <div>TechnicalSkills</div>
  )
}
const SecProgLangs = () => {
  return (
    <div>ProgLangs</div>
  )
}
const SecExperiences = () => {
  return (
    <div>Experiences</div>
  )
}
const SecContactDetails = () => {
  return (
    <div>ContactDetails</div>
  )
}
const SecProjects = () => {
  return (
    <div>Projects</div>
  )
}
const SecLanguages = () => {
  return (
    <div>Languages</div>
  )
}
const SecEducations = () => {
  return (
    <div>Educations</div>
  )
}
const SecInterests = () => {
  return (
    <div>Interests</div>
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