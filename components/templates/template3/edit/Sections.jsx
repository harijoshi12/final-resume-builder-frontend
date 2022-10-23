import React, { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resumeArrayNames, resumeSecNames } from '../../../../constants/constants'
import { useAuth } from '../../../../contexts/AuthContext'
import AddItems from './AddItem'
import CommonItemAndForm from './CommonItemAndForm'

import { ContactInput, EducationInput, InterestInput, LangInput, MyJourneyInput, ProjectInput, TechSkillInput, } from './Forms'

import { ContactDetails, Education, Interest, Language, MyJourney, PersonalInfo, ProgLang, Project, TechnicalSkill } from './Items'
import SecTitle from './SectionTitles'

import styles from '../styles/Template1.module.css'

const HocSec = (Sec) => {
  const NewSec = (props) => {
    const [plusEl, setPlusEl] = useState(false)
    const [addNewItem, setAddNewItem] = useState(false)

    return (
      <Sec {...props} plusEl={plusEl} setPlusEl={setPlusEl} addNewItem={addNewItem} setAddNewItem={setAddNewItem}></Sec>
    )
  }
  return NewSec
}

const SecWrapper = (props) => {
  const { children, className, secName, secId, arrayName, newItem, secTitle, secTitlePlaceholder, showTitle, plusEl, setPlusEl, addNewItem, setAddNewItem } = props

  return (
    <div className={`${styles[className]} ${styles.resumeSec}`}>
      <SecTitle secTitleName={secTitle} secTitlePlaceholder={secTitlePlaceholder} secName={secName} setPlusEl={setPlusEl} showTitle={showTitle} />
      <div className={`${styles[className]} ${styles.secContent}`}>
        {children}
      </div>
      {plusEl ? (
        <AddItems secName={secName} arrayName={arrayName} secId={secId} newItem={newItem} setAddNewItem={setAddNewItem} />
      ) : null}
    </div>
  )
}

const SecPersonalInfo = (props) => {
  const { secTitle, secId, personalInfo } = useSelector(state => state?.resume?.data?.secPersonalInfo)

  return (
    <SecWrapper className="personalInfo" secName="secPersonalInfo" arrayName="personalInfo">
      {personalInfo?.map((item, idx) => (
        <CommonItemAndForm key={item.id} secId={secId} secName={resumeSecNames.SECPERSONALINFO} arrayName={resumeArrayNames.PERSONALINFO} {...item} {...props} ViewItem={PersonalInfo} />
      ))}
    </SecWrapper>
  )
}
const SecTechnicalSkills = (props) => {
  const { secTitle, secId, techSkills } = useSelector(state => state?.resume?.data?.secTechSkills)

  const newItem = { techSkill: "" }
  return (
    <SecWrapper className="technicalSkills" secTitle={secTitle} secTitlePlaceholder="Technical Skills" {...props} secName="secTechSkills" arrayName="techSkills" showTitle={true} secId={secId} newItem={newItem}>
      {techSkills.map((item, idx) => (
        <CommonItemAndForm key={item.id} {...item} idx={idx} secData={techSkills} secId={secId} secName={resumeSecNames.SECTECHSKILLS} arrayName={resumeArrayNames.TECHSKILLS} InputItem={TechSkillInput} ViewItem={TechnicalSkill} {...props} newItem={newItem} />
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

  const newItem = { progLang: ``, progLangLevel: 7 }
  return (
    <SecWrapper className="progLangs" secTitle={secTitle} secTitlePlaceholder="Programming Languages" {...props} secName="secProgLangs" arrayName="progLangs" showTitle={true} secId={secId} newItem={newItem}>
      <Marking />
      {progLangs.map((item, idx) => (
        <CommonItemAndForm key={item.id} {...item} idx={idx} secData={progLangs} secName={resumeSecNames.SECPROGLANGS} arrayName={resumeArrayNames.PROGLANGS} secId={secId} ViewItem={ProgLang} {...props} newItem={newItem} />
      ))}
    </SecWrapper>
  )
}
const SecExperiences = (props) => {
  const { secTitle, secId, experiences } = useSelector(state => state?.resume?.data?.secExperiences)

  const newItem = { jobTitle: ``, jobCompany: ``, jobStartDate: '', jobEndDate: '', jobPresent: false, jobDesc: '' }
  return (
    <SecWrapper className="myJourney" secTitle={secTitle} secTitlePlaceholder="Experiences/My Journey" {...props} secName="secExperiences" arrayName="experiences" showTitle={true} secId={secId} newItem={newItem}>
      {experiences.map((item, idx) => (
        <CommonItemAndForm key={item.id} {...item} idx={idx} secData={experiences} secName={resumeSecNames.SECEXPERIENCES} arrayName={resumeArrayNames.EXPERIENCES} secId={secId} InputItem={MyJourneyInput} ViewItem={MyJourney} {...props} newItem={newItem} />
      ))}
    </SecWrapper>
  )
}
const SecContactDetails = (props) => {
  const [showContactInput, setShowContactInput] = useState(false)

  return (
    <SecWrapper className="contactDetails" secName="secContactDetails" arrayName="contactDetails">
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

  const newItem = { projectTitle: ``, projectTechStack: ``, projectDesc: '', projectGitLink: '', videoExplanationLink: '', projectLiveDemo: '' }
  return (
    <SecWrapper className="projects" secTitle={secTitle} secTitlePlaceholder="Projects" {...props} secName="secProjects" arrayName="projects" showTitle={true} secId={secId} newItem={newItem}>
      {projects.map((item, idx) => (
        <CommonItemAndForm key={item.id} {...item} idx={idx} secData={projects} secName={resumeSecNames.SECPROJECTS} arrayName={resumeArrayNames.PROJECTS} secId={secId} InputItem={ProjectInput} ViewItem={Project} {...props} newItem={newItem} />
      ))}
    </SecWrapper>
  )
}

const SecLanguages = (props) => {
  const { secTitle, secId, languages } = useSelector(state => state?.resume?.data?.secLanguages)

  const newItem = { language: ``, languageLevel: `4` }
  return (
    <SecWrapper className="langs" secTitle={secTitle} secTitlePlaceholder="Languages" {...props} secName="secLanguages" arrayName="languages" showTitle={true} secId={secId} newItem={newItem}>
      {languages.map((item, idx) => (
        <CommonItemAndForm key={item.id} {...item} idx={idx} secData={languages} secName={resumeSecNames.SECLANGUAGES} arrayName={resumeArrayNames.LANGUAGES} secId={secId} InputItem={LangInput} ViewItem={Language} {...props} newItem={newItem} />
      ))}
    </SecWrapper>
  )
}
const SecEducations = (props) => {
  const { secTitle, secId, educations } = useSelector(state => state?.resume?.data?.secEducations)

  const newItem = { studyProgram: ``, institution: ``, studyStartDate: '', studyEndDate: '', studyPresent: false, cgpa: '', studyPlace: '' }
  return (
    <SecWrapper className="edus" secTitle={secTitle} secTitlePlaceholder="Education" {...props} secName="secEducations" arrayName="educations" showTitle={true} secId={secId} newItem={newItem}>
      {educations.map((item, idx) => (
        <CommonItemAndForm key={item.id} {...item} idx={idx} secData={educations} secName={resumeSecNames.SECEDUCATIONS} arrayName={resumeArrayNames.EDUCATIONS} secId={secId} InputItem={EducationInput} ViewItem={Education} {...props} newItem={newItem} />
      ))}
    </SecWrapper>
  )
}
const SecInterests = (props) => {
  const { secTitle, secId, interests } = useSelector(state => state?.resume?.data?.secInterests)

  const newItem = { interest: "" }
  return (
    <SecWrapper className="interests" secTitle={secTitle} secTitlePlaceholder="Interests" {...props} secName="secInterests" arrayName="interests" showTitle={true} secId={secId} newItem={newItem}>
      {interests.map((item, idx) => (
        <CommonItemAndForm key={item.id} {...item} idx={idx} secData={interests} secName={resumeSecNames.SECINTERESTS} arrayName={resumeArrayNames.INTERESTS} secId={secId} InputItem={InterestInput} ViewItem={Interest} {...props} newItem={newItem} />
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