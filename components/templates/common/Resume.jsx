// import React from "react";
// import styles from "./Resume.module.css";
// import Section from "./Sections/Sections";

// // import {
// //   personalInfo,
// //   contactDetails,
// //   techSkills,
// //   progLangs,
// //   projects,
// //   langs,
// //   education,
// //   myJourney,
// //   interests,
// // } from "./data";
// import {
//   getResumeAsync,
//   STATUSES,
// } from "../../../features/resume/resumeSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useAuth } from "../../../contexts/AuthContext";

// const Resume = () => {
//   const [resumeData, setResumeData] = useState({});
//   const { currentToken, currentUser } = useAuth();
//   const dispatch = useDispatch();
//   const { data, status } = useSelector((state) => state.resume);

//   useEffect(() => {
//     if (currentToken) {
//       dispatch(getResumeAsync(currentToken))
//     }
//   }, [currentToken])

//   useEffect(() => {
//     setResumeData(data);
//   }, [data]);

//   const {
//     personalInfo,
//     contactDetails,
//     techSkills,
//     progLangs,
//     projects,
//     languages: langs,
//     educations: education,
//     experiences: myJourney,
//     interests,
//   } = resumeData;

//   if (status == STATUSES.IDLE || status == STATUSES.PENDING) {
//     return <h2>Loading</h2>;
//   }
//   return (
//     <div className={styles.resume}>
//       {/* left section */}
//       <div className={styles.left}>
//         <Section
//           secId="1"
//           secTitleName="Personal Info"
//           secData={personalInfo}
//           className="personalInfo"
//         />

//         <Section
//           secId="2"
//           secTitleName="Technical Skills"
//           secData={techSkills}
//           className="technicalSkills"
//         />

//         <Section
//           secId="3"
//           secTitleName="Programming Languages"
//           secData={progLangs}
//           className="progLangs"
//         />

//         <Section
//           secId="4"
//           secTitleName="My Journey"
//           secData={myJourney}
//           className="myJourney"
//         />
//       </div>
//       {/* right section */}
//       <div className={styles.right}>
//         <Section
//           secId="5"
//           secTitleName="Contact Details"
//           secData={contactDetails}
//           className="contactDetails"
//         />

//         <Section
//           secId="6"
//           secTitleName="Projects"
//           secData={projects}
//           className="projects"
//         />

//         <Section
//           secId="7"
//           secTitleName="Languages"
//           secData={langs}
//           className="langs"
//         />

//         <Section
//           secId="8"
//           secTitleName="Education"
//           secData={education}
//           className="edus"
//         />

//         <Section
//           secId="9"
//           secTitleName="Interests"
//           secData={interests}
//           className="interests"
//         />
//       </div>
//     </div>
//   );
// };

// export default Resume;
