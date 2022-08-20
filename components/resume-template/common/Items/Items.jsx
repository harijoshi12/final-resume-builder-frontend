import React, { useEffect, useRef, useState } from 'react'
import styles from '../Resume.module.css'

import { EducationInput, InterestInput, MyJourneyInput, NameInput, ProfessionInput, ProfSummaryInput, ProgLangInput, ProjectInput, TechSkillInput } from './ItemsInput';

// import HOC
import HocItems from './HocItems';

const SecItem = (props) => {
  const { secId, data, className, secTitle, itemData1, itemData2, itemData3, dataArray, setDataArray, addNewItem, setPlusEl } = props
  const title = data.title
  const [edit, setEdit] = useState(false)
  const [itemTitle, setItemTitle] = useState(title)

  useEffect(()=>{
    if(dataArray.isLast){
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
    setItemTitle(e.target.value)
    if (e.target.value === "") {
      inputRef.current.placeholder = itemData1
    }
  }

  const handleEditItemTitle = (e) => {
    e.preventDefault()
    setPlusEl(false)
    setEdit(!edit)
    if (itemTitle === "") {
      setItemTitle(itemData1)
    }else{
      setDataArray(dataArray.map(d=>d.id === dataArray.id? {...d, title:itemTitle}: d))
    }
  }

  const handleDeleteItemTitle = (e)=>{
    setDataArray(dataArray.filter(d=>d.id != dataArray.id))
    setPlusEl(false)
  }
 
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  let childComponent
  if(secId === "1"){(childComponent = <PersonalInfo itemTitle={itemTitle} handleClickItem={handleClickItem} {...data}/>)}
  if(secId === "2"){edit?(childComponent = <TechSkillInput/>):(childComponent = <TechnicalSkill itemTitle={itemTitle} handleClickItem={handleClickItem} {...data}/>)}
  if(secId === "3"){(childComponent = <ProgLang itemTitle={itemTitle} handleClickItem={handleClickItem} onChangeHandler={onChangeHandler} handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle} inputRef={inputRef} edit={edit} {...data}/>)}
  if(secId === "4"){edit?(childComponent = <MyJourneyInput/>):(childComponent = <MyJourney itemTitle={itemTitle} handleClickItem={handleClickItem} {...data}/>)}
  if(secId === "5"){(childComponent = <ContactDetail itemTitle={itemTitle} handleClickItem={handleClickItem} {...data}/>)}
  if(secId === "6"){edit?(childComponent = <ProjectInput/>):(childComponent = <Project itemTitle={itemTitle} handleClickItem={handleClickItem} {...data}/>)}
  if(secId === "7"){(childComponent = <Lang itemTitle={itemTitle} handleClickItem={handleClickItem} {...data}/>)}
  if(secId === "8"){edit?(childComponent = <EducationInput/>):(childComponent = <Edu itemTitle={itemTitle} handleClickItem={handleClickItem} {...data}/>)}
  if(secId === "9"){edit?(childComponent = <InterestInput/>):(childComponent = <Interest itemTitle={itemTitle} handleClickItem={handleClickItem} {...data}/>)}
  return (< >{childComponent}</>)
}

export default SecItem

const PersonalInfo = (props) => {
  const {resumeTitle,edit, imgsrc, name, profession, tagline} = props
  console.log("perinfo= ",props.dataArray)
  return (
    <>
      <h1 className={styles.resumeTitle}>{resumeTitle}</h1>
      <div className={styles.imgboxOuter}>
        <div className={styles.imgboxInner}>
          <div className={styles.imgbox}></div>
          <div className={styles.myinfo}>
            {edit?<NameInput/>:<h1 className={styles.myName}>{name}</h1>}
            {edit?<ProfessionInput/>:<h2 className={styles.profession}>{profession}</h2>}
          </div>
        </div>
      </div>
      {edit?<ProfSummaryInput/>:<h2 className={styles.tagline}>"{tagline}"</h2>}
    </>
  );
};

const ContactDetail = (props) => {
  return (
    <a  rel="noopener noreferrer" target="_blank">
      <span>{props.icon}</span> <span>{props.info}</span>
    </a>
  );
};

const TechnicalSkill = ({ itemTitle, handleClickItem }) => {
  return <span className={styles.technicalSkill} onClick={handleClickItem} >{itemTitle}</span>;
};

const ProgLang = ({ title, itemTitle, level, inputRef, handleClickItem, handleEditItemTitle, handleDeleteItemTitle, onChangeHandler, edit }) => {
  return (
    <div className={styles.progLang}>
      {
        edit? (
        <ProgLangInput className={"progLangInput"}/>) :(
          <span className={styles.title} onClick={handleClickItem} >{itemTitle}</span>
        )
      } 
      <span className={styles.progressBarOuter}>
        <span
          className={styles.progressBarInner}
          style={{ width: `${level * 10}%` }}
        ></span>
      </span>
    </div>
  );
};

const Lang = ({ title, level }) => {
  return (
    <div className={styles.lang}>
      <span className={styles.title}>{title}</span>
      <span className={styles.level}>{level}</span>
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
  const { time, jobTitle, companyName, desc, handleClickItem } = props;
  return (
    <div className={styles.myJourneyItem}>
      <span className={styles.time} onClick={handleClickItem}>{time}</span>
      <h1 className={styles.title} onClick={handleClickItem}>
        <span></span>
        <span onClick={handleClickItem}>{jobTitle}</span> | <span onClick={handleClickItem}>{companyName}</span>
      </h1>
      <p className={styles.desc} onClick={handleClickItem}>{desc}</p>
    </div>
  );
}

const Interest = ({ itemTitle, handleClickItem }) => {
  return <span className={styles.interest} onClick={handleClickItem}>{itemTitle}</span>
};

