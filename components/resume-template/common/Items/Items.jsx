import React, { useEffect, useRef, useState } from 'react'
import styles from '../Resume.module.css'

import { ContactInput, EducationInput, ImageInput, InterestInput, LangInput, MyJourneyInput, NameInput, ProfessionInput, ProfSummaryInput, ProgLangInput, ProgLangLevel, ProjectInput, TechSkillInput } from './ItemsInput';

const SecItem = (props) => {
  const { secId, data, className, secTitle, itemData1, itemData2, itemData3, dataArray, setDataArray, addNewItem, setPlusEl, setShowContactInput } = props
  const title = data.title
  const [edit, setEdit] = useState(false)

  // technicalSkill, proglang, interest
  // const [itemData.title, setItemData] = useState(title)

  // myJourney
  const [itemData, setItemData] = useState(data)
  // console.log("jd= ",journeyData)




  useEffect(()=>{
    if(data.isLast){
      if(addNewItem){
        setEdit(true)
      } else{
        setEdit(false)
      }
    }
  },[addNewItem])

  useEffect(()=>{
    setPlusEl(edit)
  },[edit])

  const inputRef = useRef(null)

  const handleClickItem = () => {
    setEdit(!edit)
    setPlusEl(true)
  }

  const onChangeHandler = (e) => {
    setItemData(prev=>({...prev, title: e.target.value }))
    if (e.target.value === "") {
      inputRef.current.placeholder = itemData1
    }
  }

  const handleEditItemTitle = (e) => {
    e.preventDefault()
    setPlusEl(false)
    setEdit(!edit)
    if (itemData.title === "") {
      setItemData(prev=>({...prev, title: itemData1 }))
    }else{
      setDataArray(dataArray.map(d=>d.id === dataArray.id? {...d, title:itemData.title}: d))
    }
  }

  const handleDeleteItemTitle = (e)=>{
    setDataArray(dataArray.filter(d=>{
      return(d.id != data.id)
    }))
    setPlusEl(false)
  }
 
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  let childComponent
  if(secId === "1"){(childComponent = <PersonalInfo handleClickItem={handleClickItem} {...itemData}/>)}

  if(secId === "2"){edit?(childComponent = <TechSkillInput {...itemData} onChangeHandler={onChangeHandler} handleClickItem={handleClickItem} handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle} inputRef={inputRef}/>):(childComponent = <TechnicalSkill  handleClickItem={handleClickItem} {...itemData}/>)}

  if(secId === "3"){(childComponent = <ProgLang handleClickItem={handleClickItem} onChangeHandler={onChangeHandler} handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle} inputRef={inputRef} edit={edit} {...itemData}/>)}

  if(secId === "4"){edit?(childComponent = <MyJourneyInput {...itemData} />):(childComponent = <MyJourney handleClickItem={handleClickItem} {...itemData}/>)}

  if(secId === "5"){(childComponent = <ContactDetail  handleClickItem={handleClickItem} setShowContactInput={setShowContactInput} {...itemData}/>)}

  if(secId === "6"){edit?(childComponent = <ProjectInput {...itemData} />):(childComponent = <Project  handleClickItem={handleClickItem} {...itemData}/>)}

  if(secId === "7"){edit?(childComponent = <LangInput {...itemData} />):(childComponent = <Lang  handleClickItem={handleClickItem} {...itemData}/>)}

  if(secId === "8"){edit?(childComponent = <EducationInput {...itemData}/>):(childComponent = <Edu  handleClickItem={handleClickItem} {...itemData}/>)}

  if(secId === "9"){edit?(childComponent = <InterestInput {...itemData} onChangeHandler={onChangeHandler}  handleClickItem={handleClickItem} handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle} inputRef={inputRef}/>):(childComponent = <Interest  handleClickItem={handleClickItem} {...itemData}/>)}
  return (< >{childComponent}</>)
}

export default SecItem

const PersonalInfo = (props) => {
  const [editName, setEditName] = useState(false)
  const [editProf, setEditProf] = useState(false)
  const [editProfSummary, setEditProfSummary] = useState(false)
  const [editImage, setEditImage] = useState(false)
  const {resumeTitle, imgsrc, name, profession, tagline} = props
  return (
    <>
      <h1 className={styles.resumeTitle}>{resumeTitle}</h1>
      <div className={styles.imgboxOuter}>
        <div className={styles.imgboxInner}>
            <div className={styles.imgbox_wrapper}>
              {editImage?<ImageInput/>:null}  
              <div className={styles.imgbox} onClick={()=>setEditImage(true)}>
            </div>
          </div>
          <div className={styles.myinfo}>
            {editName?<NameInput/>:<h1 className={styles.myName} onClick={()=>setEditName(true)}>{name}</h1>}
            {editProf?<ProfessionInput/>:<h2 className={styles.profession}onClick={()=>setEditProf(true)}>{profession}</h2>}
          </div>
        </div>
      </div>
      {editProfSummary?<ProfSummaryInput/>:<h2 className={styles.tagline} onClick={()=>setEditProfSummary(true)}>"{tagline}"</h2>}
    </>
  );
};

const ContactDetail = ({icon,info, setShowContactInput, handleClickItem}) => {
  return (
    <a rel="noopener noreferrer" target="_blank">
      <span onClick={()=>setShowContactInput(true)}>{icon}</span> <span onClick={()=>setShowContactInput(true)}>{info}</span>
    </a>
  );
};

const TechnicalSkill = (props) => {
  const {handleClickItem, title} = props
  // console.log(props)
  return <span className={styles.technicalSkill} onClick={handleClickItem} >{title}</span>;
};

const ProgLang = ({ title,  level, inputRef, handleClickItem, handleEditItemTitle, handleDeleteItemTitle, onChangeHandler, edit }) => {
  
  return (

    <div className={styles.progLang}>
      {
        edit? (
        <ProgLangInput className={"progLangInput"} inputRef={inputRef} onChangeHandler={onChangeHandler} handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle}/>) :(
          <span className={styles.title} onClick={handleClickItem} >{title}</span>
        )
      } 
      <ProgLangLevel level={level}/>
    </div>
  );
};

const Lang = ({ title, level, handleClickItem }) => {
  return (
    <div className={styles.lang}>
      <span className={styles.title} onClick={handleClickItem}>{title}</span>
      <span className={styles.level} onClick={handleClickItem}>{level}</span>
    </div>
  );
};

const Edu = ({ title, institute, time, place, cgpa, handleClickItem }) => {
  return (
    <div className={styles.edu}>
      <div className={styles.r1}>
        <span className={styles.title} onClick={handleClickItem}>{title}</span> <span> | </span>
        <span className={styles.institute} onClick={handleClickItem}>{institute}</span>
      </div>
      <div className={styles.r2}>
        {cgpa ? <span className={styles.cgpa} onClick={handleClickItem}>{cgpa}</span>:null}{cgpa?"|":null}
        {time?<span className={styles.time} onClick={handleClickItem}>{time}</span>:null}{time?"|":null}
        {place?<span className={styles.place} onClick={handleClickItem}>{place}</span>:null}
      </div>
    </div>
  );
};

function Project({ title, tech, desc, handleClickItem  }) {
  return (
    <div className={styles.projectItem}>
      <h2 className={styles.title}>
        <span onClick={handleClickItem}>{title}</span>
        <span>|</span>
        <span onClick={handleClickItem}>{tech}</span>
      </h2>
      <div className={styles.desc} onClick={handleClickItem}><p>{desc}</p>      
      <div className={styles.link}>
        <button className={styles.git_link}>Github</button>
        <button className={styles.liveDemo_link}>Live Demo</button>
      </div>
      </div>
    </div>
  );
}

function MyJourney(props) {
  const { jobStartDate,jobEndDate, jobTitle, jobCompany, jobDescription, handleClickItem } = props;
  return (
    <div className={styles.myJourneyItem}>
      <span className={styles.time} onClick={handleClickItem}>{jobStartDate}-{jobEndDate}</span>
      <h1 className={styles.title} onClick={handleClickItem}>
        <span></span>
        <span onClick={handleClickItem}>{jobTitle}</span> | <span onClick={handleClickItem}>{jobCompany}</span>
      </h1>
      <p className={styles.desc} onClick={handleClickItem}>{jobDescription}</p>
    </div>
  );
}

const Interest = ({title, handleClickItem }) => {
  return <span className={styles.interest} onClick={handleClickItem}>{title}</span>
};

