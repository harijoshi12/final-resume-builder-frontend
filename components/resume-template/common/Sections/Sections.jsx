import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import AddItems from '../AddItem/AddItem'
import SecItem, { ContactDetails } from '../Items/Items'
import SecTitle from '../SectionTitles/SectionTitles'

// custom style
import styles from '../Resume.module.css'
import { ContactInput } from '../Items/ItemsInput'
import { ContactDetail } from '../Items/Items'
const Marking =()=>{
  return(
    <div className={styles.marking}>
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
  )
}
const Section = (props)=>{
  const {secId,  secTitleName, data, className} = props
  const [plusEl, setPlusEl] = useState(false)
  const [items, setItems] = useState(data)
  const [addNewItem, setAddNewItem] = useState(false)
  const [showContactInput, setShowContactInput] = useState(false)
  const addNewItemHandler = ()=>{
    const itemsarr = items.map(d=> ({...d, isLast: false }))
    if(secId==="2"){
      setItems([...itemsarr, {id:uuidv4(), techSkill: ``, isLast: true}])
    }
    if(secId==="3"){
      setItems([...itemsarr, {id:uuidv4(), progLang: ``,progLangLevel: 7, isLast: true}])
    }
    if(secId==="4"){
      setItems([...itemsarr, {id:uuidv4(), jobTitle: ``,jobCompany: ``,jobStartDate: '',jobEndDate: '',jobPresent:'',jobDesc:'' , isLast: true}])
    }
    if(secId==="6"){
      setItems([...itemsarr, {id:uuidv4(), projectTitle: ``,projectTechStack: ``,projectDesc:'', projectGitLink:'', projectLiveDemo:'', isLast: true}])
    }
    if(secId==="7"){
      setItems([...itemsarr, {id:uuidv4(), language: ``,languageLevel: `${itemData2}`, isLast: true}])
    }
    if(secId==="8"){
      setItems([...itemsarr, {id:uuidv4(), studyProgram: ``, institution: ``,studyStartDate:'',studyEndDate:'',studyPresent: false,cgpa:'',studyPlace:'', isLast: true}])
    }
    if(secId==="9"){
      setItems([...itemsarr, {id:uuidv4(), interest: ``, isLast: true}])
    }
    setAddNewItem(true)
  }

  let contactSec
  if(secId === "5"){
    if(showContactInput){
      contactSec = <ContactInput setShowContactInput={setShowContactInput} dataArray={items} setDataArray={setItems}/>
    }else{
      contactSec = <ContactDetails setShowContactInput={setShowContactInput} {...items} />
    }
  }
  return(
    <div className={`${styles[className]} ${styles.resumeSec}`}>
      {
        secId === "1" || secId === "5" ? null : <SecTitle setPlusEl={setPlusEl}  secTitleName={secTitleName}/>
      }
      {
      secId==="3"?(
        <div className={`${styles[className]} ${styles.secContent}`}>
        <Marking/>
        {items.map(d => <SecItem secId={secId} key={d.id} data={d} dataArray={items} setDataArray={setItems} addNewItem={addNewItem} setPlusEl={setPlusEl}/>)}
      </div>
      ): secId ==="5"?(
        contactSec
      ):(
      <div className={`${styles[className]} ${styles.secContent}`}>
        {items.map(d => <SecItem secId={secId} key={d.id} data={d} dataArray={items} setDataArray={setItems} addNewItem={addNewItem} setPlusEl={setPlusEl} />)}
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