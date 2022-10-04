import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'

// custom style
import styles from './styles/Template1.module.css'
const AddItems = ({ addNewItemHandler }) => {
  return (
    <div className={styles.addItems} onMouseDown={addNewItemHandler}>
      <span className={styles.plus}><BsPlusCircleFill /> </span>
      <span className={styles.dashedLine}></span>
      <span className={styles.dot}><GoPrimitiveDot /> </span>
    </div>
  )
}

export default AddItems