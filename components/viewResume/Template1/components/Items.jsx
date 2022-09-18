import React, { useEffect, useRef, useState } from 'react'
import { AiFillDelete, AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { MdDone, MdEmail } from "react-icons/md";
import { CgSmartphone, CgWebsite } from 'react-icons/cg';
import { IoLocationSharp } from 'react-icons/io5';
import { BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { FaQuora } from 'react-icons/fa';
import styles from '../Resume.module.css'

const SecItem = (props) => {
  const { secId, itemData} = props

  let childComponent
  if(secId === "1"){(childComponent = <PersonalInfo {...itemData} />)}

  if(secId === "2"){(childComponent = <TechnicalSkill {...itemData}/>)}

  if(secId === "3"){(childComponent = <ProgLang {...itemData}/>)}

  if(secId === "4"){(childComponent = <MyJourney {...itemData}/>)}

  if(secId === "5"){return}

  if(secId === "6"){(childComponent = <Project {...itemData}/>)}

  if(secId === "7"){(childComponent = <Lang {...itemData}/>)}

  if(secId === "8"){(childComponent = <Edu {...itemData}/>)}

  if(secId === "9"){(childComponent = <Interest {...itemData}/>)}
  return (< >{childComponent}</>)
}

export default SecItem

export const PersonalInfo = (props) => {
  const {resumeTitle,userName,profession, imagesrc, tagline } = props
  return (
    <>
      <h1 className={styles.resumeTitle}>{resumeTitle}</h1>
      <div className={styles.imgboxOuter}>
        <div className={styles.imgboxInner}>
            <div className={styles.imgbox_wrapper}>
              <div className={styles.imgbox}>
            </div>
          </div>
          <div className={styles.myinfo}>
            <h1 className={styles.myName} >{userName}</h1>
            <h2 className={styles.profession}>{profession}</h2>
          </div>
        </div>
      </div>
     <h2 className={styles.tagline}>"{tagline}"</h2>
    </>
  );
};

const ContactItem = ({ icon, info})=>{
  return(
    <a rel="noopener noreferrer" target="_blank">
      <span >{icon}</span> 
      <span >{info}</span>
    </a>
  )
}
export const ContactDetails = (props) => {
  const {email, emailChecked, phone, phoneChecked, address, addressChecked, website, websiteChecked, linkedin, linkedinChecked, github, githubChecked, stackoverflow, stackoverflowChecked, quora, quoraChecked, medium, mediumChecked }= props

  return (
    <>
      {email &&  emailChecked && <ContactItem info={email} icon={<MdEmail/>} />}

      {phone &&  phoneChecked && <ContactItem info={phone} icon={<CgSmartphone/>} />}

      {address && addressChecked && <ContactItem info={address} icon={<IoLocationSharp/>}/>}

      {website && websiteChecked && <ContactItem info={website} icon={<CgWebsite/>}/>}

      {linkedin && linkedinChecked && <ContactItem info={linkedin} icon={<BsLinkedin/>}/>}

      {github && githubChecked && <ContactItem info={github} icon={<AiFillGithub/>}/>}

      {stackoverflow && stackoverflowChecked && <ContactItem info={stackoverflow} icon={<BsStackOverflow/>}/>}

      {quora && quoraChecked && <ContactItem info={quora} icon={<FaQuora/>}/>}

      {medium && mediumChecked && <ContactItem info={medium} icon={<AiFillMediumCircle/>}/>}
    </>
  );
};

export const TechnicalSkill = (props) => {
  const { techSkill} = props
  return <span className={styles.technicalSkill} >{techSkill}</span>;
};

export const ProgLang = (props) => {
  const { progLang, progLangLevel}=props
  return (
    <div className={styles.progLang}>
      <span className={styles.title}>{progLang}</span>
      <span className={styles.outer}>
        <span className={styles.inner} style={{width: `${progLangLevel*10}%`}} ></span>
      </span>
    </div>
  );
};

export const langNoToText = (languageLevel) => {
  if( typeof languageLevel === 'number'){
    if(languageLevel < 2) {
      return 'Below Average';
    } else if (languageLevel === 3) {
      return 'Average';
    } else {
      return 'Above Average';
    }
  } else {
    return languageLevel;
  }
}

export const Lang = (props) => {
  const { language, languageLevel }=props
  return (
    <div className={styles.lang}>
      <span className={styles.title}>{language}</span>
      <span className={styles.level}>{langNoToText(languageLevel)}</span>
    </div>
  );
};

export const Edu = (props) => {
  const { studyProgram, institution, studyStartDate,studyEndDate, studyPresent, studyPlace, cgpa} = props
  let time = studyStartDate && (studyEndDate || jobPresent) 
  return (
    <div className={styles.edu}>
      <div className={styles.r1}>
        <span className={styles.title} >{studyProgram}</span> <span> | </span>
        <span className={styles.institute} >{institution}</span>
      </div>
      <div className={styles.r2}>
        {cgpa ? <span className={styles.cgpa} >{cgpa}</span>:null}{cgpa?"|":null}
        {time?<span className={styles.time} >{studyStartDate}-{studyPresent? "Present":studyEndDate}</span>:null}{time?"|":null}
        {studyPlace?<span className={styles.place} >{studyPlace}</span>:null}
      </div>
    </div>
  );
};

export const Project=(props)=>{
  const { projectTitle, projectTechStack, projectDesc, projectGitLink, projectLiveDemo }=props
  return (
    <div className={styles.projectItem}>
      <h2 className={styles.title}>
        <span >{projectTitle}</span>
        <span>|</span>
        <span >{projectTechStack}</span>
      </h2>
      <div className={styles.desc} ><p>{projectDesc}</p>      
      <div className={styles.link}>
        <a className={styles.git_link} href={projectGitLink}>Github link</a>
        <a className={styles.liveDemo_link} href={projectLiveDemo}>Live-Demo link</a>
      </div>
      </div>
    </div>
  );
}

export const MyJourney=(props)=>{
  const { jobStartDate,jobEndDate,jobPresent, jobTitle, jobCompany, jobDesc } = props;
  return (
    <div className={styles.myJourneyItem}>
      <span className={styles.time} >{jobStartDate}-{jobPresent?"Present":jobEndDate}</span>
      <h1 className={styles.title} >
        <span></span>
        <span>{jobTitle}</span> <span className={styles.divider}>|</span><span >{jobCompany}</span>
      </h1>
      <p className={styles.desc} >{jobDesc}</p>
    </div>
  );
}

export const Interest = (props) => {
  const {interest}= props
  return <span className={styles.interest} >{interest}</span>
};

