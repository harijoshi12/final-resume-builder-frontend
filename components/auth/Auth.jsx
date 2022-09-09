import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import NewLogin from "./Login";
import NewRegister from "./Register";

import styles from "./styles/auth.module.css";
const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formHeight, setFormHeight] = useState("410px");
  const [top, setTop] = useState("");
  const commonRef = useRef(null);
  const sliderRef = useRef(null);
  const paddingRef = useRef(null);

  useLayoutEffect(() => {
    if (window.innerWidth <= "576") {
      setTop("360px");
    } else {
      setTop("374px");
    }
  }, []);
  useEffect(() => {
    commonRef.current.style.top = top;
    paddingRef.current.style.paddingTop = formHeight;
  }, [top, formHeight]);

  const showLogin = () => {
    if (window.innerWidth <= "576") {
      setTop("360px");
    } else {
      setTop("374px");
    }
    setFormHeight("410px");
    commonRef.current.style.transition = "all 0.6s ease-in-out";
    paddingRef.current.style.transition = "all 0.6s ease-in-out";
    sliderRef.current.style.left = "0%";
    setIsLoginForm(true);
  };
  const showRegister = () => {
    if (window.innerWidth <= "576") {
      setTop("420px");
    } else {
      setTop("435px");
    }
    setFormHeight("470px");
    sliderRef.current.style.left = "50%";
    commonRef.current.style.transition = "all 0.1s ease-in-out";
    paddingRef.current.style.transition = "all 0.1s ease-in-out";
    setIsLoginForm(false);
  };
  return (
    <main className={styles.wrapper}>
      <div className={styles.form_container}>
        <div className={styles.slider_container}>
          <span
            style={isLoginForm ? { color: "white" } : { color: "orangered" }}
            onClick={() => showLogin()}
            className={styles.link}
          >
            Login
          </span>
          <span
            style={isLoginForm ? { color: "orangered" } : { color: "white" }}
            onClick={() => showRegister()}
            className={styles.link}
          >
            Register
          </span>
          <div ref={sliderRef} className={styles.slider}></div>
        </div>
        <div ref={paddingRef} className={styles.padding}></div>
        <NewLogin isLoginForm={isLoginForm} />
        <NewRegister isLoginForm={isLoginForm} />
        <div ref={commonRef} className={styles.common}>
          <div className={styles.social_divider}>
            <span>or</span>
          </div>
          <div className={styles.social_logins}>
            <div className={styles.google_auth}>
              <span>G</span> Google
            </div>
            {/* <div className={styles.facebook_auth}><span>F</span>Facebook</div>
            <div className={styles.linkedin_auth}><span>in..</span>Linkedin</div>
            <div className={styles.Github_auth}><span>Git..</span>Github</div> */}
          </div>
          {/* <p>
            By creating this account, you agree to our{" "}
            <span>Privacy Policy</span> & <span>Cookie Policy</span>.
          </p> */}
        </div>
      </div>
    </main>
  );
};

export default Auth;
