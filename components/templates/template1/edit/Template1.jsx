import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThreeDots } from 'react-loader-spinner'
import { useAuth } from '../../../../contexts/AuthContext'
import { getResumeAsync, STATUSES, updateResume, updateResumeAsync } from '../../../../features/resume/resumeSlice'
import { NewSecContactDetails, NewSecEducations, NewSecExperiences, NewSecInterests, NewSecLanguages, NewSecPersonalInfo, NewSecProgLangs, NewSecProjects, NewSecTechnicalSkills, } from './Sections'
import styles from '../styles/Template1.module.css'

const Template1 = () => {
  const { currentToken, currentUser } = useAuth();

  const dispatch = useDispatch()

  useEffect(() => {
    if (currentToken) {
      dispatch(getResumeAsync(currentToken))
    }
  }, [currentToken, dispatch])

  const { status, data } = useSelector(state => state.resume)
  if (status === STATUSES.PENDING) {
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255,255,.5)",
        zIndex: "1000"
      }}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    )
  }

  const tempStyle = {
    height: "70vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  }

  return (
    <>
      {(status === STATUSES.SUCCEEDED && data) ? (
        <div className={styles.resume}>

          <div className={styles.left}>
            <NewSecPersonalInfo />
            <NewSecTechnicalSkills />
            <NewSecProgLangs />
            <NewSecExperiences />
          </div>

          <div className={styles.right}>
            <NewSecContactDetails />
            <NewSecProjects />
            <NewSecLanguages />
            <NewSecEducations />
            <NewSecInterests />
          </div>
        </div>
      ) : (
        <h1 style={tempStyle}>Please select a <Link href="/resume-templates"><a>&nbsp;Tempate&nbsp;</a></Link> first. </h1>
      )}
    </>
  )
}

export default Template1