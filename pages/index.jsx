import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Fragment } from "react";
import Contact from "../components/home/Contact/Contact";
import Features from "../components/home/Features/Features";
import Hero from "../components/home/Hero/Hero";
import Procedure from "../components/home/Procedure/Procedure";
import Testimonial from "../components/home/Testimonial/Testimonial";
import styles from "../styles/Home.module.css";
import Layout from "../UI/Layout";
export default function Home() {
  const [isMaintenance, setIsMaintenance] = useState(true)
  const h1Style = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
  return (
    <Fragment>
      <Head>
        <title>Build your Impressive Resume</title>
        <meta
          name="description"
          content="the best free online resume builder ,Build your brand-new resume in as little as 5 minutes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isMaintenance ? (

        <Layout>
          <main className={styles.home_main}>
            <Hero />
            <Features />
            <Procedure />
            {/* <Testimonial/> */}
            <Contact />
          </main>
        </Layout>) : (
        <div style={h1Style}>
          <h1> Site is being updated ...</h1>
          <button style={{ padding: "15px", margin: "15px", cursor: "pointer" }} onClick={() => setIsMaintenance(false)}> Anyway view beta version</button>
        </div>
      )}
    </Fragment>
  );
}
