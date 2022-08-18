import React, { useEffect, useRef, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import styles from '../Resume.module.css'

import { SingleInput } from './ItemsInput';

// import HOC
import HocItems from './HocItems';

const SecItem = (props) => {
  const { secId, className, secTitle, itemData1, itemData2, itemData3, data, dataArray, setDataArray, addNewItem, setPlusEl } = props
  const title = data.title
  const [edit, setEdit] = useState(false)
  const [itemTitle, setItemTitle] = useState(title)

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

  const handleClickItemTitle = () => {
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
      setDataArray(dataArray.map(d=>d.id === data.id? {...d, title:itemTitle}: d))
    }
  }

  const handleDeleteItemTitle = (e)=>{
    setDataArray(dataArray.filter(d=>d.id != data.id))
    setPlusEl(false)
  }
 
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])
  let inputItem = (secId === "2" ||secId==="9") ? <SingleInput itemTitle={itemTitle} inputRef={inputRef} handleDeleteItemTitle={handleDeleteItemTitle} onChangeHandler={onChangeHandler} handleEditItemTitle={handleEditItemTitle} className={secId==="2"? `techSkillInput`: "interestInput"}/> : null

  let childComponent
  if(secId === "1"){edit?(childComponent = inputItem):(childComponent = <PersonalInfo itemTitle={itemTitle} handleClickItemTitle={handleClickItemTitle} {...data}/>)}
  if(secId === "2"){edit?(childComponent = inputItem):(childComponent = <TechnicalSkill itemTitle={itemTitle} handleClickItemTitle={handleClickItemTitle} {...data}/>)}
  if(secId === "3"){(childComponent = <ProgLang itemTitle={itemTitle} handleClickItemTitle={handleClickItemTitle} onChangeHandler={onChangeHandler} handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle} inputRef={inputRef} edit={edit} {...data}/>)}
  if(secId === "4"){edit?(childComponent = inputItem):(childComponent = <MyJourney itemTitle={itemTitle} handleClickItemTitle={handleClickItemTitle} {...data}/>)}
  if(secId === "5"){edit?(childComponent = inputItem):(childComponent = <ContactDetail itemTitle={itemTitle} handleClickItemTitle={handleClickItemTitle} {...data}/>)}
  if(secId === "6"){edit?(childComponent = inputItem):(childComponent = <Project itemTitle={itemTitle} handleClickItemTitle={handleClickItemTitle} {...data}/>)}
  if(secId === "7"){edit?(childComponent = inputItem):(childComponent = <Lang itemTitle={itemTitle} handleClickItemTitle={handleClickItemTitle} {...data}/>)}
  if(secId === "8"){edit?(childComponent = inputItem):(childComponent = <Edu itemTitle={itemTitle} handleClickItemTitle={handleClickItemTitle} {...data}/>)}
  if(secId === "9"){edit?(childComponent = inputItem):(childComponent = <Interest itemTitle={itemTitle} handleClickItemTitle={handleClickItemTitle} {...data}/>)}

  return (< >{childComponent}</>)
}

export default SecItem

const PersonalInfo = ({resumeTitle, imgsrc, name, profession, tagline}) => {
  
  return (
    <>
      <h1 className={styles.resumeTitle}>{resumeTitle}</h1>
      <div className={styles.imgboxOuter}>
        <div className={styles.imgboxInner}>
          <div className={styles.imgbox}></div>
          <div className={styles.myinfo}>
            <h1 className={styles.myName}>{name}</h1>
            <h2 className={styles.profession}>{profession}</h2>
          </div>
        </div>
      </div>
      <h2 className={styles.tagline}>"{tagline}"</h2>
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

const TechnicalSkill = ({ itemTitle, handleClickItemTitle }) => {
  return <span className={styles.technicalSkill} onClick={handleClickItemTitle} >{itemTitle}</span>;
};

const ProgLang = ({ title, itemTitle, level, inputRef, handleClickItemTitle, handleEditItemTitle, handleDeleteItemTitle, onChangeHandler, edit }) => {
  return (
    <div className={styles.progLang}>
      {
        edit? (
        <SingleInput itemTitle={itemTitle} inputRef={inputRef} handleDeleteItemTitle={handleDeleteItemTitle} onChangeHandler={onChangeHandler} handleEditItemTitle={handleEditItemTitle} className={"progLangInput"}/>) :(
          <span className={styles.title} onClick={handleClickItemTitle} >{itemTitle}</span>
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

const Edu = ({ title, institute, time, place, cgpa }) => {
  return (
    <div className={styles.edu}>
      <div className={styles.r1}>
        <span className={styles.title}>{title}</span> <span> | </span>
        <span className={styles.institute}>{institute}</span>
      </div>
      <div className={styles.r2}>
        {cgpa ? <span className={styles.cgpa}>{cgpa}</span>:null}{cgpa?"|":null}
        {time?<span className={styles.time}>{time}</span>:null}{time?"|":null}
        {place?<span className={styles.place}> {place}</span>:null}
      </div>
    </div>
  );
};

function Project({ title, tech, desc }) {
  return (
    <div className={styles.projectItem}>
      <h2 className={styles.title}>
        <span>{title}</span>
        <span>|</span>
        <span>{tech}</span>
      </h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}

function MyJourney(props) {
  const { time, jobTitle, companyName, desc } = props;
  return (
    <div className={styles.myJourneyItem}>
      <span className={styles.time}>{time}</span>
      <h1 className={styles.title}>
        <span></span>
        <span>{jobTitle}</span> | <span>{companyName}</span>
      </h1>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}

const Interest = ({ itemTitle, handleClickItemTitle }) => {
  return <span className={styles.interest} onClick={handleClickItemTitle}>{itemTitle}</span>
};


const NewPersonalInfo = HocItems(PersonalInfo)
const NewContactDetail = HocItems(ContactDetail)
const NewTechnicalSkill = HocItems(TechnicalSkill)
const NewProgLang = HocItems(ProgLang)
const NewLang = HocItems(Lang)
const NewEdu = HocItems(Edu)
const NewProject = HocItems(Project)
const NewMyJourney = HocItems(MyJourney)
const NewInterest = HocItems(Interest)

export {NewContactDetail, NewPersonalInfo, NewEdu, NewLang, NewProgLang, NewProject, NewTechnicalSkill, NewMyJourney, NewInterest}