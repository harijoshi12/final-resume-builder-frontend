import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { ImUndo2 } from "react-icons/im";
import { ImRedo2 } from "react-icons/im";
import styles from './HeaderEditor.module.css'
import { BsCloudDownload, BsTriangleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';
import { getResumeAsync } from '../../features/resume/resumeSlice';

const FontSize = ({ size }) => {
  return (
    <div className={styles.dd_child_link}>
      <span className={styles.outer}>
        <span className={styles.inner}></span>
      </span>
      <span>{size}</span>
    </div>
  )
}


const HeaderEditor = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const burger = useRef();
  const dispatch = useDispatch()
  const { currentToken, currentUser, handleLogout } = useAuth();
  useEffect(() => {
    if (currentToken) {
      dispatch(getResumeAsync(currentToken))
    }
  }, [currentToken, dispatch])
  let personalInfo = [];
  let data = useSelector(state => state?.resume?.data?.secPersonalInfo?.personalInfo)
  if (data) {
    personalInfo = data
  }
  const imageSrc = data ? personalInfo[0]?.imageSrc : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

  const router = useRouter()

  const logoutHandler = (e) => {
    handleLogout();
    router.push("/");
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/"><a><span className={styles.logoicon}></span> <span className={styles.site_name}>meta resume</span></a></Link>
      </div>
      <nav className={styles.middle}>
        <div className={`${styles.navlinks} ${styles.dd_menu}`}>
          <div className={styles.dd_parent}>
            Font size
            <div className={styles.dd_arrow}><BsTriangleFill></BsTriangleFill></div>
          </div>
          <div className={styles.dd_child_wrapper}>
            <div className={`${styles.dd_child} ${styles.font_size}`}>
              <FontSize size="S" />
              <FontSize size="M" />
              <FontSize size="L" />
            </div>
          </div>
        </div>
        <div className={`${styles.navlinks} ${styles.dd_menu}`}>
          <div className={styles.dd_parent}>
            Font family
            <div className={styles.dd_arrow}><BsTriangleFill></BsTriangleFill></div>
          </div>
          <div className={styles.dd_child_wrapper}>
            <div className={styles.dd_child}>
              <div className={styles.dd_child_link}>Sanss Sarif</div>
              <div className={styles.dd_child_link}>Ubuntu</div>
              <div className={styles.dd_child_link}>Roboto</div>
              <div className={styles.dd_child_link}>Quicksand</div>
              <div className={styles.dd_child_link}>Merriweather</div>
              <div className={styles.dd_child_link}>Merriweather Sans</div>
            </div>
          </div>
        </div>
        <div className={`${styles.navlinks} ${styles.dd_menu}`}>
          <div className={styles.dd_parent}>
            Theme
            <div className={styles.dd_arrow}><BsTriangleFill></BsTriangleFill></div>
          </div>
          <div className={styles.dd_child_wrapper}>
            <div className={styles.dd_child}>
              <div className={styles.dd_child_link}>Theme 1</div>
              <div className={styles.dd_child_link}>Theme 2</div>
              <div className={styles.dd_child_link}>Theme 3</div>
            </div>
          </div>
        </div>
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