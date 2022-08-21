import React, { useEffect, useRef } from 'react'

import { AiFillDelete, AiFillGithub } from "react-icons/ai";
import { MdDone, MdEmail } from "react-icons/md";
import { CgSmartphone, CgWebsite } from 'react-icons/cg';
import { IoLocationSharp } from 'react-icons/io5';
import { BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { FaQuora } from 'react-icons/fa';
import { IoMdCloudUpload } from 'react-icons/io';

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
  return (
    <div className={styles.nameInput}>
      <input ref={inputRef} name={fieldCode.Name} placeholder="Your Name" />
    </div>
  )
}

export const ProfessionInput = (props) => {
  const inputRef = useRef(null)
  return (
    <div className={styles.professionInput}>
      <input ref={inputRef} name={fieldCode.Profession} placeholder="Profession" />
    </div>
  )
}

export const ProfSummaryInput = (props) => {
  const inputRef = useRef(null)
  return (
    <div className={styles.profSummaryInput}>
      <textarea  cols="30" rows="10" ref={inputRef} name={fieldCode.ProfSummary} placeholder="About You"/>
    </div>
  )
}

export const ImageInput = (props) => {
  const inputRef = useRef(null)
  return (
    <div className={styles.imgInput}>
      <label htmlFor="imgUpload">
      <span className={styles.upload}><IoMdCloudUpload/></span>
      Upload Photo
      </label>
      <input type="file" id='imgUpload' ref={inputRef} name={fieldCode.ImageUrl} />
      <span className={styles.delete}>
        <AiFillDelete/>
      </span>
    </div>
  )
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
     <input ref={inputRef} name={fieldCode.ProgrammingLanguage}  onChange={(e) => onChangeHandler(e)}/>
    </CommonForm>
  )
}

export const ProgLangLevel = ({level})=> {
  return(
      <span className={`${styles.outer} ${styles.progLangLevel}`}>
        <span className={styles.value}></span>
        <span className={styles.inner} style={{ width: `${level * 10}%` }}></span>
        <span className={styles.thumb} style={{left: `calc(${10 * 10}% - 15px)`}}></span>
      <input type="range" name={fieldCode.ProgrammingLanguageLevel} id="" />
      </span>
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

const ContactOption = ({ type, fieldName, placeholder, label, icon})=>{
  return(
    <div className={styles.contact_option}>
      <input type="checkbox" name={`${fieldName}Check`} id="" />
      <span>{icon}</span>
        {
        fieldName==="EMAL"? 
        (<input className={styles.input} type={type} placeholder={placeholder} name={fieldName} id={`id_${fieldName}`} required={false} />): 
        (<input className={styles.input} type={type} placeholder={placeholder} name={fieldName} id={`id_${fieldName}`} />)
        }
    </div>
  )
}

export const ContactInput = (props)=>{

  return(
    <div className={styles.contactInput}>

      <div className={styles.save_discard}>
        <button className={styles.discard}>discard</button>
        <button className={styles.save}>save</button>
      </div>
      <div className={styles.contactOptions}>
        <ContactOption type={"email"} placeholder="E-mail" fieldName={fieldCode.Email} icon={<MdEmail/>} />
        <ContactOption type={"number"} placeholder="Phone" fieldName={fieldCode.Phone} icon={<CgSmartphone/>} />
        <ContactOption type={"text"} placeholder="Address" fieldName={fieldCode.Address} icon={<IoLocationSharp/>} />
        <ContactOption type={"text"} placeholder="Website" fieldName={fieldCode.Website} icon={<CgWebsite/>} />
        <ContactOption type={"text"} placeholder="Github" fieldName={fieldCode.Github} icon={<AiFillGithub/>} />
        <ContactOption type={"text"} placeholder="Linkedin" fieldName={fieldCode.Linkedin} icon={<BsLinkedin/>} />
        <ContactOption type={"text"} placeholder="StackOverflow" fieldName={fieldCode.StackOverflow} icon={<BsStackOverflow/>} />
        <ContactOption type={"text"} placeholder="Quora" fieldName={fieldCode.Quora} icon={<FaQuora/>} />
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

const RadioGroup =({id, value})=>{
  return(
    <>
    <input type="radio" name={fieldCode.LanguageLevel} id={id} value={value} />
    <label htmlFor={id}>{value}</label>
    </>
  )
}

export const LangInput =(props)=>{
  return(
    <CommonForm secId="7" className="langInput">
      <input type="text" name={fieldCode.Language} placeholder="Language" value={""} />
      <div className={styles.group}>
        <RadioGroup id={"option1"} value="1/5"/>
        <RadioGroup id={"option2"} value="2/5"/>
        <RadioGroup id={"option3"} value="3/5"/>
        <RadioGroup id={"option4"} value="4/5"/>
        <RadioGroup id={"option5"} value="5/5"/>
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
    <CommonForm secId="8" className="educationInput">
      <div className={styles.top}>
        <input ref={inputRef1} name={fieldCode.StudyProgram} value="Study Program" onChange={(e) => onChangeHandler(e)} />
        <input ref={inputRef2} name={fieldCode.Institution} value="Institution" onChange={(e) => onChangeHandler(e)} />
      </div>
      <div className={styles.inputYear}>
        <input type="text" ref={inputRef3} name={fieldCode.StudyStartDate} id="" placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
        <span>to</span>
        <input type="text" id="" ref={inputRef4} name={fieldCode.StudyEndDate} placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
        <input type="checkbox"ref={inputRef5} name={fieldCode.StudyPresent} id="present" />
        <label htmlFor="present">Present</label>
      </div>
      <div className={styles.bottom}>
        <input type="number" ref={inputRef7} name={fieldCode.Cgpa} id="" placeholder="CGPA/Percentage" onChange={(e) => onChangeHandler(e)}/>
        <input type="text" placeholder="Study Place"  ref={inputRef6} name={fieldCode.StudyPlace} value="" onChange={(e) => onChangeHandler(e)} />
      </div>
    </CommonForm>
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