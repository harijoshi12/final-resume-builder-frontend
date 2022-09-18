import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

// import components
import AddItems from '../AddItem/AddItem'
import SecItem, { ContactDetails } from '../Items/Items'
import SecTitle from '../SectionTitles/SectionTitles'
import { ContactInput } from '../Items/ItemsInput'

// custom style
import styles from '../Resume.module.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { resumeActions } from '../../../../features/resume/resumeSlice'

// proglang level marking component
const Marking =()=>{
  return(
    <div className={styles.marking}>
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  )
}

// 
const Section = (props)=>{
  const {secId,  secTitle, secData, className} = props
  const [plusEl, setPlusEl] = useState(false)
  const [newSecData, setNewSecData] = useState(secData);
  const [addNewItem, setAddNewItem] = useState(false);
  const [showContactInput, setShowContactInput] = useState(false);

  const dispatch = useDispatch();

  console.log('sectitle in section : ', secTitle);

// TODO : on change of newSecData , dispatch whole
  useEffect(() =>{
    console.log('newSecData changed')
    if(!secId){
      return;
    }
    let path ;
    if(secId === '1') {
      path = "personalInfo";
    } else if (secId === '2'){
      path = "techskills";
    } else if (secId === '3'){
      path = "progLangs";
    } else if (secId === '4'){
      path = "experiences";
    } else if (secId === '5'){
      path = "contactDetails";
    } else if (secId === '6'){
      path = "projects";
    } else if (secId === '7'){
      path = "languages";
    } else if (secId === '8'){
      path = "educations";
    } else if (secId === '9'){
      path = "interests";
    }
    if(path){
      console.log('path :', path)
      dispatch( resumeActions.changeState({
        pathName : path,
        value: newSecData
      }))
    }
  } , [newSecData]) 


  const addNewItemHandler = ()=>{
    const itemsarr = newSecData.map(itemData=> ({...itemData, isLast: false }))
    if(secId==="2"){
      setNewSecData([...itemsarr, {id:uuidv4(), techSkill: ``, isLast: true}])
    }
    if(secId==="3"){
      setNewSecData([...itemsarr, {id:uuidv4(), progLang: ``,progLangLevel: 7, isLast: true}])
    }
    if(secId==="4"){
      setNewSecData([...itemsarr, {id:uuidv4(), jobTitle: ``,jobCompany: ``,jobStartDate: '',jobEndDate: '',jobPresent:'',jobDesc:'' , isLast: true}])
    }
    if(secId==="6"){
      setNewSecData([...itemsarr, {id:uuidv4(), projectTitle: ``,projectTechStack: ``,projectDesc:'', projectGitLink:'', projectLiveDemo:'', isLast: true}])
    }
    if(secId==="7"){
      setNewSecData([...itemsarr, {id:uuidv4(), language: ``,languageLevel: `${itemData2}`, isLast: true}])
    }
    if(secId==="8"){
      setNewSecData([...itemsarr, {id:uuidv4(), studyProgram: ``, institution: ``,studyStartDate:'',studyEndDate:'',studyPresent: false,cgpa:'',studyPlace:'', isLast: true}])
    }
    if(secId==="9"){
      setNewSecData([...itemsarr, {id:uuidv4(), interest: ``, isLast: true}])
    }
    setAddNewItem(true)
  }

  let contactSec
  if(secId === "5"){
    if(showContactInput){
      contactSec = <ContactInput setShowContactInput={setShowContactInput} newSecData={newSecData} setNewSecData={setNewSecData}/>
    }else{
      contactSec = <ContactDetails setShowContactInput={setShowContactInput} {...newSecData} />
    }
  }
  return(
    <div className={`${styles[className]} ${styles.resumeSec}`}>
      {
        secId === "1" || secId === "5" ? null : <SecTitle setPlusEl={setPlusEl}  secTitleObj={secTitle}/>
      }
      {
      secId==="3"?(
        <div className={`${styles[className]} ${styles.secContent}`}>
        <Marking/>
        {newSecData.map(itemData => <SecItem secId={secId} key={itemData.id} itemData={itemData} secData={newSecData} setSecData={setNewSecData} addNewItem={addNewItem} setPlusEl={setPlusEl}/>)}
      </div>
      ): secId ==="5"?(
        contactSec
      ):(
      <div className={`${styles[className]} ${styles.secContent}`}>
        {newSecData.map(itemData => <SecItem secId={secId} key={itemData.id} itemData={itemData} secData={newSecData} setSecData={setNewSecData} addNewItem={addNewItem} setPlusEl={setPlusEl} />)}
      </div>
      )
      }
      {
        plusEl?(
          <AddItems addNewItemHandler={addNewItemHandler} />
        ):null
      }
    </div>
  )
}

export default Section