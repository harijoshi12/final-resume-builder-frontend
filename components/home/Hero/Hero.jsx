import React from 'react'
import styles from '../../../styles/Home.module.css'

const Hero = () => {
  return (
    <section className={`${styles.sec} ${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left_section}>
            <h1>Make a job-winning resume in minutes with our Simple yet powerfull Resume Builder</h1>
            <p>create your resume easily with our free builder & professional teplates</p>
            <button>Create Your Resume</button>
          </div>
          <div className={styles.right_section}>
            <div className={styles.imgbox}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero