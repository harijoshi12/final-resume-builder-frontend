import React from "react";
import Layout from "../../UI/Layout";
import styles from "../../styles/Dashboard.module.css";
import Auth from "../../components/auth/Auth";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { authPage } = router.query;
  return (
    <>
      <Auth authPage={authPage} />
    </>
  );
};

export default Login;
