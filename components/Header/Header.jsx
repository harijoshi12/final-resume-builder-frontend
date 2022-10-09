import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { BsTriangleFill } from "react-icons/bs";
function Header({ setIsMousein }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const progress = useRef();
  const nav = useRef();
  const link1 = useRef();
  const link2 = useRef();
  const link3 = useRef();
  const link4 = useRef();
  const link5 = useRef();

  const burger = useRef();

  const router = useRouter();

  // useEffect(()=>{
  //   console.log(link1)
  // },[])
  // cursor link animaition
  // useEffect(() => {
  //   const navlinks = [link1, link2, link3, link4]
  //   navlinks.forEach(link =>{
  //     console.log(link)
  //     link.current.addEventListener('mouseleave', ()=>{
  //       link.current.classList.remove('hovered-link')
  //       setIsMousein(false)
  //     })
  //     link.current.addEventListener('mouseover', ()=>{
  //       setIsMousein(true)
  //         link.current.classList.add('hovered-link')
  //     })
  //   })
  // },[ setIsMousein])

  // Responsive Navabar
  // useEffect(()=>{
  //   const navlinks = [ link1, link2, link3, link4]

  //   // initial navlinks opacity 0
  //   let siteWidth = window.innerWidth
  //   window.addEventListener("resize", ()=>{
  //     siteWidth = window.innerWidth
  //     if(siteWidth <= 992){
  //       // nav links onclick reset toggle
  //       navlinks.forEach((link, index)=>{
  //         link.current.style.opacity = 0
  //         link.current.addEventListener('click', ()=>{
  //           setToggleMenu(false)
  //           navlinks.forEach((link, index)=>{
  //             link.current.style.animation = `navlinkFadeClose 0.3s ease forwards ${(navlinks.length - index) / 12}s`;
  //           })
  //         })
  //       })
  //       nav.current.style.transition = `transform 0.3s linear`
  //     } else{
  //       nav.current.style.transition = ``
  //       navlinks.forEach((link, index)=>{
  //         link.current.style.opacity = 1
  //         link.current.addEventListener('click', ()=>{
  //           navlinks.forEach((link, index)=>{
  //             link.current.style.animation = ``;
  //           })
  //         })
  //       })
  //     }
  //   })
  //   if(siteWidth <= 992){
  //     // nav links onclick reset toggle
  //     navlinks.forEach((link, index)=>{
  //       link.current.style.opacity = 0
  //       link.current.addEventListener('click', ()=>{
  //         setToggleMenu(false)
  //         navlinks.forEach((link, index)=>{
  //           link.current.style.animation = `navlinkFadeClose 0.3s ease forwards ${(navlinks.length - index) / 12}s`;
  //         })
  //       })
  //     })
  //     nav.current.style.transition = `transform 0.3s linear`
  //   } else{
  //     nav.current.style.transition = ``
  //   }

  //   // navlinks animation
  //   burger.current.addEventListener('click',()=>{
  //     navlinks.forEach((link, index) =>{
  //       if(!nav.current.classList.contains("toggle")){
  //         link.current.style.opacity = 0
  //         link.current.style.animation = `navlinkFadeOpen 0.3s ease forwards ${(index + 1) / 8 + 0.1}s`;
  //       } else{
  //         link.current.style.opacity = 1
  //         link.current.style.animation = `navlinkFadeClose 0.3s ease forwards ${(navlinks.length - index) / 15}s`;
  //       }
  //     })
  //   })

  //   // nav animation with window resize
  //   window.addEventListener("resize", ()=>{
  //     siteWidth = window.innerWidth
  //     if(siteWidth >= 992){
  //       setToggleMenu(false)
  //       nav.current.style.transition = ``
  //       navlinks.forEach((link, index) => {
  //         link.current.style.animation = ``;
  //         link.current.style.opacity = 1;
  //       });
  //     } else{
  //       nav.current.style.transition = `transform 0.3s linear`
  //       navlinks.forEach((link, index) => {
  //         link.current.style.opacity = 0;
  //       });
  //     }
  //   })
  // },[])

  // Progress Bar
  useEffect(() => {
    let body = document.body;
    let html = document.documentElement;
    let winHeight = window.innerHeight;
    let value;
    function onResizeProgress() {
      let a = body.scrollHeight;
      let b = body.offsetHeight;
      let d = html.scrollHeight; // includes margin
      let e = html.offsetHeight; // includes margin
      var docHeight = Math.max(a, b, d, e);
      winHeight = window.innerHeight;
      let scrollHeight = window.scrollY;
      let scrollableHeight = docHeight - winHeight;
      value = Math.floor((scrollHeight / scrollableHeight) * 100);
      progress.current.style.width = value + "%";
    }
    function onScrollProgress() {
      // console.log(progress)
      let a = body.scrollHeight;
      let b = body.offsetHeight;
      let d = html.scrollHeight; // includes margin
      let e = html.offsetHeight; // includes margin
      winHeight = window.innerHeight;
      var docHeight = Math.max(a, b, d, e);
      let scrollHeight = window.scrollY;
      let scrollableHeight = docHeight - winHeight;
      value = Math.floor((scrollHeight / scrollableHeight) * 100);
      progress.current.style.width = value + "%";
    }
    const progressBar = () => {
      window.addEventListener("resize", onResizeProgress);
      window.addEventListener("scroll", onScrollProgress);
    };
    progressBar();
    return () => {
      window.removeEventListener("resize", onResizeProgress);
      window.removeEventListener("scroll", onScrollProgress);
    };
  }, []);

  const { currentUser, handleLogout } = useAuth();
  const logoutHandler = (e) => {
    handleLogout();
    router.push("/");
  };

  // console.log("cu= ", currentUser)
  let personalInfo = [];
  let data = useSelector(state => state?.resume?.data?.secPersonalInfo?.personalInfo)
  if (data) {
    personalInfo = data
  }
  const imageSrc = data ? personalInfo[0]?.imageSrc : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

  return (
    <>
      <div className={toggleMenu ? "nav-overlay toggle" : "nav-overlay"}></div>
      <div className="pseudo_header"></div>
      <header className={toggleMenu ? "toggle" : ""}>
        <div className="progress_wrapper">
          <div ref={progress} className="progress"></div>
        </div>
        <div className="nav_wrapper">
          <div className="logo">
            <Link href="/"><a>Meta <span>Resume</span></a></Link>
          </div>
          <nav ref={nav} className={toggleMenu ? "toggle" : ""}>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : ""} ref={link1}>Home</a>
            </Link>
            <Link href="/resume-templates">
              <a className={router.pathname === "/resume-templates" ? "active" : ""} ref={link2}>Templates</a>
            </Link>
            {currentUser && (
              <Link href="/dashboard">
                <a className={router.pathname === "/dashboard" ? "active" : ""} ref={link3}>Dashboard</a>
              </Link>
            )}
            {/* <Link href="/view-resume">
              <a className={router.pathname === "/view-resume" ? "active" : ""} ref={link5}>View Resume</a>
            </Link> */}
            {!currentUser &&
              <Link href="/login">
                <a className={router.pathname === "/login" ? "active login_register" : "login_register"}>Login / Register</a>
              </Link>
            }
          </nav>
          {currentUser ? (
            <div className="dd_menu">
              <div className="dd_parent">
                <Link href="/view-resume">
                  <div className="imgbox" style={{ backgroundImage: `url(${imageSrc})` }}></div>
                </Link>
                <div className="dd_arrow"><BsTriangleFill></BsTriangleFill></div>
              </div>
              <div className="dd_child_wrapper">
                <div className="dd_child">
                  <Link href="#"><a className="dd_child_link">Account Page</a></Link>
                  <div className="dd_child_link" onClick={(e) => logoutHandler(e)}>Logout</div>
                </div>
              </div>
            </div>
          ) : null}
          <div
            ref={burger}
            className={toggleMenu ? "burger toggle" : "burger"}
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
