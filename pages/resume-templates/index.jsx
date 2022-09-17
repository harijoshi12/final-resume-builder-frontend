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
                  <div className={styles.template}>
                    Template 1 <button>Build your CV</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template}>
                    Template 2<button>Build your CV</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template}>
                    Template 3<button>Build your CV</button>
                    <span className="comming-soon">Comming Soon</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template}>
                    Template 4<button>Build your CV</button>
                    <span className="comming-soon">Comming Soon</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template}>
                    Template 5<button>Build your CV</button>
                    <span className="comming-soon">Comming Soon</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template}>
                    Template 6<button>Build your CV</button>
                    <span className="comming-soon">Comming Soon</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.template}>
                    Template 7<button>Build your CV</button>
                    <span className="comming-soon">Comming Soon</span>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className={styles.wish}>
                <h1>We wish you all the best.</h1>
                <h3>
                  " If you can deram it, you can do it. Best wishes for yout
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
