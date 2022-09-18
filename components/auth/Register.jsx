import React, { useRef, useEffect, useState } from "react";
import HocForm from "./HocForm";
import InputField from "./InputField";
import styles from "./styles/auth.module.css";

import { toast } from "react-toastify";

import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import axios from "axios";

const Register = (props) => {
  const {
    emailRef,
    password1Ref,
    password2Ref,
    isLoginForm,
    data,
    setData,
    handleInputs,
  } = props;
  const { email_register, password_register1, password_register2 } = data;
  const [loading, setLoading] = useState(false);
  const [varified, setVarified] = useState(false);
  const registerFormRef = useRef(null);

  const { handleRegister, currentUser, handleLogout } = useAuth();

  const router = useRouter();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!email_register || !password_register1 || !password_register2) {
        toast.error("Please fill all details", {
          position: toast.POSITION.TOP_CENTER,
          className: "custom_toast",
        });
      } else {
        if (password_register1 !== password_register2) {
          toast.error("Password and confirm password don't match", {
            position: toast.POSITION.TOP_CENTER,
            className: "custom_toast",
          });
        } else {
          if (password_register1.length < 6) {
            toast.error("Password should be atleat 6 characters", {
              position: toast.POSITION.TOP_CENTER,
              className: "custom_toast",
            });
            console.log("less");
          } else {
            const { user } = await handleRegister(
              email_register,
              password_register1
            );
            const token = await user?.getIdToken();
            console.log("user= ", user);
            console.log("token= ", token);
            const config = {
              headers: {
                // Authorization: `Bearer ${token}`,
                token,
              },
            };
            const { data } = await axios.post(
              "http://localhost:5000/api/user/current-user",
              { password: "hari123ram" },
              config
            );
            console.log("data= ", data);
            setData((prev) => ({ ...prev, email_login: user.email }));
            handleLogout();
            setLoading(false);
            router.push("/login");
            toast.success("Successfully registered!", {
              position: toast.POSITION.TOP_CENTER,
              className: "custom_toast",
            });
          }
        }
      }
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        className: "custom_toast",
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoginForm) {
      registerFormRef.current.style.left = "550px";
    } else {
      if (window.innerWidth <= "576") {
        registerFormRef.current.style.left = "10px";
      } else {
        registerFormRef.current.style.left = "30px";
      }
    }
  }, [isLoginForm]);

  return (
    <form
      ref={registerFormRef}
      action=""
      className={styles.register_form}
      onSubmit={(e) => onSubmitHandler(e)}
    >
      <InputField
        inputRef={emailRef}
        type="email"
        name="email_register"
        id_htmlFor="id_email_register"
        label="E-mail"
        value={email_register}
        handleInputs={handleInputs}
      ></InputField>
      <InputField
        inputRef={password1Ref}
        type="password"
        name="password_register1"
        id_htmlFor="id_password_register1"
        label="Password"
        value={password_register1}
        handleInputs={handleInputs}
      ></InputField>
      <InputField
        inputRef={password2Ref}
        type="password"
        name="password_register2"
        id_htmlFor="id_password_register2"
        label="Comfirm Password"
        value={password_register2}
        handleInputs={handleInputs}
      ></InputField>
      <button className={styles.submit_btn} type="submit">
        Register
      </button>
    </form>
  );
};

const NewRegister = HocForm(Register);

export default NewRegister;
