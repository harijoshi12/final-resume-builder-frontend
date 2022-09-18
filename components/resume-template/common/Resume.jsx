import React from "react";
import styles from "./Resume.module.css";
import Section from "./Sections/Sections";

// data
import {
  personalInfo,
  contactDetails,
  techSkills,
  progLangs,
  projects,
  langs,
  education,
  myJourney,
  interests,
} from "./data";
import { useSelector } from "react-redux";

let i = 0;

const Resume = () => {
  let completeState = useSelector((state) => state.resumeReducer);

  // useEffect(()=>{
  //   const f = async () => {
  //     const {data} = await axios.get("http://localhost:5000/api/resume/");
  //     console.log("idn14: data:", data[0]);
  //     setResumeLocalData({...data[0]})
  //   }
  //   f();
  // }, []);


  const {
    secTitles,
    personalInfo,
    contactDetails,
    techskills: techSkills,
    progLangs,
    projects,
    languages: langs,
    educations: education,
    experiences: myJourney,
    interests,
  } = completeState;
  return (
    <div className={styles.resume}>
      {/* left section */}
      <div className={styles.left}>
        <Section
          secId="1"
          secTitle={
              secTitles.find((title) => title?.id == "1")
              // secTitles[0]
          }
          secData={personalInfo}
          className="personalInfo"
        />

        <Section
          secId="2"
          secTitle={
              secTitles.find((title) => title?.id == "2")
            // secTitles[1]

          }
          secData={techSkills}
          className="technicalSkills"
        />

        <Section
          secId="3"
          secTitle={
            secTitles.find((title) => title?.id == "3")
            // secTitles[2]

          }
          secData={progLangs}
          className="progLangs"
        />

        <Section
          secId="4"
          secTitle={
            secTitles.find((title) => title?.id == "4")
            // secTitles[3]
          }
          secData={myJourney}
          className="myJourney"
        />
      </div>
      {/* right section */}
      <div className={styles.right}>
        <Section
          secId="5"
          secTitle={
            secTitles.find((title) => title?.id == "5")
            // secTitles[4]
          }
          secData={contactDetails}
          className="contactDetails"
        />

        <Section
          secId="6"
          secTitle={
            secTitles.find((title) => title?.id == "6")
            // secTitles[5]
          }
          secData={projects}
          className="projects"
        />

        <Section
          secId="7"
          secTitle={
            secTitles.find((title) => title?.id == "7")
            // secTitles[6]
          }
          secData={langs}
          className="langs"
        />

        <Section
          secId="8"
          secTitle={
            secTitles.find((title) => title?.id == "8")
            // secTitles[6]

          }
          secData={education}
          className="edus"
        />

        <Section
          secId="9"
          secTitle={
            secTitles.find((title) => title?.id == "9")
            // secTitles[6]
          }
          secData={interests}
          className="interests"
        />
      </div>
    </div>
  );
};

export default Resume;
