import React, { useEffect, useRef, useState } from 'react'
import { AiFillDelete, AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { MdDone, MdEmail } from "react-icons/md";
import { CgSmartphone, CgWebsite } from 'react-icons/cg';
import { IoLocationSharp } from 'react-icons/io5';
import { BsLinkedin, BsStackOverflow } from 'react-icons/bs';
import { FaQuora } from 'react-icons/fa';
import styles from '../Resume.module.css'


import { ContactInput, EducationInput, ImageInput, InterestInput, LangInput, MyJourneyInput, NameInput, ProfessionInput, ProfSummaryInput, ProgLangInput, ProgLangLevel, ProjectInput, TechSkillInput } from './ItemsInput';

const SecItem = (props) => {
  const { secId, data, className, secTitle, itemData1, itemData2, itemData3, dataArray, setDataArray, addNewItem, setPlusEl, showContactInput ,setShowContactInput } = props
  const [edit, setEdit] = useState(false)

  const [itemData, setItemData] = useState(data)

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
    console.log("first= ", [e.target.value])
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

  if(secId === "3"){(childComponent = <ProgLang {...itemData} handleClickItem={handleClickItem} onChangeHandler={onChangeHandler} handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle} inputRef={inputRef} edit={edit} {...itemData}/>)}

  if(secId === "4"){edit?(childComponent = <MyJourneyInput {...itemData} setItemData={setItemData}/>):(childComponent = <MyJourney handleClickItem={handleClickItem} {...itemData}/>)}

  if(secId === "5"){return}

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
  const {resumeTitle,name,profession, imagesrc, tagline } = props
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

const ContactItem = ({setShowContactInput, icon, info})=>{
  return(
    <a rel="noopener noreferrer" target="_blank">
      <span onClick={()=>setShowContactInput(true)}>{icon}</span> 
      <span onClick={()=>setShowContactInput(true)}>{info}</span>
    </a>
  )
}
export const ContactDetails = (props) => {
  const {setShowContactInput, setDataArray, email, emailChecked, phone, phoneChecked, address, addressChecked, website, websiteChecked, linkedin, linkedinChecked, github, githubChecked, stackoverflow, stackoverflowChecked, quora, quoraChecked, medium, mediumChecked }= props

  return (
    <>
      {email &&  emailChecked && <ContactItem setShowContactInput={setShowContactInput} info={email} icon={<MdEmail/>} />}

      {phone &&  phoneChecked && <ContactItem setShowContactInput={setShowContactInput} info={phone} icon={<CgSmartphone/>} />}

      {address && addressChecked && <ContactItem setShowContactInput={setShowContactInput} info={address} icon={<IoLocationSharp/>}/>}

      {website && websiteChecked && <ContactItem setShowContactInput={setShowContactInput} info={website} icon={<CgWebsite/>}/>}

      {linkedin && linkedinChecked && <ContactItem setShowContactInput={setShowContactInput} info={linkedin} icon={<BsLinkedin/>}/>}

      {github && githubChecked && <ContactItem setShowContactInput={setShowContactInput} info={github} icon={<AiFillGithub/>}/>}

      {stackoverflow && stackoverflowChecked && <ContactItem setShowContactInput={setShowContactInput} info={stackoverflow} icon={<BsStackOverflow/>}/>}

      {quora && quoraChecked && <ContactItem setShowContactInput={setShowContactInput} info={quora} icon={<FaQuora/>}/>}

      {medium && mediumChecked && <ContactItem setShowContactInput={setShowContactInput} info={email} icon={<AiFillMediumCircle/>}/>}
    </>
  );
};

const TechnicalSkill = (props) => {
  const {handleClickItem, techSkill} = props
  // console.log(props)
  return <span className={styles.technicalSkill} onClick={handleClickItem} >{techSkill}</span>;
};

const ProgLang = ({ progLang,  progLangLevel, inputRef, handleClickItem, handleEditItemTitle, handleDeleteItemTitle, onChangeHandler, edit }) => {
  
  return (

    <div className={styles.progLang}>
      {
        edit? (
        <ProgLangInput title={title} inputRef={inputRef} onChangeHandler={onChangeHandler} handleDeleteItemTitle={handleDeleteItemTitle} handleEditItemTitle={handleEditItemTitle}/>) :(
          <span className={styles.title} onClick={handleClickItem} >{progLang}</span>
        )
      } 
      <ProgLangLevel level={progLangLevel}/>
    </div>
  );
};

const Lang = ({ language, languageLevel, handleClickItem }) => {
  return (
    <div className={styles.lang}>
      <span className={styles.title} onClick={handleClickItem}>{language}</span>
      <span className={styles.level} onClick={handleClickItem}>{languageLevel}</span>
    </div>
  );
};

const Edu = ({ studyProgram, institution, studyStartDate,studyEndDate,studyPlace, cgpa, handleClickItem }) => {
  let time = studyStartDate || studyEndDate 
  return (
    <div className={styles.edu}>
      <div className={styles.r1}>
        <span className={styles.title} onClick={handleClickItem}>{studyProgram}</span> <span> | </span>
        <span className={styles.institute} onClick={handleClickItem}>{institution}</span>
      </div>
      <div className={styles.r2}>
        {cgpa ? <span className={styles.cgpa} onClick={handleClickItem}>{cgpa}</span>:null}{cgpa?"|":null}
        {time?<span className={styles.time} onClick={handleClickItem}>{studyStartDate}-{studyEndDate}</span>:null}{time?"|":null}
        {studyPlace?<span className={styles.place} onClick={handleClickItem}>{studyPlace}</span>:null}
      </div>
    </div>
  );
};

function Project({ projectTitle, projectTechStack, projectDesc, projectGitLink, projectLiveDemo ,handleClickItem  }) {
  return (
    <div className={styles.projectItem}>
      <h2 className={styles.title}>
        <span onClick={handleClickItem}>{projectTitle}</span>
        <span>|</span>
        <span onClick={handleClickItem}>{projectTechStack}</span>
      </h2>
      <div className={styles.desc} onClick={handleClickItem}><p>{projectDesc}</p>      
      <div className={styles.link}>
        <button className={styles.git_link}><a href={projectGitLink}>Github</a></button>
        <button className={styles.liveDemo_link}><a href={projectLiveDemo}>Live Demo</a></button>
      </div>
      </div>
    </div>
  );
}

function MyJourney(props) {
  const { jobStartDate,jobEndDate, jobTitle, jobCompany, jobDesc, handleClickItem } = props;
  return (
    <div className={styles.myJourneyItem}>
      <span className={styles.time} onClick={handleClickItem}>{jobStartDate}-{jobEndDate}</span>
      <h1 className={styles.title} onClick={handleClickItem}>
        <span></span>
        <span onClick={handleClickItem}>{jobTitle}</span> | <span onClick={handleClickItem}>{jobCompany}</span>
      </h1>
      <p className={styles.desc} onClick={handleClickItem}>{jobDesc}</p>
    </div>
  );
}

const Interest = ({interest, handleClickItem }) => {
  return <span className={styles.interest} onClick={handleClickItem}>{interest}</span>
};

