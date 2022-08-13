import React, { useEffect, useRef, useState } from 'react'
import NewLogin from './Login'
import NewRegister from './Register'


import styles from './styles/auth.module.css'
const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [top, setTop] = useState("387px")
  const commonRef = useRef(null)
  const sliderRef = useRef(null)
  useEffect(()=>{
    commonRef.current.style.top =  top;
  },[top])
  
  const showLogin = ()=>{
    setTop("387px")
    commonRef.current.style.transition = 'all 0.6s ease-in-out'
    sliderRef.current.style.left= '0%'
    setIsLoginForm(true)
  }
  const showRegister = ()=>{
    setTop("507px")
    sliderRef.current.style.left= '50%'
    commonRef.current.style.transition = 'all 0.1s ease-in-out'
    setIsLoginForm(false)
  }
  return (
    <main className={styles.wrapper}>
      <div className={styles.form_container}>
        <div className={styles.slider_container}>
          <span onClick={()=>showLogin()} className={styles.link}>Login</span>
          <span onClick={()=>showRegister()} className={styles.link}>Register</span>
          <div ref={sliderRef} className={styles.slider}></div>
        </div>
        <NewLogin isLoginForm={isLoginForm}/>
        <NewRegister isLoginForm={isLoginForm}/>
        <div ref={commonRef} className={styles.common}>
          <div className={styles.social_divider}>
            <span>or</span>
          </div>
          <div className={styles.social_logins}>
            <div className={styles.google_auth}><span>G</span> Google</div>
            {/* <div className={styles.facebook_auth}><span>F</span>Facebook</div>
            <div className={styles.linkedin_auth}><span>in..</span>Linkedin</div>
            <div className={styles.Github_auth}><span>Git..</span>Github</div> */}
          </div>
          <p>By creating this account, you agree to our <span>Privacy Policy</span> & <span>Cookie Policy</span>.</p>
        </div>
      </div>
    </main>  
  )
}

export default Auth