import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import HocForm from "./HocForm";
import InputField from "./InputField";
import styles from "./styles/auth.module.css";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner'


import { baseUrl } from "../../constants/constants";
import { useState } from "react";

const Login = (props) => {
  const { emailRef, password1Ref, isLoginForm, data, handleInputs } = props;
  const { email_login, password_login } = data;
  const loginFormRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  const { handleLogin, currentUser, currentToken } = useAuth();


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!email_login || !password_login) {
        toast.error("Please fill all details", {
          position: toast.POSITION.TOP_CENTER,
          className: "custom_toast",
        });
      } else {
        setIsLoading(true)
        const { user } = await handleLogin(email_login, password_login);
        const token = await user?.getIdToken();
        const config = {
          headers: {
            // Authorization: `Bearer ${token}`,
            token,
          },
        };
        const { data } = await axios.post(
          `${baseUrl}/user/current-user`, {},
          config
        );
        toast.success("Successfully login!", {
          position: toast.POSITION.TOP_CENTER,
          className: "custom_toast",
        });
        setIsLoading(false)
        router.push("/resume-templates");
      }
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        className: "custom_toast",
      });
      setIsLoading(false)
    }
  };

  useEffect(() => {
    if (isLoginForm) {
      if (window.innerWidth <= "576") {
        loginFormRef.current.style.left = "10px";
      } else {
        loginFormRef.current.style.left = "30px";
      }
    } else {
      loginFormRef.current.style.left = "-500px";
    }
  }, [isLoginForm]);



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
      <form
        ref={loginFormRef}
        action=""
        className={styles.login_form}
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <InputField
          inputRef={emailRef}
          type="email"
          name="email_login"
          id_htmlFor="id_email_login"
          label="E-mail"
          value={email_login}
          handleInputs={handleInputs}
        ></InputField>

        <InputField
          inputRef={password1Ref}
          type="password"
          name="password_login"
          id_htmlFor="id_password_login"
          label="Password"
          value={password_login}
          handleInputs={handleInputs}
        ></InputField>

        {/* <div className={styles.etc}>
        <div className={styles.remember}>
          <input type="checkbox" name="remember" id="id_remember" />
          <label htmlFor="id_remember">Remember Me</label>
        </div>
        <Link href="/forgot-password">
          <a className={styles.forget}>Forget Password?</a>
        </Link>
      </div> */}
        <button className={styles.submit_btn} type="submit">
          Login
        </button>
      </form>
    </>
  );
};
const NewLogin = HocForm(Login);
export default NewLogin;
