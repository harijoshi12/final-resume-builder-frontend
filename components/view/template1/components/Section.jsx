import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

// import components
import SecTitle from './SectionTitles'
import SecItem, {PersonalInfo, ContactDetails, TechnicalSkill, ProgLang, Lang, Project, MyJourney, Interest }from './Items'

// custom style
import styles from '../Resume.module.css'

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
  const {secId,  secTitleName, secData, className} = props

return(
  <div className={`${styles[className]} ${styles.resumeSec}`}>
      {
        secId === "1" || secId === "5" ? null : <SecTitle secTitleName={secTitleName}/>
      }
      {
        secId==="3"?(
          <div className={`${styles[className]} ${styles.secContent}`}>
        <Marking/>
        {secData.map(itemData => <SecItem secId={secId} key={itemData.id} itemData={itemData}/>)}
      </div>
      ): secId ==="5"?(
        <ContactDetails {...secData} />
      ):(
      <div className={`${styles[className]} ${styles.secContent}`}>
        {secData.map(itemData => <SecItem secId={secId} key={itemData.id} itemData={itemData}/>)}
      </div>
      )
      }
    </div>
  )
}

export default Section