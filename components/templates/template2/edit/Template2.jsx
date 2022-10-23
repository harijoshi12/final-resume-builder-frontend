// import Link from 'next/link'
// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useAuth } from '../../../../contexts/AuthContext'
// import { getResumeAsync, STATUSES, updateResume, updateResumeAsync } from '../../../../features/resume/resumeSlice'
// import { NewSecContactDetails, NewSecEducations, NewSecExperiences, NewSecInterests, NewSecLanguages, NewSecPersonalInfo, NewSecProgLangs, NewSecProjects, NewSecTechnicalSkills, } from './Sections'
// import styles from '../styles/Template2.module.css'

// const Template2 = () => {

//   const { currentToken, currentUser } = useAuth();

//   const dispatch = useDispatch()

//   useEffect(() => {
//     if (currentToken) {
//       dispatch(getResumeAsync(currentToken))
//     }
//   }, [currentToken, dispatch])

//   const { status, data } = useSelector(state => state.resume)
//   if (status === STATUSES.PENDING) {
//     return <h2>Loading</h2>
//   }

//   const tempStyle = {
//     height: "70vh",
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   }

//   return (
//     <h1>Edit Template 2</h1>
//   )

//   return (
//     <>
//       {(status === STATUSES.SUCCEEDED && data) ? (
//         <div className={styles.resume}>

//           <div className={styles.left}>
//             <NewSecPersonalInfo />
//             <NewSecTechnicalSkills />
//             <NewSecProgLangs />
//             <NewSecExperiences />
//           </div>

//           <div className={styles.right}>
//             <NewSecContactDetails />
//             <NewSecProjects />
//             <NewSecLanguages />
//             <NewSecEducations />
//             <NewSecInterests />
//           </div>
//         </div>
//       ) : (
//         <h1 style={tempStyle}>Please select a <Link href="/resume-templates"><a>&nbsp;Tempate&nbsp;</a></Link> first. </h1>
//       )}
//     </>
//   )
// }

// export default Template2

import React from 'react'

const Template2 = () => {
  return (
    <h1>Edit Template 2 new</h1>
  )
}

export default Template2