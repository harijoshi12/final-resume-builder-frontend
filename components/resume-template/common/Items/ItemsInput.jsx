import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import styles from '../Resume.module.css'

export const SingleInput = (props) => {
  const {formName, inputRef, itemTitle, className , handleDeleteItemTitle, handleEditItemTitle, onChangeHandler} = props
  console.log("inputref= ",inputRef)
  return (
    <form className={styles[className]} onSubmit={(e) => { handleEditItemTitle(e) }} onBlur={(e) => { handleEditItemTitle(e) }}>
      <input ref={inputRef} name={formName} value={itemTitle} onChange={(e) => onChangeHandler(e)} />
      <span className={styles.icon} onMouseDown={(e) => handleEditItemTitle(e)}><MdDone /></span>
      <span className={styles.icon} onMouseDown={(e) => handleDeleteItemTitle(e)}><AiFillDelete /></span>
    </form>
  )
}

export const MyJourneyInput = (props) =>{
  const {inputName1,inputName2, inputName3, inputName4, inputName5, inputName6,inputName7, inputRef1,inputRef2, inputRef3,inputRef4,inputRef5, inputRef6,inputRef7, itemTitle, className , handleDeleteItemTitle, handleEditItemTitle, onChangeHandler} = props
  return(
    <form className={styles[className]} onSubmit={(e) => { handleEditItemTitle(e) }} onBlur={(e) => { handleEditItemTitle(e) }}>
      <div className={styles.inputField}>
        <input ref={inputRef1} name={inputName1} value={itemTitle} onChange={(e) => onChangeHandler(e)} />
        <input ref={inputRef2} name={inputName2} value={itemTitle} onChange={(e) => onChangeHandler(e)} />
        <div className={styles.inputYear}>
          <input type="number" ref={inputRef3} name={inputName3} id="" placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
          <span>-</span>
          <input type="number" id="" ref={inputRef4} name={inputName4} placeholder="yyyy" onChange={(e) => onChangeHandler(e)}/>
          <label htmlFor="present"></label>
          <input type="checkbox"ref={inputRef5} name={inputName5} id="present" />
        </div>
        <input type="text"  ref={inputRef6} name={inputName6} value={itemTitle} onChange={(e) => onChangeHandler(e)} />
        <input type="number" id="" ref={inputRef7} name={inputName7} placeholder="cgpa/marks" onChange={(e) => onChangeHandler(e)}/>
      </div>
        <span className={styles.icon} onMouseDown={(e) => handleEditItemTitle(e)}><MdDone /></span>
        <span className={styles.icon} onMouseDown={(e) => handleDeleteItemTitle(e)}><AiFillDelete /></span>
    </form>
  )
}