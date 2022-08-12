import React, { useState } from 'react'
import NewLogin from './Login'
import NewRegister from './Register'
import Link from 'next/link'

import styles from './styles/auth.module.css'
const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)
  return (
    <main className={styles.wrapper}>
      <div className={styles.form_container}>
        <div className={styles.slider_container}>
          <Link href='/login'><a onClick={()=>setIsLoginForm(true)} className={styles.link}>Login</a></Link>
          <Link href='/register'><a onClick={()=>setIsLoginForm(false)} className={styles.link}>Register</a></Link>
          <div className={styles.slider}></div>
        </div>
        <NewLogin/>
        <NewRegister/>
        <div className={styles.common}>
          <div className={styles.social_divider}>
            <span>or</span>
          </div>
          <div className={styles.social_logins}>
            <div className={styles.googel_auth}><span>G</span> Google</div>
            <div className={styles.facebook_auth}><span>F</span>Facebook</div>
            <div className={styles.linkedin_auth}><span>in..</span>Linkedin</div>
            <div className={styles.Github_auth}><span>Git..</span>Github</div>
          </div>
        </div>
      </div>
    </main>  

  )
}

export default Auth