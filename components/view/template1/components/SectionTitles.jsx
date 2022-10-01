import React, { useEffect, useRef, useState } from 'react'
import { MdDone } from "react-icons/md";

// custom styles
import styles from '../Resume.module.css'
const SecTitle = ({secTitleName})=>{
  let secTitle = secTitleName
  return(
    <>
        <h1 className={styles.secTitle}>{secTitle}</h1>
    </>
  )
}

export default SecTitle