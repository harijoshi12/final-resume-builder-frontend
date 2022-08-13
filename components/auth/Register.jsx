import React, {useRef, useEffect} from 'react'
import HocForm from './HocForm'
import InputField from './InputField'
import styles from './styles/auth.module.css'
const Register = (props) => {
  const {emailRef, password1Ref, password2Ref, isLoginForm} = props
  const registerFormRef =  useRef(null)

  useEffect(()=>{
    if(isLoginForm){
      registerFormRef.current.style.left = "500px"
    } else{
      registerFormRef.current.style.left = "30px"
    }
  },[isLoginForm])
  return (
    <form ref={registerFormRef} action="" className={styles.register_form}>
      <InputField inputRef={emailRef} isStar={true}  type="email" name="email_register" id_htmlFor="id_email_register" label="E-mail" ></InputField>
      
      <InputField inputRef={password1Ref} isStar={true}  type="password" name="password_register1" id_htmlFor="id_password_register1" label="Password" ></InputField>

      <InputField inputRef={password2Ref} isStar={true}  type="password" name="password_register2" id_htmlFor="id_password_register2" label="Comfirm Password" ></InputField>

      <div className={styles.captcha_wrapper}>
        <InputField inputRef={password1Ref} isStar={false} isCaptcha={true} type="checkbox" name="captcha" id_htmlFor="id_captcha" label="I'm not a robot" ></InputField>
        <div className={styles.captcha_img}></div>
      </div>

      <button className={styles.submit_btn} type="submit">Register</button>
    </form>
  )
}

const NewRegister = HocForm(Register)

export default NewRegister
