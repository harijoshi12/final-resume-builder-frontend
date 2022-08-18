import React from 'react'
import styles from './Resume.module.css'
import Section from './Sections/Sections'

// data
import {personalInfo, contactDetails, techSkills, progLangs, projects, langs, education, myJourney, interests} from './data'

const Resume = () => {
  return (
    <div className={styles.resume}>
      {/* left section */}
      <div className={styles.left}>
        <Section secId="1" secTitleName="Personal Info" itemData1="myName" itemData2="Profession" itemData3="Tagline"  data={personalInfo} className="personalInfo"/>
        
        <Section secId="2" secTitleName="Technical Skills" itemData1="Technical Skill" itemData2="" itemData3="" data={techSkills} className="technicalSkills"/>

        <Section secId="3" secTitleName="Programming Languages" itemData1="Programming Language" itemData2="" itemData3="" data={progLangs} className="progLangs"/>

        <Section secId="4" secTitleName="My Journey" itemData1="Title/Position" itemData2="WorkPlace/Company" itemData3="" data={myJourney} className="myJourney"/>

      </div>
      {/* right section */}
      <div className={styles.right}>
        <Section secId="5" secTitleName="Contact Details" itemData1="" itemData2="" itemData3="" data={contactDetails} className="contactDetails"/>
        
        <Section secId="6" secTitleName="Projects" itemData1="Project Name" itemData2="" itemData3="" data={projects} className="projects"/>

        <Section secId="7" secTitleName="Languages" itemData1="Language" itemData2="Full Professional Proficiency" itemData3="" data={langs} className="langs"/>

        <Section secId="8" secTitleName="Education" itemData1="Study Program" itemData2="Institution/Place of Education" itemData3="" data={education} className="edus"/>

        <Section secId="9" secTitleName="Interests" itemData1="Interest" itemData2="" itemData3="" data={interests} className="interests"/>
      </div>
    </div>
  )
}

export default Resume