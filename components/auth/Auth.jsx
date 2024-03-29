import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import axios from "axios";
import NewLogin from "./Login";
import NewRegister from "./Register";
import styles from "./styles/auth.module.css";
import { ThreeDots } from 'react-loader-spinner'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import { baseUrl } from "../../constants/constants";

const Auth = ({ authPage }) => {
  const [data, setData] = useState({
    email_login: "",
    password_login: "",
    email_register: "",
    password_register1: "",
    password_register2: "",
  });
  const [isLoading, setIsLoading] = useState(false)

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formHeight, setFormHeight] = useState("410px");
  const [top, setTop] = useState("");
  const commonRef = useRef(null);
  const sliderRef = useRef(null);
  const paddingRef = useRef(null);

  const { handleGoogleLogin, currentUser } = useAuth();


  // useEffect(() => {
  //   if (currentUser) {
  //     router.push("/dashboard");
  //   }
  // }, [currentUser]);

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
      commonRef.current.style.transition = "all 0.1s ease-in-out";
      paddingRef.current.style.transition = "all 0.1s ease-in-out";
      setFormHeight("470px");
      if (window.innerWidth <= "576") {
        setTop("420px");
      } else {
        setTop("435px");
      }
    } else {
      sliderRef.current.style.left = "0%";
      commonRef.current.style.transition = "all 0.6s ease-in-out";
      paddingRef.current.style.transition = "all 0.6s ease-in-out";
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
    setIsLoginForm(true);
    router.push("/login");
  };
  const showRegister = () => {
    setIsLoginForm(false);
    router.push("/register");
  };

  const googleLoginHandler = async () => {
    try {
      setIsLoading(true)
      const { user } = await handleGoogleLogin();
      const token = await user?.getIdToken();
      const config = {
        headers: {
          // Authorization: `Bearer ${token}`,
          token,
        },
      };
      const { data } = await axios.post(
        `${baseUrl}/user/current-user`,
        {},
        config
      );
      setIsLoading(false)
      router.push("/resume-templates");

      toast.success("Successfully login!", {
        position: toast.POSITION.TOP_CENTER,
        className: "custom_toast",
      });
    } catch (error) {
      setIsLoading(false)
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        className: "custom_toast",
      });
    }
  };

  return (
    <>
      {isLoading && <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255,255,.5)",
        zIndex: "1000"
      }}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>}
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
    </>
  );
};

export default Auth;

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
