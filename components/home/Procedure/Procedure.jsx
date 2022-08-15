import React from 'react'
import {BsCheckLg} from 'react-icons/bs'

import styles from '../../../styles/Home.module.css'

const Procedure = () => {
  return (
    <section className={`${styles.sec} ${styles.procedure}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top_section}>
            <div className={styles.step}>
              <span><BsCheckLg/></span> 
              <h2>Pick a template</h2>
              <p>Choose a sleek design and layout to get started</p>
            </div>
            <div className={styles.step}>
              <span><BsCheckLg/></span> 
              <h2>Edit & fill your details</h2>
              <p>With our powerfull resume builder editing and filling your details is as simple as it can be</p>
            </div>
            <div className={styles.step}>
              <span><BsCheckLg/></span> 
              <h2>Download Resume</h2>
              <p>Download and send your resume straight to hiring managers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Procedure