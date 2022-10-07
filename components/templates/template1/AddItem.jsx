import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { BsPlusCircleFill } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { addItem } from '../../../features/resume/resumeSlice'

// custom style
import styles from './styles/Template1.module.css'
const AddItems = (props) => {
  const { secName, arrayName, newItem: value, setAddNewItem } = props
  const dispatch = useDispatch()

  const addNewItemHandler = () => {
    dispatch(addItem({
      secName, arrayName, value: { ...value, id: uuidv4() }
    }))
    setAddNewItem(true)
  }

  return (
    <div className={styles.addItems} onMouseDown={() => addNewItemHandler()}>
      <span className={styles.plus}><BsPlusCircleFill /> </span>
      <span className={styles.dashedLine}></span>
      <span className={styles.dot}><GoPrimitiveDot /> </span>
    </div>
  )
}

export default AddItems