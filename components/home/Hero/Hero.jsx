import React from 'react'
import styles from '../../../styles/Home.module.css'

const Hero = () => {
  return (
    <section className={`${styles.sec} ${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          Hero section
        </div>
      </div>
    </section>
  )
}

export default Hero