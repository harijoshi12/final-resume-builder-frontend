import React, { useEffect, useRef, useState } from 'react'

import { AiFillDelete, AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { MdDone, MdEmail } from "react-icons/md";
import { CgSmartphone, CgWebsite } from 'react-icons/cg';
import { IoLocationSharp } from 'react-icons/io5';
import { BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { FaQuora } from 'react-icons/fa';
import { IoMdCloudUpload } from 'react-icons/io';

import styles from '../Resume.module.css'

import { fieldCode } from '../constants/typeCodes';

export const CommonForm= (props)=>{
  const {secId, handleEditItemTitle, handleDeleteItemTitle, className,children} = props

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
      <input ref={inputRef} name={fieldCode.NAME} placeholder="Your Name" />
    </div>
  )
}

export const ProfessionInput = (props) => {
  const inputRef = useRef(null)
  return (
    <div className={styles.professionInput}>
      <input ref={inputRef} name={fieldCode.PROFESSION} placeholder="Profession" />
    </div>
  )
}

export const ProfSummaryInput = (props) => {
  const inputRef = useRef(null)
  return (
    <div className={styles.profSummaryInput}>
      <textarea  cols="30" rows="10" ref={inputRef} name={fieldCode.TAGLINE} placeholder="About You"/>
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
      <input type="file" id='imgUpload' ref={inputRef} name={fieldCode.IMAGESRC} />
      <span className={styles.delete}>
        <AiFillDelete/>
      </span>
    </div>
  )
}

export const TechSkillInput = (props) => {
  const {title,  inputRef, handleEditItemTitle, handleDeleteItemTitle, onChangeHandler} = props
  return (
    <CommonForm inputRef={inputRef} handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle} secId="2" className="techSkillInput" >  
     <input ref={inputRef} name={fieldCode.TECHSKILL} value={title} onChange={(e) => onChangeHandler(e)} />
    </CommonForm>
  )
}

export const ProgLangInput = (props) => {
  const {title, inputRef, itemTitle, handleDeleteItemTitle, handleEditItemTitle, onChangeHandler} = props
  return (
    <CommonForm inputRef={inputRef} handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle}  secId="3" className="progLangInput">  
     <input value={title} ref={inputRef} name={fieldCode.PROGLANG}  onChange={(e) => onChangeHandler(e)}/>
    </CommonForm>
  )
}

export const ProgLangLevel = ({level})=> {
  const innerRef = useRef(null)
  const outerRef = useRef(null)
  const thumbRef = useRef(null)
  const inputRef = useRef(null)
  const handleSlide =(e)=>{
    let width = inputRef.current.clientWidth
    let value = e.target.value
    innerRef.current.style.width = `${value}%`
    thumbRef.current.style.left = `${value/100*width - 10}px`
  }
  return(
    <span ref={outerRef} className={`${styles.outer} ${styles.progLangLevel}`}>
      <form action="">
        <span ref={innerRef} className={styles.inner} style={{ width: `${level * 10}%` }}></span>
        <span ref={thumbRef} className={styles.thumb} style={{left: `calc(${level * 10}% - 15px)`}}></span>
        <input onInput={(e)=>handleSlide(e)} ref={inputRef} type="range" step={"5"} name={fieldCode.PROGLANGLEVEL}  id="" />
      </form>
    </span>
  )
}

export const MyJourneyInput = (props) =>{
  const { jobStartDate,jobEndDate, jobTitle, jobCompany, jobDescription,  handleDeleteItemTitle, handleEditItemTitle, setItemData} = props

  const onChangeHandler = (e) => {
    setItemData(prev=>({...prev, [e.target.name]: e.target.value }))
  }

  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  const inputRef4 = useRef(null)
  const inputRef5 = useRef(null)
  const inputRef6 = useRef(null)
  return(
    <>
      <CommonForm handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle} secId="4" className="myJourneyInput">
        <div className={styles.inputYear}>
          <input value={jobStartDate} type="text" ref={inputRef3} name={fieldCode.JOBSTARTDATE} id="" placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
          <span>to</span>
          <input value={jobEndDate} type="text" id="" ref={inputRef4} name={fieldCode.JOBENDDATE} placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
          <div className={styles.present}>
            <input  type="checkbox"ref={inputRef5} name={fieldCode.JOBPRESENT} id="present" />
            <label htmlFor="present">present</label>
          </div>
        </div>
        <div className={styles.main_details}>
          <div className={styles.top}>
            <input value={jobTitle} ref={inputRef1} name={fieldCode.JOBTITLE} placeholder="Title/Position" onChange={(e) => onChangeHandler(e)} />
            <input value={jobCompany} ref={inputRef2} name={fieldCode.JOBCOMPANY} placeholder="Workplace/Company" onChange={(e) => onChangeHandler(e)} />
          </div>
          <textarea value={jobDescription}  type="text"  ref={inputRef6} name={fieldCode.JOBDESC} placeholder="Description/Achievements" onChange={(e) => onChangeHandler(e)} />
        </div>
      </CommonForm>
    </>
  )
}

const ContactOption = ({ type, fieldName, placeholder, value, checkVal, icon, setItems})=>{
  const onChangeHandler = (e)=>{
    setItems(prev=>({...prev, [e.target.name]:e.target.value}))
  }
  const onChangeHandlerTc = (e)=>{
    if(fieldName ==="email"){
      setItems(prev=>({...prev, [e.target.name]: true}))
    }else{
      setItems(prev=>({...prev, [e.target.name]:e.target.checked}))
    }
  }
  return(
    <div className={styles.contact_option}>
      <input checked={checkVal}  type="checkbox" name={`${fieldName}Checked`} id="" onChange={(e)=>onChangeHandlerTc(e)}/>
      <span>{icon}</span>
      <input className={styles.input} value={value} type={type} placeholder={placeholder} name={fieldName} id={`id_${fieldName}`} required={fieldName === fieldCode.EMAIL || checkVal} onChange={(e)=>onChangeHandler(e)}/>
    </div>
  )
}

export const ContactInput = (props)=>{
  const {dataArray,setShowContactInput, setDataArray } = props
  console.log("props= ",props)
  const [items, setItems] = useState({...dataArray})

  const {email, emailChecked, phone, phoneChecked, address, addressChecked, website, websiteChecked, linkedin, linkedinChecked, github, githubChecked, stackoverflow, stackoverflowChecked, quora, quoraChecked, medium, mediumChecked} = items

  console.log("items= ",items)

  const onDiscardHandler =()=>{
    setDataArray({...dataArray})
    setShowContactInput(false)
  }
  const onSubmitHandler =(e)=>{
    e.preventDefault()
    setDataArray(prev=>({...items}))
    setShowContactInput(false)
  }
  
  return(
    <form className={styles.contactInput} onSubmit={(e)=>onSubmitHandler(e)}>
      <div className={styles.save_discard}>
        <button type="button" className={styles.discard} onClick={()=>onDiscardHandler()} >discard</button>
        <button type="submit" className={styles.save}>save</button>
      </div>
      <div className={styles.contactOptions}>
        <ContactOption type={"email"} value={email} checkVal={emailChecked} placeholder="E-mail" fieldName={fieldCode.EMAIL} icon={<MdEmail/>} setItems={setItems}/>

        <ContactOption type={"number"} value={phone} checkVal={phoneChecked} placeholder="Phone" fieldName={fieldCode.PHONE} icon={<CgSmartphone/>} setItems={setItems}/>

        <ContactOption type={"text"} value={address} checkVal={addressChecked} placeholder="Address" fieldName={fieldCode.ADDRESS} icon={<IoLocationSharp/>} setItems={setItems}/>

        <ContactOption type={"text"} value={website} checkVal={websiteChecked} placeholder="Website" fieldName={fieldCode.WEBSITE} icon={<CgWebsite/>} setItems={setItems}/>

        <ContactOption type={"text"} value={linkedin} checkVal={linkedinChecked} placeholder="Linkedin" fieldName={fieldCode.LINKEDIN} icon={<BsLinkedin/>} setItems={setItems}/>

        <ContactOption type={"text"} value={github} checkVal={githubChecked} placeholder="Github" fieldName={fieldCode.GITHUB} icon={<AiFillGithub/>} setItems={setItems}/>

        <ContactOption type={"text"} value={stackoverflow} checkVal={stackoverflowChecked} placeholder="StackOverflow" fieldName={fieldCode.STACKOVERFLOW} icon={<BsStackOverflow/>} setItems={setItems}/>

        <ContactOption type={"text"} value={quora} checkVal={quoraChecked} placeholder="Quora" fieldName={fieldCode.QUORA} icon={<FaQuora/>} setItems={setItems}/>

        <ContactOption type={"text"} value={medium} checkVal={mediumChecked} placeholder="Medium" fieldName={fieldCode.MEDIUM} icon={<AiFillMediumCircle/>} setItems={setItems}/>
      </div>
    </form>
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
  const {title, inputRef, handleEditItemTitle, handleDeleteItemTitle, onChangeHandler} = props
  return (
    <CommonForm inputRef={inputRef} handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle} secId="9" className="interestInput">
      <input ref={inputRef} name={fieldCode.Interest} value={title} onChange={(e) => onChangeHandler(e)} />
    </CommonForm>
  )
}