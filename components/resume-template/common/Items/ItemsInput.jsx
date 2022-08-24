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
  const {secId, newEditFinishHandler, handleDeleteItem, className,children} = props
  const formRef = useRef(null)

  const onSubmitHandler =(e)=>{
    e.preventDefault()
    newEditFinishHandler()
  }

  useEffect(()=>{
    function handleClickOutside(e){
      if(formRef.current && !formRef.current.contains(e.target)){
        newEditFinishHandler()
        console.log("click outside")
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return()=>{
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  })

  return(
    <form ref={formRef} className={styles[className]} onSubmit={(e) => { onSubmitHandler(e) }}>
      <div className={styles.input_fields}>{children}</div>
      <div className={styles.icons}>
        <span className={styles.icon} onClick={(e) => onSubmitHandler(e)}><MdDone /></span>
        <span className={styles.icon} onClick={(e) => handleDeleteItem(e)}><AiFillDelete /></span>
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
  const {title,  inputRef, onSubmitHandler, handleDeleteItemTitle, onChangeHandler} = props
  return (
    <CommonForm inputRef={inputRef} handleDeleteItemTitle={handleDeleteItemTitle} onSubmitHandler={onSubmitHandler} secId="2" className="techSkillInput" >  
     <input ref={inputRef} name={fieldCode.TECHSKILL} value={title} onChange={(e) => onChangeHandler(e)} />
    </CommonForm>
  )
}

export const ProgLangInput = (props) => {
  const {progLang, inputRef, handleDeleteItem, editFinishHandler, onChangeHandler, setItemData} = props
  
  const newEditFinishHandler=()=>{
    editFinishHandler()
    if(progLang === ""){
      setItemData(prev=>({...prev, progLang: "Programming Language"}))
    }
  }
  return (
    <CommonForm  newEditFinishHandler={newEditFinishHandler} handleDeleteItem={handleDeleteItem} secId="3" className="progLangInput">  
     <input value={progLang} placeholder='Programming Language' ref={inputRef} name={fieldCode.PROGLANG}  onChange={(e) => onChangeHandler(e)}/>
    </CommonForm>
  )
}

export const ProgLangLevel = (props)=> {
  const {progLangLevel, setItemData} = props
  const level = progLangLevel
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

  const onChangeHandler = (e) => {
    setItemData(prev=>({...prev, [e.target.name]: e.target.value/10 }))
  }
  return(
    <span ref={outerRef} className={`${styles.outer} ${styles.progLangLevel}`}>
      <form action="">
        <span ref={innerRef} className={styles.inner} style={{ width: `${level * 10}%` }}></span>
        <span ref={thumbRef} className={styles.thumb} style={{left: `calc(${level * 10}% - 15px)`}}></span>
        <input value={level*10} onInput={(e)=>handleSlide(e)} ref={inputRef} type="range" step={"5"} name={fieldCode.PROGLANGLEVEL} onChange={(e) => onChangeHandler(e)} id="" />
      </form>
    </span>
  )
}

export const MyJourneyInput = (props) =>{
  const {inputRef, jobStartDate,jobEndDate, jobPresent,jobTitle, jobCompany, jobDesc,  handleDeleteItem,  setItemData, editFinishHandler, onChangeHandler} = props

  const onChangeHandlerTc =(e)=>{
    setItemData(prev=>({...prev, [e.target.name]: e.target.checked}))
  }
  const newEditFinishHandler=()=>{
    editFinishHandler()
    if(jobTitle === ""){
      setItemData(prev=>({...prev, jobTitle: "Job Title"}))
    }
    if(jobCompany === ""){
      setItemData(prev=>({...prev, jobCompany: "Company Name/workPlace"}))
    }
  }

  return(
    <>
      <CommonForm newEditFinishHandler={newEditFinishHandler} handleDeleteItem={handleDeleteItem}  secId="4" className="myJourneyInput">
        <div className={styles.inputYear}>
          <input value={jobStartDate} type="text" name={fieldCode.JOBSTARTDATE} id="" placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
          <span>to</span>
          {
            jobPresent? (
              <span className={styles.present}>Present</span>
            ):(
              <input value={jobEndDate} type="text" id="" name={fieldCode.JOBENDDATE} placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
            )
          }

          <div className={styles.present}>
            <input  type="checkbox" checked={jobPresent} name={fieldCode.JOBPRESENT} id="present" onChange={(e)=>onChangeHandlerTc(e)}/>
            <label htmlFor="present">present</label>
          </div>
        </div>
        <div className={styles.main_details}>
          <div className={styles.top}>
            <input value={jobTitle} ref={inputRef} name={fieldCode.JOBTITLE} placeholder="Title/Position" onChange={(e) => onChangeHandler(e)} />
            <input value={jobCompany} name={fieldCode.JOBCOMPANY} placeholder="Workplace/Company" onChange={(e) => onChangeHandler(e)} />
          </div>
          <textarea value={jobDesc}  type="text" name={fieldCode.JOBDESC} placeholder="Description/Achievements" onChange={(e) => onChangeHandler(e)} />
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
      setItems(prev=>({...prev, [e.target.name] : true}))
    }else{
      setItems(prev=>({...prev, [e.target.name] : e.target.checked}))
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
  const [items, setItems] = useState({...dataArray})

  const {email, emailChecked, phone, phoneChecked, address, addressChecked, website, websiteChecked, linkedin, linkedinChecked, github, githubChecked, stackoverflow, stackoverflowChecked, quora, quoraChecked, medium, mediumChecked} = items

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
  const {inputRef, projectTitle, projectTechStack, projectDesc, projectGitLink, projectLiveDemo, handleDeleteItem, setItemData, editFinishHandler, onChangeHandler} = props

  const newEditFinishHandler=()=>{
    editFinishHandler()
    if(projectTitle === ""){
      setItemData(prev=>({...prev, projectTitle: "Project Title"}))
    }
    if(projectTechStack === ""){
      setItemData(prev=>({...prev, projectTechStack: "TechStack used"}))
    }
  }

  return(
    <CommonForm newEditFinishHandler={newEditFinishHandler} handleDeleteItem={handleDeleteItem}  secId="6" className="projectInput">
      <div className={styles.top}>
        <input type="text" placeholder='Project Title'  ref={inputRef} name={fieldCode.PROJECTTITLE} value={projectTitle} onChange={(e) => onChangeHandler(e)} />
        <input type="text" placeholder='TechStack used'  name={fieldCode.PROJECTTECHSTACK} value={projectTechStack} onChange={(e) => onChangeHandler(e)} />
      </div>
      <div className={styles.bottom}>
        <textarea name={fieldCode.PROJECTDESC} placeholder='Project Description' value={projectDesc} onChange={(e) => onChangeHandler(e)} />
        <div className={styles.links}>
          <input type="text" placeholder='Github link' name={fieldCode.PROJECTGITLINK} value={projectGitLink} onChange={(e) => onChangeHandler(e)} />
          <input type="text" placeholder='Live-Demo link' name={fieldCode.PROJECTLIVEDEMO} value={projectLiveDemo} onChange={(e) => onChangeHandler(e)} />
        </div>
      </div>
    </CommonForm>
  )
}

const RadioGroup =({id, value})=>{
  return(
    <>
    <input type="radio" name={fieldCode.LANGUAGELEVEL} id={id} value={value} />
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
  const {inputRef,setItemData ,studyProgram, institution, cgpa, studyStartDate, studyEndDate, studyPresent, studyPlace, handleDeleteItem, editFinishHandler, onChangeHandler} = props

  const onChangeHandlerTc =(e)=>{
    setItemData(prev=>({...prev, [e.target.name]: e.target.checked}))
  }
  const newEditFinishHandler=()=>{
    editFinishHandler()
    if(studyProgram === ""){
      setItemData(prev=>({...prev, studyProgram: "Study Program"}))
    }
    if(institution === ""){
      setItemData(prev=>({...prev, institution: "Institution/Place of Education"}))
    }
  }

  return(
    <CommonForm secId="8" newEditFinishHandler={newEditFinishHandler} className="educationInput" handleDeleteItem={handleDeleteItem}>
      <div className={styles.top}>
        <input ref={inputRef} name={fieldCode.STUDYPROGRAM} placeholder="Study Program" value={studyProgram} onChange={(e) => onChangeHandler(e)} />
        <input  name={fieldCode.INSTITUTION} placeholder="Institution/Place of Education" value={institution} onChange={(e) => onChangeHandler(e)} />
      </div>
      <div className={styles.inputYear}>
        <input type="text"  name={fieldCode.STUDYSTARTDATE} id="" placeholder="yyyy" value={studyStartDate} onChange={(e) => onChangeHandler(e)}/>
        <span>to</span>
        {
        studyPresent?  (<span className={styles.present}>Present</span>
        ):(
        <input type="text" id=""  name={fieldCode.STUDYENDDATE} placeholder="yyyy" value={studyEndDate} onChange={(e) => onChangeHandler(e)}/>) 
      }
        <input type="checkbox" checked={studyPresent}  name={fieldCode.STUDYPRESENT} id="present" onChange={(e)=>onChangeHandlerTc(e)}/>
        <label htmlFor="present">Present</label>
      </div>
      <div className={styles.bottom}>
        <input type="text"  name={fieldCode.CGPA} id="" placeholder="CGPA/Percentage" value={cgpa} onChange={(e) => onChangeHandler(e)}/>
        <input type="text" placeholder="Study Place" name={fieldCode.STUDYPLACE} value={studyPlace} onChange={(e) => onChangeHandler(e)} />
      </div>
    </CommonForm>
  )
}

export const InterestInput = (props) => {
  const {interest, inputRef, setItemData, handleDeleteItem, onChangeHandler, editFinishHandler} = props

  const newEditFinishHandler=()=>{
    editFinishHandler()
    if(interest === ""){
      setItemData(prev=>({...prev, interest: "interest"}))
    }
  }

  return (
    <CommonForm newEditFinishHandler={newEditFinishHandler} handleDeleteItem={handleDeleteItem} secId="9" className="interestInput">
      <input placeholder='Interest' ref={inputRef} name={fieldCode.INTEREST} value={interest} onChange={(e) => onChangeHandler(e)}/>
    </CommonForm>
  )
}