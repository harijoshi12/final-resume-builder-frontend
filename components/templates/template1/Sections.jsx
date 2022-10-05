import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../../../contexts/AuthContext'
import AddItems from './AddItem'
import CommonItemAndForm from './CommonItemAndForm'

import { ContactInput, EducationInput, InterestInput, LangInput, MyJourneyInput, ProjectInput, TechSkillInput, } from './Forms'

import { ContactDetails, Education, Interest, Language, MyJourney, PersonalInfo, ProgLang, Project, TechnicalSkill } from './Items'
import SecTitle from './SectionTitles'

import styles from './styles/Template1.module.css'

const HocSec = (Sec) => {
  const NewSec = (props) => {
    const [plusEl, setPlusEl] = useState(false)

    // useEffect(() => {
    //   setPlusEl(edit);
    // }, [edit]);

    return (
      <Sec {...props} plusEl={plusEl} setPlusEl={setPlusEl}></Sec>
    )
  }
  return NewSec
}

const SecWrapper = (props) => {
  const { children, className, secTitle, plusEl, setPlusEl } = props

  return (
    <div className={`${styles[className]} ${styles.resumeSec}`}>
      <SecTitle secTitleName={secTitle} setPlusEl={setPlusEl} />
      <div className={`${styles[className]} ${styles.secContent}`}>
        {children}
      </div>
      {plusEl ? (
        <AddItems />
      ) : null}
    </div>
  )
}

const SecPersonalInfo = (props) => {
  const { setTitle, secId, personalInfo } = useSelector(state => state?.resume?.data?.secPersonalInfo)
  return (
    <SecWrapper className="personalInfo">
      {personalInfo.map(item => (
        <CommonItemAndForm key={item._id} secId={secId} {...item} ViewItem={PersonalInfo} />
      ))}
    </SecWrapper>
  )
}
const SecTechnicalSkills = (props) => {
  const { secTitle, secId, techSkills } = useSelector(state => state?.resume?.data?.secTechSkills)
  const { plusEl, setPlusEl } = props

  return (
    <SecWrapper className="technicalSkills" secTitle={secTitle} plusEl={plusEl} setPlusEl={setPlusEl} >
      {techSkills.map(item => (
        <CommonItemAndForm key={item._id} {...item} InputItem={TechSkillInput} ViewItem={TechnicalSkill} setPlusEl={setPlusEl} />
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
const SecProgLangs = (props) => {
  const { secTitle, secId, progLangs } = useSelector(state => state?.resume?.data?.secProgLangs)
  const { plusEl, setPlusEl } = props
  return (
    <SecWrapper className="progLangs" secTitle={secTitle} plusEl={plusEl} >
      <Marking />
      {progLangs.map(item => (
        <CommonItemAndForm key={item._id} {...item} secId={secId} ViewItem={ProgLang} setPlusEl={setPlusEl} />
      ))}
    </SecWrapper>
  )
}
const SecExperiences = (props) => {
  const { secTitle, secId, experiences } = useSelector(state => state?.resume?.data?.secExperiences)
  const { plusEl, setPlusEl } = props

  return (
    <SecWrapper className="myJourney" secTitle={secTitle} plusEl={plusEl} setPlusEl={setPlusEl}>
      {experiences.map(item => (
        <CommonItemAndForm key={item._id} {...item} InputItem={MyJourneyInput} ViewItem={MyJourney} setPlusEl={setPlusEl} />
      ))}
    </SecWrapper>
  )
}
const SecContactDetails = (props) => {
  const [showContactInput, setShowContactInput] = useState(false)

  return (
    <SecWrapper className="contactDetails">
      {showContactInput ? (
        <ContactInput setShowContactInput={setShowContactInput} />
      ) :
        <>
          <ContactDetails setShowContactInput={setShowContactInput} />
          <div className={styles.bottomBorder}></div>
        </>
      }

    </SecWrapper>
  )
}

const SecProjects = (props) => {
  const { secTitle, secId, projects } = useSelector(state => state?.resume?.data?.secProjects)
  const { plusEl, setPlusEl } = props
  return (
    <SecWrapper className="projects" secTitle={secTitle} plusEl={plusEl} setPlusEl={setPlusEl}>
      {projects.map(item => (
        <CommonItemAndForm key={item._id} {...item} InputItem={ProjectInput} ViewItem={Project} setPlusEl={setPlusEl} />
      ))}
    </SecWrapper>
  )
}

const SecLanguages = (props) => {
  const { secTitle, secId, languages } = useSelector(state => state?.resume?.data?.secLanguages)
  const { plusEl, setPlusEl } = props
  return (
    <SecWrapper className="langs" secTitle={secTitle} plusEl={plusEl} setPlusEl={setPlusEl}>
      {languages.map(item => (
        <CommonItemAndForm key={item._id} {...item} InputItem={LangInput} ViewItem={Language} setPlusEl={setPlusEl} />
      ))}
    </SecWrapper>
  )
}
const SecEducations = (props) => {
  const { secTitle, secId, educations } = useSelector(state => state?.resume?.data?.secEducations)
  const { plusEl, setPlusEl } = props
  return (
    <SecWrapper className="edus" secTitle={secTitle} plusEl={plusEl} setPlusEl={setPlusEl}>
      {educations.map(item => (
        <CommonItemAndForm key={item._id} {...item} InputItem={EducationInput} ViewItem={Education} setPlusEl={setPlusEl} />
      ))}
    </SecWrapper>
  )
}
const SecInterests = (props) => {
  const { secTitle, secId, interests } = useSelector(state => state?.resume?.data?.secInterests)
  const { plusEl, setPlusEl } = props
  return (
    <SecWrapper className="interests" secTitle={secTitle} plusEl={plusEl} setPlusEl={setPlusEl}>
      {interests.map(item => (
        <CommonItemAndForm key={item._id} {...item} InputItem={InterestInput} ViewItem={Interest} setPlusEl={setPlusEl} />
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