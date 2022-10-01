import React from "react";
import Layout from "../../UI/Layout";
import styles from "../../styles/SelectTemplates.module.css";
import { useState } from "react";

// Swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { getOrCreateResumeAsync } from "../../features/resume/resumeSlice";

const CustomButton = ({ isdisabled, templateId }) => {
  const router = useRouter();
  const { currentToken, currentUser } = useAuth();
  const dispatch = useDispatch()
  const btnClickHanlder = () => {
    if (currentUser) {
      dispatch(getOrCreateResumeAsync(currentToken))
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  };
  return (
    <button disabled={isdisabled} onClick={btnClickHanlder}>
      Build your CV
    </button>
  );
};

const ResumeTemplates = () => {
  return (
    <Layout>
      <main className={styles.templatePage}>
        <section id="contact" className={` ${styles.sec} ${styles.templates}`}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.top}>
                <h1>Templates to win recruiters over</h1>
                <h3>
                  Wide selection of designs. Carefully optimised for clarity and
                  impact. One click layouts - no formatting required.
                </h3>
              </div>
              <Swiper
                loop={true}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={"auto"}
                centeredSlides={true}
                updateOnWindowResize={true}
                navigation={true}
                freeMode={true}
                slideToClickedSlide={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className={styles.template_wrapper}>
                    <div
                      className={`${styles.template1} ${styles.template}`}
                    ></div>
                    <CustomButton isdisabled={false} templateId={"1"}>
                      Build your CV
                    </CustomButton>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template_wrapper}>
                    <div
                      className={`${styles.template2} ${styles.template}`}
                    ></div>
                    <CustomButton isdisabled={false} templateId={"2"}>
                      Build your CV
                    </CustomButton>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template_wrapper}>
                    <div
                      className={`${styles.template3} ${styles.template}`}
                    ></div>
                    <CustomButton isdisabled={true} templateId={"3"}>
                      Build your CV
                    </CustomButton>
                    <span className="comming-soon">Comming Soon</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template_wrapper}>
                    <div
                      className={`${styles.template4} ${styles.template}`}
                    ></div>
                    <CustomButton isdisabled={true} templateId={"4"}>
                      Build your CV
                    </CustomButton>
                    <span className="comming-soon">Comming Soon</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template_wrapper}>
                    <div
                      className={`${styles.template5} ${styles.template}`}
                    ></div>
                    <CustomButton isdisabled={true} templateId={"5"}>
                      Build your CV
                    </CustomButton>
                    <span className="comming-soon">Comming Soon</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template_wrapper}>
                    <div
                      className={`${styles.template6} ${styles.template}`}
                    ></div>
                    <CustomButton isdisabled={true} templateId={"6"}>
                      Build your CV
                    </CustomButton>
                    <span className="comming-soon">Comming Soon</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template_wrapper}>
                    <div
                      className={`${styles.template7} ${styles.template}`}
                    ></div>
                    <CustomButton isdisabled={true} templateId={"7"}>
                      Build your CV
                    </CustomButton>
                    <span className="comming-soon">Comming Soon</span>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className={styles.wish}>
                <h1>We wish you all the best.</h1>
                <h3>
                  " If you can deram it, you can do it. Best wishes for your
                  bright future "
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ResumeTemplates;
