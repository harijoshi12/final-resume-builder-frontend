import React from 'react'
import { useSelector } from 'react-redux'

import { ContactDetails, Education, Interest, Language, MyJourney, PersonalInfo, ProgLang, Project, TechnicalSkill } from './Items'
import SecTitle from './SectionTitles'

import styles from '../styles/Template1.module.css'

const HocSec = (Sec) => {
  const NewSec = (props) => {
    return (
      <Sec {...props} ></Sec>
    )
  }
  return NewSec
}

const SecWrapper = (props) => {
  const { children, className, secTitle } = props
  return (
    <div className={`${styles[className]} ${styles.resumeSec}`}>
      <SecTitle secTitleName={secTitle} />
      <div className={`${styles[className]} ${styles.secContent}`}>
        {children}
      </div>
    </div>
  )
}
const SecPersonalInfo = (props) => {
  const { setTitle, secId, personalInfo } = useSelector(state => state?.resume?.data?.secPersonalInfo)
  return (
    <SecWrapper className="personalInfo">
      {personalInfo.map(item => (
        <PersonalInfo key={item._id} data={item} />
      ))}
    </SecWrapper>
  )
}
const SecTechnicalSkills = () => {
  const { secTitle, secId, techSkills } = useSelector(state => state?.resume?.data?.secTechSkills)
  return (
    <SecWrapper className="technicalSkills" secTitle={secTitle}>
      {techSkills.map(item => (
        <TechnicalSkill key={item._id} {...item} />
      ))}
    </SecWrapper>
  )
}
const Marking = () => {
  return (
    <div className={styles.marking}>
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  )
}
const SecProgLangs = () => {
  const { secTitle, secId, progLangs } = useSelector(state => state?.resume?.data?.secProgLangs)
  return (
    <SecWrapper className="progLangs" secTitle={secTitle}>
      <Marking />
      {progLangs.map(item => (
        <ProgLang key={item._id} {...item} />
      ))}
    </SecWrapper>
  )
}
const SecExperiences = () => {
  const { secTitle, secId, experiences } = useSelector(state => state?.resume?.data?.secExperiences)
  return (
    <SecWrapper className="myJourney" secTitle={secTitle}>
      {experiences.map(item => (
        <MyJourney key={item._id} {...item} />
      ))}
    </SecWrapper>
  )
}
const SecContactDetails = () => {
  const { secTitle, secId, contactDetails } = useSelector(state => state?.resume?.data?.secContactDetails)
  return (
    <SecWrapper className="contactDetails">
      {contactDetails.map(item => (
        <ContactDetails key={item._id} {...item} />
      ))}
      <div className={styles.bottomBorder}></div>

    </SecWrapper>
  )
}
const SecProjects = () => {
  const { secTitle, secId, projects } = useSelector(state => state?.resume?.data?.secProjects)
  return (
    <SecWrapper className="projects" secTitle={secTitle}>
      {projects.map(item => (
        <Project key={item._id} {...item} />
      ))}
    </SecWrapper>
  )
}
const SecLanguages = () => {
  const { secTitle, secId, languages } = useSelector(state => state?.resume?.data?.secLanguages)
  return (
    <SecWrapper className="langs" secTitle={secTitle}>
      {languages.map(item => (
        <Language key={item._id} {...item} />
      ))}
    </SecWrapper>
  )
}
const SecEducations = () => {
  const { secTitle, secId, educations } = useSelector(state => state?.resume?.data?.secEducations)
  return (
    <SecWrapper className="edus" secTitle={secTitle}>
      {educations.map(item => (
        <Education key={item._id} {...item} />
      ))}
    </SecWrapper>
  )
}
const SecInterests = () => {
  const { secTitle, secId, interests } = useSelector(state => state?.resume?.data?.secInterests)
  return (
    <SecWrapper className="interests" secTitle={secTitle}>
      {interests.map(item => (
        <Interest key={item._id} {...item} />
      ))}
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