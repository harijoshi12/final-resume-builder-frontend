import React from "react";
import { useState } from "react";
import Link from "next/link";
import HocForm from "./HocForm";
import InputField from "./InputField";
import styles from "./styles/auth.module.css";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const { emailRef } = props;

  const handleInputs = (e) => {
    setEmail(e.target.value);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("forget password");
  };
  return (
    <div className={styles.form_container}>
      <div>Forgot Password</div>
      <p>Please enter your email address</p>
      <form
        action=""
        className={styles.forget_password_form}
        onSubmit={(e) => onSubmitHandler(e)}
        style={{ position: "block" }}
      >
        <InputField
          inputRef={emailRef}
          type="email"
          name="email_forget_password"
          id_htmlFor="id_forget_password"
          label="E-mail"
          value={email}
          handleInputs={handleInputs}
        ></InputField>
        <div>
          <Link href="/login">
            <a className={styles.forget}>Back to Login</a>
          </Link>
        </div>
        <button className={styles.submit_btn} type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
};

const NewForgotPassword = HocForm(ForgotPassword);

export default NewForgotPassword;
