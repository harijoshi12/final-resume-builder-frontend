// import React, { useEffect, useRef, useState } from "react";
// import { v4 as uuidv4} from 'uuid'
// import Layout from "../../UI/Layout";
// import styles from "../../styles/ResumeTemplates.module.css";

// import { IoIosMail } from "react-icons/io";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { IoLocationSharp } from "react-icons/io5";
// import { GrLinkedin } from "react-icons/gr";
// import { AiFillDelete } from "react-icons/ai";
// import { MdDone } from "react-icons/md";

// const SingleTech = ({ addItems, setaddItems, data, dataArray, setDataArray }) => {
//   const [edit, setEdit] = useState(false);
//   const [editedData, setEditedData] = useState(data.title);
//   const inputRef = useRef(null)
//   const handleAddTechTitle = () => {
//     setEdit(!edit)
//     console.log(uuidv4())
//     console.log("hari")
//     if (editedData === "") {
//       setEditedData("Technical Details")
//     }
//   }

//   useEffect(() => {
//     setaddItems(edit)
//   }, [edit])

//   useEffect(() => {
//     console.log("single", addItems)
//   }, [addItems])

//   return (<>
//     {
//       edit? (
//         <form action="" onSubmit={(e)=>{}}>
//           <input ref={inputRef} type="text" value={editedData} onChange={(e)=>{
//               setEditedData(e.target.value)
//               if(e.target.value === ""){
//                 inputRef.current.placeholder = "tech skills"
//               }
//             }} />
//         </form>
//       ):(
//         <span className={styles.techSkill} onClick={handleAddTechTitle}>{editedData}</span>
//       )
//     }
//     </>
//   );
// };
// const ContactDetail = ({ contactDetail, contactDetails, setContactDetails }) => {
//   return (
//     <a href={props.link} rel="noopener noreferrer" target="_blank">
//       <span>{props.icon}</span> <span>{props.info}</span>
//     </a>
//   );
// };

// const TechnicalSkill = ({ addItems, setaddItems, techSkill, techSkills, setTechskills }) => {
//   return (
//     <>
//       {/* <span className={styles.technicalSkill}>{techSkill.title}</span> */}
//       <SingleTech addItems={addItems} setaddItems={setaddItems} data={techSkill} dataArray={techSkills} setTechSkills={setTechskills}></SingleTech>
//     </>
//   );
// };

// function ResumeTemplates() {
//   const [edit, setEdit] = useState(false);
//   const [addItems, setaddItems] = useState(false)
//   const arr = [{ id: 1, title: 'hari' }, { id: 2, title: "ram" }]

//   const [techSkillsTitle, setTechSkillsTitle] = useState("Technical Details");
//   const [techSkill, setTechSkill] = useState('abs');
//   const [techSkills, setTechSkills] = useState([])

//   const [contactDetailsTitle, setContactDetailsTitle] = useState("Contact Details")
//   const [contactDetail, setContactDetail] = useState('')
//   const [contactDetails, setContactDetails] = useState([])

//   const inputSecTitleRef = useRef(null)

//   const handleAddTechTitle = (e) => {
//     e.preventDefault()
//     setEdit(!edit)
//     if (techSkillsTitle === "") {
//       setTechSkillsTitle("Technical Details")
//     }
//   }
//   const handleClickTechTitle = () => {
//     setEdit(!edit)
//   }

//   useEffect(() => {
//     setaddItems(techSkills.length == 0 || edit)
//   }, [edit, techSkills.length])

//   // useEffect(() => {
//   //   console.log("resume", addItems)
//   // }, [addItems])

//   useEffect(() => {
//     inputSecTitleRef.current?.focus()
//   }, [edit])

//   return (
//     <Layout>
//       <main>
//         <section className={`${styles.sec} ${styles.hero}`}>
//           <div className={styles.container}>
//             <div className={styles.content}>
//               <div className={styles.resume}>
//                 <h3>resume</h3>

//                 {/* technical skills */}
//                 <div
//                   className={`${styles.technicalSkills} ${styles.resumeSec}`}
//                 >
//                   {/* add title name */}
//                   <div className={styles.secTitle}>
//                     {
//                       edit ? (
//                         <form className={styles.secTitleInput} action="" onSubmit={(e) => {
//                           handleAddTechTitle(e)
//                         }}>
//                           <input ref={inputSecTitleRef} type="input" onBlur={(e) => handleAddTechTitle(e)} value={techSkillsTitle} onChange={(e) => {
//                             setTechSkillsTitle(e.target.value)
//                             if (e.target.value == "") {
//                               inputSecTitleRef.current.placeholder = "Technical Skills"
//                             }
//                           }} className={styles.secTitleInput} />
//                           <span className={styles.icon} onClick={(e) => handleAddTechTitle(e)}>
//                             <MdDone />
//                           </span>
//                         </form>
//                       ) : (
//                         <h1 onClick={handleClickTechTitle}>{techSkillsTitle}</h1>
//                       )
//                     }
//                   </div>
//                   {/* add title name */}

//                   <div className={styles.data_container1}>
//                     {techSkills.map((item) => (
//                       <TechnicalSkill key={item.id}  addItems={addItems} setaddItems={setaddItems} techSkill={item} techSkills={techSkills} setTechSkills={setTechSkills} />
//                     ))}
//                     {
//                       addItems ? (
//                         <span className={styles.addNewItems} onClick={()=>{
//                           setaddItems(true)
//                           console.log("newItem")
//                           setTechSkills([{id:1, title:"Technical skill"}])

//                           console.log(techSkills)
//                         }}> <span className={styles.plus}>+</span> <span className={styles.dashLine}></span></span>
//                       ) : null
//                     }
//                     {/* <TechnicalSkill techSkill={techSkill} /> */}
//                   </div>
//                 </div>

//                 {/* contact details */}
//                 <div className={`${styles.contactDetails} ${styles.resumeSec}`}>
//                   <h1 className={styles.secTitle}>Contact Details</h1>
//                   <div className={styles.data_container2}>
//                     {contactDetails.map((item) => (
//                       <ContactDetail key={item.id} contactDetail={item} contactDetails={contactDetails} setContactDetails={setContactDetails} />
//                     ))}
//                     {/* <ContactDetail /> */}
//                   </div>
//                   <div className={styles.bottomBorder}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </Layout>
//   );
// }

// export default ResumeTemplates;
