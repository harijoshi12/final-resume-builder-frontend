import React from "react";
import Layout from "../../UI/Layout";
import styles from "../../styles/Auth.module.css";
import Auth from "../../components/auth/Auth";
import { useRouter } from "next/router";
import ForgotPassword from "../../components/auth/ForgotPassword";
import ResetPassword from "../../components/auth/ResetPassword";
// import UserProfile from "../../components/auth/UserProfile";
import FourZeroFourPage from "../404";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const AuthPageWrapper = ({ children }) => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <section className={styles.auth_page}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            Meta <span>Resume</span>
          </a>
        </Link>
      </div>
      <main className={styles.wrapper}>{children}</main>
      <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={onChange}
        size="invisible"
      />
    </section>
  );
};

const AuthPage = () => {
  const router = useRouter();
  const { authPage } = router.query;

  return (
    <>
      {authPage === "login" || authPage === "register" ? (
        <AuthPageWrapper>
          <Auth authPage={authPage} />
        </AuthPageWrapper>
      ) : authPage === "forgot-password" ? (
        <AuthPageWrapper>
          <ForgotPassword />
        </AuthPageWrapper>
      ) : authPage === "reset-password" ? (
        <AuthPageWrapper>
          <ResetPassword />
        </AuthPageWrapper>
      ) : (
        router.isReady && <FourZeroFourPage />
      )}
    </>
  );
};

export default AuthPage;
