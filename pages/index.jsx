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
      <Layout>
        <main className={styles.home_main}>
          <Hero />
          <Features />
          <Procedure />
          {/* <Testimonial/> */}
          <Contact />
        </main>
      </Layout>
    </Fragment>
  );
}
