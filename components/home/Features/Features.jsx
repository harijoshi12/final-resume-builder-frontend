import React from 'react'
import {BsCheckLg} from 'react-icons/bs'
import styles from '../../../styles/Home.module.css'

const Features = () => {
  return (
    <section className={`${styles.sec} ${styles.features}`}>
      <div className={styles.container}>
        <h1 className={styles.sec_title}>Features</h1>
        <div className={styles.content}>
          <div className={styles.left_section}>
            <div className={styles.imgbox}></div>
          </div>
          <div className={styles.right_section}>
            <div className={styles.feature}>
              <span><BsCheckLg/></span> 
              <h2>5+ Professional Resume Templates</h2>
              <p>Modern and progessional templates which can be customized to your liking</p>
            </div>
            <div className={styles.feature}>
              <span><BsCheckLg/></span> 
              <h2>Fast and easy to use</h2>
              <p>Our free resume builder lets you easily and quickly create a resume using our powerfull resume builder</p>
            </div>
            <div className={styles.feature}>
              <span><BsCheckLg/></span> 
              <h2>Download your resume as pdf</h2>
              <p>Download your resume as pdf with <span>selectable text</span> and <span>clickable link</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features