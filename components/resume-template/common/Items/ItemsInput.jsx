import React, { useEffect, useRef } from 'react'

import { AiFillDelete, AiFillGithub } from "react-icons/ai";
import { MdDone, MdEmail } from "react-icons/md";
import { CgSmartphone, CgWebsite } from 'react-icons/cg';
import { IoLocationSharp } from 'react-icons/io5';
import { BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { FaQuora } from 'react-icons/fa';

import styles from '../Resume.module.css'

import { fieldCode } from '../constants/typeCodes';

export const CommonForm= (props)=>{
  const {secId, className,children} = props
  console.log("chid= ", children)
  return(
    <form className={styles[className]} onSubmit={(e) => { handleEditItemTitle(e) }} onBlur={(e) => { handleEditItemTitle(e) }}>
      <div className={styles.input_fields}>{children}</div>
      <div className={styles.icons}>
        <span className={styles.icon} onMouseDown={(e) => handleEditItemTitle(e)}><MdDone /></span>
        <span className={styles.icon} onMouseDown={(e) => handleDeleteItemTitle(e)}><AiFillDelete /></span>
      </div>
    </form>
  )
}

export const NameInput = (props) => {
  const inputRef = useRef(null)
  return (<input ref={inputRef} name={fieldCode.Name} value={itemTitle} onChange={(e) => onChangeHandler(e)} />)
}

export const ProfessionInput = (props) => {
  const inputRef = useRef(null)
  return (<input ref={inputRef} name={fieldCode.Profession} value={itemTitle} onChange={(e) => onChangeHandler(e)} />)
}

export const ProfSummaryInput = (props) => {
  const inputRef = useRef(null)
  return (<textarea  cols="30" rows="10" ref={inputRef} name={fieldCode.ProfSummary} value={itemTitle} onChange={(e) => onChangeHandler(e)} />)
}

export const ImageInput = (props) => {
  const inputRef = useRef(null)
  return (<input type="file" ref={inputRef} name={fieldCode.ImageUrl} value={itemTitle} onChange={(e) => onChangeHandler(e)} />)
}

export const TechSkillInput = (props) => {
  const inputRef = useRef(null)
  return (
    <CommonForm secId="2" className="techSkillInput" >  
     <input ref={inputRef} name={fieldCode.TechSkill} value="TechnicalSkill" onChange={(e) => onChangeHandler(e)} />
    </CommonForm>
  )
}

export const ProgLangInput = (props) => {
  const {className} = props
  const inputRef = useRef(null)
  return (
    <CommonForm secId="3" className={className}>  
     <input ref={inputRef} name={fieldCode.ProgrammingLanguage} value="" onChange={(e) => onChangeHandler(e)}/>
    </CommonForm>
  )
}

export const MyJourneyInput = (props) =>{
  const { itemTitle, handleDeleteItemTitle, handleEditItemTitle, onChangeHandler} = props
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  const inputRef4 = useRef(null)
  const inputRef5 = useRef(null)
  const inputRef6 = useRef(null)
  return(
    <>
      <CommonForm secId="4" className="myJourneyInput">
        <div className={styles.inputYear}>
          <input type="number" ref={inputRef3} name={fieldCode.JobStartDate} id="" placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
          <span>to</span>
          <input type="number" id="" ref={inputRef4} name={fieldCode.JobEndDate} placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
          <div className={styles.present}>
            <input type="checkbox"ref={inputRef5} name={fieldCode.JobPresent} id="present" />
            <label htmlFor="present">present</label>
          </div>
        </div>
        <div className={styles.main_details}>
          <div className={styles.top}>
            <input ref={inputRef1} name={fieldCode.JobTitle} value="Title/Position" onChange={(e) => onChangeHandler(e)} />
            <input ref={inputRef2} name={fieldCode.JobCompany} value="Workplace/Company" onChange={(e) => onChangeHandler(e)} />
          </div>
          <textarea id=""  type="text"  ref={inputRef6} name={fieldCode.JobDescription} value="Description/Achievements" onChange={(e) => onChangeHandler(e)} />
        </div>
      </CommonForm>
    </>
  )
}

const ContactOption = ({ type, fieldName, label, icon})=>{
  return(
    <div className={styles.contact_option}>
      <input type="checkbox" name={`${fieldName}Check`} id="" />
      <span>{icon}</span>
      <div className={styles.input_field}>
        {
        fieldName==="EMAL"? 
        (<input type={type} name={fieldName} id={`id_${fieldName}`} required />): 
        (<input type={type} name={fieldName} id={`id_${fieldName}`} />)
        }
        
        <label htmlFor={`id_${fieldName}`}><span >{label}</span></label>
      </div>
    </div>
  )
}

export const ContactInput = (props)=>{

  return(
    <div className={styles.contactInputPopUp}>
      <div className={styles.save_discard}>
        <button className={styles.discard}>discard</button>
        <button className={styles.save}>save</button>
      </div>
      <div className={styles.contactOptions}>
        <ContactOption type={"email"} fieldName={fieldCode.Email} icon={MdEmail} />
        <ContactOption type={"number"} fieldName={fieldCode.Phone} icon={CgSmartphone} />
        <ContactOption type={"text"} fieldName={fieldCode.Address} icon={IoLocationSharp} />
        <ContactOption type={"text"} fieldName={fieldCode.Website} icon={CgWebsite} />
        <ContactOption type={"text"} fieldName={fieldCode.Github} icon={AiFillGithub} />
        <ContactOption type={"text"} fieldName={fieldCode.Linkedin} icon={BsLinkedin} />
        <ContactOption type={"text"} fieldName={fieldCode.StackOverflow} icon={BsStackOverflow} />
        <ContactOption type={"text"} fieldName={fieldCode.Quora} icon={FaQuora} />
      </div>
    </div>
  )
}

export const ProjectInput = (props) =>{
  const { itemTitle, className , handleDeleteItemTitle, handleEditItemTitle, onChangeHandler} = props
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  return(
    <CommonForm secId="6" className="projectInput">
      <div className={styles.top}>
        <input type="text"  ref={inputRef1} name={fieldCode.ProjectTitle} value="Project Name" onChange={(e) => onChangeHandler(e)} />
        <input type="text"  ref={inputRef2} name={fieldCode.ProjectTechStack} value="TechStack Used" onChange={(e) => onChangeHandler(e)} />
      </div>
      <div className={styles.bottom}>
        <textarea  ref={inputRef3} name={fieldCode.ProjectDescription} value="Description" onChange={(e) => onChangeHandler(e)} />
        <div className={styles.links}>
          <input type="text"  ref={inputRef3} name={fieldCode.ProjectGitLink} value="Github link" onChange={(e) => onChangeHandler(e)} />
          <input type="text"  ref={inputRef3} name={fieldCode.ProjectLiveDemo} value="Live Demo link" onChange={(e) => onChangeHandler(e)} />
        </div>
      </div>
    </CommonForm>
  )
}

export const EducationInput = (props) =>{
  const { itemTitle, handleDeleteItemTitle, handleEditItemTitle, onChangeHandler} = props
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  const inputRef4 = useRef(null)
  const inputRef5 = useRef(null)
  const inputRef6 = useRef(null)
  const inputRef7 = useRef(null)
  return(
    <>
      <input ref={inputRef1} name={fieldCode.StudyProgram} value="" onChange={(e) => onChangeHandler(e)} />
      <input ref={inputRef2} name={fieldCode.Institution} value="" onChange={(e) => onChangeHandler(e)} />
      <div className={styles.inputYear}>
        <input type="number" ref={inputRef3} name={fieldCode.StudyStartDate} id="" placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
        <span>-</span>
        <input type="number" id="" ref={inputRef4} name={fieldCode.StudyEndDate} placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
        <label htmlFor="present"></label>
        <input type="checkbox"ref={inputRef5} name={fieldCode.StudyPresent} id="present" />
      </div>
      <input type="text"  ref={inputRef6} name={fieldCode.StudyPlace} value={itemTitle} onChange={(e) => onChangeHandler(e)} />
      <input type="number" ref={inputRef7} name={fieldCode.Cgpa} id="" placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
    </>
  )
}

export const InterestInput = (props) => {
  const inputRef = useRef(null)
  return (
    <CommonForm secId="9" className="interestInput">
      <input ref={inputRef} name={fieldCode.Interest} value="Interest" onChange={(e) => onChangeHandler(e)} />
    </CommonForm>
  )
}