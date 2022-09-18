import React from 'react'
import styles from './Resume.module.css'
import Section from './components/Section'
import { useSelector , useDispatch } from 'react-redux'

// secData
// import { personalInfo, contactDetails, techSkills, progLangs, projects, langs, education, myJourney, interests} from '../../resume-template/common/data';
import { useEffect } from 'react';
import { useState } from 'react';
import resumeLocalDataDummy from '../../resume-template/common/data';
import axios from 'axios';

const Resume = () => {
  const [resumeLocalData , setResumeLocalData] = useState(resumeLocalDataDummy);
  // let resumeLocalData;
  // if (typeof window !== 'undefined') {
  // resumeLocalData =  JSON.parse(localStorage.getItem('resumeData'));
  // }
  // let resumeLocalData = useSelector(state => state.resumeReducer); 
  
  // useEffect(() =>{
  //   let resumeLocalDataTemp =  JSON.parse(localStorage.getItem('resumeData'));
  //   if(resumeLocalDataTemp){
  //     resumeLocalData = resumeLocalDataTemp;
  //   }
  //   setRerender(!rerender);
  // }, []);

  useEffect(()=>{
    const f = async () => {
      const {data} = await axios.get("http://localhost:5000/api/resume/");
      console.log("idn14: data:", data[0]);
      setResumeLocalData({...data[0]})
    }
    f();
  }, [])
  // if(!rerender){
  // }
  
  // useEffect(()=> { 
  //   if (typeof window !== 'undefined') {
  //     let resumeLocalDataTemp =  JSON.parse(localStorage.getItem('resumeData'));
  //     if(resumeLocalDataTemp){
  //       resumeLocalData = resumeLocalDataTemp;
  //     }
  //   }
  //   setRerender(!rerender);
  // }, []);
  // let {personalInfo, contactDetails, techskills:techSkills, progLangs, projects, languages : langs, educations: education, experiences :  myJourney, interests} = useSelector(state => state.resumeReducer); 
  const {personalInfo, contactDetails, techskills:techSkills, progLangs, projects, languages : langs, educations: education, experiences :  myJourney, interests , secTitles} = resumeLocalData; 
  // const reduxState = useSelector(state => state.resumeReducer); 
  // console.log("reduxState : ", useSelector(state => state.resumeReducer) );

  // console.log('personalInfo : ', personalInfo);

  return (
    <div className={styles.resume}>
      {/* left section */}
      <div className={styles.left}>
        <Section secId="1" secTitleName={secTitles[0].secTitle} secData={personalInfo} className="personalInfo"/>
        
        <Section secId="2" secTitleName={secTitles[1].secTitle}  secData={techSkills} className="technicalSkills"/>

        <Section secId="3" secTitleName={secTitles[2].secTitle}  secData={progLangs} className="progLangs"/>

        <Section secId="4" secTitleName={secTitles[3].secTitle}  secData={myJourney} className="myJourney"/>

      </div>
      {/* right section */}
      <div className={styles.right}>
        <Section secId="5" secTitleName={secTitles[4].secTitle}  secData={contactDetails} className="contactDetails"/>
        
        <Section secId="6" secTitleName={secTitles[5].secTitle}  secData={projects} className="projects"/>

        <Section secId="7" secTitleName={secTitles[6].secTitle}  secData={langs} className="langs"/>

        <Section secId="8" secTitleName={secTitles[7].secTitle}  secData={education} className="edus"/>

        <Section secId="9" secTitleName={secTitles[8].secTitle}  secData={interests} className="interests"/>
      </div>
    </div>
  )
}

export default Resume