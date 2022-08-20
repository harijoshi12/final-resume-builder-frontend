import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineDownloadDone } from "react-icons/md";

// custom styles
import styles from '../Resume.module.css'

import { fieldCode } from '../constants/typeCodes';

const SecTitle = ({setPlusEl, secTitleName})=>{
  const [edit, setEdit] = useState(false)
  const [secTitle, setSecTitle] = useState(secTitleName)  
  useEffect(()=>{
    if(edit){
      setPlusEl(true)
    } else{
      setPlusEl(false)
    }
  },[edit, setPlusEl])

  const handleClickSecTitle= ()=>{
    setEdit(!edit)
  }

  const inputRef = useRef(null)
  const onChangeHandler = (e)=>{
    setSecTitle(e.target.value)
    if(e.target.value === ""){
      inputRef.current.placeholder = secTitleName
    }
  }

  const handleEditSecTitle = (e)=>{
    e.preventDefault()
    // setEdit(!edit)
    if(secTitle === ""){
      setSecTitle(secTitleName)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])
  return(
    <>
      {
        edit?(
          <form className={styles.secTitleInput} onSubmit={(e)=>{handleEditSecTitle(e)}} onBlur={(e)=>{handleEditSecTitle(e)}}>
            <input name={fieldCode.SecTitle} ref={inputRef} value={secTitle} onChange={(e)=>onChangeHandler(e)} />
            <span className={styles.icon} onClick={(e) => handleEditSecTitle(e)}><MdOutlineDownloadDone /></span>
          </form>
        ):(
          <h1 className={styles.secTitle} onClick={handleClickSecTitle}>{secTitle}</h1>
        )
      }
    </>
  )
}

export default SecTitle