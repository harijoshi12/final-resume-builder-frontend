import React from 'react'
import styles from './styles/auth.module.css'
const InputField = (props) => {
  const {inputRef, type, isStar, isCaptcha, name, id_htmlFor, label } = props
  return (
    <div className={isStar ? styles.input_field: isCaptcha? styles.captcha : styles.remember}>
      <input ref={isStar?inputRef:null} type={type} name={name} id={id_htmlFor} />
      <label  htmlFor={id_htmlFor}><span className={styles.label}>{label}{isStar ? <span className={styles.star}>*</span>: null }</span></label>
    </div>
  )
}

export default InputField