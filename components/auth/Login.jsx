import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import HocForm from './HocForm'
import InputField from './InputField'
import styles from './styles/auth.module.css'
const Login = (props) => {
  const {emailRef, password1Ref, isLoginForm} = props
  const loginFormRef =  useRef(null)
  useEffect(()=>{
    if(isLoginForm){
      loginFormRef.current.style.left = "30px"
    } else{
      loginFormRef.current.style.left = "-440px"
    }
  },[isLoginForm])
  return (
    <form ref={loginFormRef} action="" className={styles.login_form}>
      <InputField inputRef={emailRef} isStar={true}  type="email" name="email_login" id_htmlFor="id_email_login" label="E-mail" ></InputField>
      
      <InputField inputRef={password1Ref} isStar={true}  type="password" name="password_login" id_htmlFor="id_password_login" label="Password" ></InputField>

      <div className={styles.etc}>
        <InputField inputRef={password1Ref} isStar={false} type="checkbox" name="remember" id_htmlFor="id_remember" label="Remember Me" ></InputField>
        <Link href='/reset-password'><a className={styles.forget}>Forget Password?</a></Link>
      </div>
      <button className={styles.submit_btn} type="submit">Login</button>
    </form>
  )
}
const NewLogin = HocForm(Login)
export default NewLogin