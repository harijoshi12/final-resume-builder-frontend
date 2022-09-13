import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import NewLogin from "./Login";
import NewRegister from "./Register";
import styles from "./styles/auth.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";

const Auth = ({ authPage }) => {
  const [data, setData] = useState({
    email_login: "",
    password_login: "",
    email_register: "",
    password_register1: "",
    password_register2: "",
  });
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formHeight, setFormHeight] = useState("410px");
  const [top, setTop] = useState("");
  const commonRef = useRef(null);
  const sliderRef = useRef(null);
  const paddingRef = useRef(null);

  useEffect(() => {
    if (authPage === "login") {
      setIsLoginForm(true);
    } else if (authPage === "register") {
      setIsLoginForm(false);
    }
  }, [authPage]);

  const handleInputs = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (!isLoginForm) {
      sliderRef.current.style.left = "50%";
      setFormHeight("470px");
      if (window.innerWidth <= "576") {
        setTop("420px");
      } else {
        setTop("435px");
      }
    } else {
      sliderRef.current.style.left = "0%";
      setFormHeight("410px");
      if (window.innerWidth <= "576") {
        setTop("360px");
      } else {
        setTop("374px");
      }
    }
  }, [isLoginForm]);

  useEffect(() => {
    commonRef.current.style.top = top;
    paddingRef.current.style.paddingTop = formHeight;
  }, [top, formHeight, isLoginForm]);

  const router = useRouter();
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
    router.push("/login");
  };

  const showRegister = () => {
    router.push("/register");
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

  const { handleGoogleLogin } = useAuth();
  const googleLoginHandler = async () => {
    try {
      const user = await handleGoogleLogin();
      console.log("g= ", user);
      toast.success("Successfully login!", {
        position: toast.POSITION.TOP_CENTER,
        className: "custom_toast",
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        className: "custom_toast",
      });
    }
  };

  return (
    <main className={styles.wrapper}>
      <ToastContainer position="top-center" />
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
        <NewLogin
          isLoginForm={isLoginForm}
          data={data}
          setData={setData}
          handleInputs={handleInputs}
        />
        <NewRegister
          isLoginForm={isLoginForm}
          data={data}
          setData={setData}
          handleInputs={handleInputs}
        />
        <div ref={commonRef} className={styles.common}>
          <div className={styles.social_divider}>
            <span>or</span>
          </div>
          <div
            className={styles.social_logins}
            onClick={(e) => googleLoginHandler(e)}
          >
            <div className={styles.google_auth}>
              <span className={styles.goolge_logo}></span>
              <span className={styles.google_text}>Continue with Google</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;
