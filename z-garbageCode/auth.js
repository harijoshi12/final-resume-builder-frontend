import React from "react";
import Layout from "../../UI/Layout";
import styles from "../../styles/Dashboard.module.css";
import Auth from "../../components/auth/Auth";
import { useRouter } from "next/router";
import ForgotPassword from "../../components/auth/ForgotPassword";
import ResetPassword from "../../components/auth/ResetPassword";
import UserProfile from "../../components/auth/UserProfile";
import FourZeroFourPage from "../404";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const [is404, setIs404] = useState(false);
  const { authPage } = router.query;
  useEffect(() => {
    if (!router.isReady) return;
    // codes using router.query
  }, [router.isReady]);

  useEffect(() => {
    console.log("authpage= ", authPage);
    console.log("router= ", router.isReady);
    if (
      authPage !== "login" &&
      authPage !== "register" &&
      authPage !== "forgot-password" &&
      authPage !== "reset-password" &&
      authPage !== "user-profile"
    ) {
      setIs404(true);
    } else if (!router.isReady) {
      setIs404(false);
    }
  }, [authPage, router.isReady]);
  return (
    <>
      {authPage === "login" || authPage === "register" ? (
        <Auth authPage={authPage} />
      ) : authPage === "forgot-password" ? (
        <ForgotPassword />
      ) : authPage === "reset-password" ? (
        <ResetPassword />
      ) : authPage === "user-profile" ? (
        <UserProfile />
      ) : (
        router.isReady && <FourZeroFourPage />
      )}

      {/* {(authPage === "login" || authPage === "register") && (
        <Auth authPage={authPage} />
      )}
      {authPage === "forgot-password" && <ForgotPassword />}
      {authPage === "reset-password" && <ResetPassword />}
      {authPage === "user-profile" && <UserProfile />}
      {router.isReady && is404 && <FourZeroFourPage />} */}
    </>
  );
};

export default Login;
