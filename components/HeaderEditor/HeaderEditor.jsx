import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { ImUndo2 } from "react-icons/im";
import { ImRedo2 } from "react-icons/im";
import styles from './HeaderEditor.module.css'
import { BsCloudDownload, BsTriangleFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';

const HeaderEditor = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const burger = useRef();
  let personalInfo = [];
  let data = useSelector(state => state?.resume?.data?.secPersonalInfo?.personalInfo)
  if (data) {
    personalInfo = data
  }
  const imageSrc = data ? personalInfo[0]?.imageSrc : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/"><a><span className={styles.logoicon}></span> <span className={styles.site_name}>metaresume</span></a></Link>
      </div>
      <nav className={styles.middle}>
        <div className={styles.navlinks}>Font Size</div>
        <div className={styles.navlinks}>Font Family</div>
        <div className={styles.navlinks}>Theme</div>
        <div className={`${styles.navlinks} ${styles.undo}`}><ImUndo2 /></div>
        <div className={`${styles.navlinks} ${styles.redo}`}><ImRedo2 /></div>
        <div className={`${styles.navlinks} ${styles.downloadBtn}`} onClick={() => router.push("/view-resume/1")}><BsCloudDownload /><span>Download</span></div>
      </nav>
      <nav className={styles.last}>
        <div className={styles.myDocs}>My Documents</div>

        <div className={styles.dd_menu}>
          <div className={styles.dd_parent}>
            <Link href="#">
              <div className={styles.imgbox} style={{ backgroundImage: `url(${imageSrc})` }}></div>
            </Link>
            <div className={styles.dd_arrow}><BsTriangleFill></BsTriangleFill></div>
          </div>
          <div className={styles.dd_child_wrapper}>
            <div className={styles.dd_child}>
              <Link href="#"><a className={styles.dd_child_link}>Account Page</a></Link>
              <div className={styles.dd_child_link} onClick={(e) => logoutHandler(e)}>Logout</div>
            </div>
          </div>
        </div>

        <div
          ref={burger}
          className={toggleMenu ? `${styles.burger} ${styles.toggle}` : `${styles.burger}`}
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <div className={`${styles.line} ${styles.line1}`}></div>
          <div className={`${styles.line} ${styles.line2}`}></div>
          <div className={`${styles.line} ${styles.line3}`}></div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderEditor