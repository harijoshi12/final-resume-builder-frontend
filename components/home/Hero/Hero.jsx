import React from "react";
import styles from "../../../styles/Home.module.css";

const Hero = () => {
  return (
    <section className={`${styles.sec} ${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left_section}>
            <h1>The Best free online Resume Builder</h1>
            <p>Build your brand-new resume in as little as 5 minutes</p>
            <button>Create Your Resume</button>
          </div>
          <div className={styles.right_section}>
            <div className={styles.resumebg}>
              <div className={styles.first}></div>
              <div className={styles.second}></div>
              <div className={styles.imgbox}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
