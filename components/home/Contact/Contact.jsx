import React, {useEffect, useRef} from "react";
import styles from '../../../styles/Home.module.css'

const Contact = (props) => {
  const fnameRef =  useRef(null)
  const lnameRef =  useRef(null)
  const emailRef =  useRef(null)
  const messageRef =  useRef(null)

  const dark = `rgb(48, 48, 48)`
  // const light =  `rgb(209, 209, 209)`

  useEffect(()=>{
    const inputs = [fnameRef, lnameRef, emailRef, messageRef]
    inputs.forEach(input=>{
      const label = input.current.nextElementSibling.firstElementChild
      input.current.addEventListener('focus',()=>{
        label.style.transform = `translateY(-30px)`
        label.style.fontSize = `13px`
        label.style.color = `rgb(0,255,187)`
      })
      input.current.addEventListener('blur',()=>{
        if(input.current.value !== ""){
          label.style.transform = `translateY(-30px)`
          label.style.fontSize = `13px`
          label.style.color = `rgb(0,255,187)`
        } else{
          label.style.transform = `translateY(-50%)`
          label.style.fontSize = `16px`
          label.style.color = dark
          // label.style.color = light
        }
      })
    })
  })

  return (
    <section id="contact" className={` ${styles.sec} ${styles.contact}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.content_left}>
            <div className={styles.imgbox}></div>
          </div>

          <div className={styles.content_right}>
            <h1 className={styles.title}>Contact Us</h1>
            <form action="" autoComplete="off">

              <div className={styles.row}>
                <div className={styles.input_field}>
                  <input ref={fnameRef} type="text" name="fname" id="id_fname" />
                  <label htmlFor="id_fname"><span >First Name</span></label>
                </div>
                <div className={styles.input_field}>
                  <input ref={lnameRef} type="text" name="lname" id="id_fname" />
                  <label htmlFor="id_lname"><span >Last Name</span></label>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.input_field}>
                  <input ref={emailRef} type="email" name="email" id="id_email" />
                  <label htmlFor="id_email"><span >E-mail</span></label>
                </div>
              </div>

              <div className={styles.row}>
                <div className={`${styles.input_field} ${styles.textarea}`}>
                  <textarea ref={messageRef} name="message" id="id_message" rows="10"></textarea>
                  <label htmlFor="id_message"><span >Message</span></label>
                </div>
              </div>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact
