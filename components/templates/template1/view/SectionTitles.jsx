import React from "react";
import styles from './styles/Template1.module.css';

const SecTitle = ({ secTitleName }) => {


  if (secTitleName) {
    return (
      <>
        <h1 className={styles.secTitle}>
          {secTitleName}
        </h1>
      </>
    );
  }
};

export default SecTitle;
