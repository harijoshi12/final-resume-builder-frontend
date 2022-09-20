import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { contactFormCodes } from "../../../constants/constants";
import styles from "../../../styles/Home.module.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    contactEmail: "",
    message: "",
  });

  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const dark = `rgb(48, 48, 48)`;
  // const light =  `rgb(209, 209, 209)`

  useEffect(() => {
    const inputs = [fnameRef, lnameRef, emailRef, messageRef];
    inputs.forEach((input) => {
      const label = input.current.nextElementSibling.firstElementChild;
      input.current.addEventListener("focus", () => {
        label.style.transform = `translateY(-30px)`;
        label.style.fontSize = `13px`;
        label.style.color = `orangered`;
      });
      input.current.addEventListener("blur", () => {
        if (input.current.value !== "") {
          label.style.transform = `translateY(-30px)`;
          label.style.fontSize = `13px`;
          label.style.color = `orangered`;
        } else {
          label.style.transform = `translateY(-50%)`;
          label.style.fontSize = `16px`;
          label.style.color = dark;
          // label.style.color = light
        }
      });
    });
  });

  const handleInputs = (e) => {
    setContactData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("contct dta = ", contactData);
    try {
      if (
        !contactData.firstName ||
        !contactData.lastName ||
        !contactData.contactEmail ||
        !contactData.message
      ) {
        toast.error("Please fill all details", {
          position: toast.POSITION.TOP_CENTER,
          className: "custom_toast",
        });
      } else {
        const { data } = await axios.post(
          "http://192.168.1.42:5000/api/contact-form",
          {
            ...contactData,
          }
        );
        console.log(data);
        toast.success("Message sent successfully. We will contact you soon", {
          position: toast.POSITION.TOP_CENTER,
          className: "custom_toast",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        className: "custom_toast",
      });
    }
  };

  return (
    <section id="contact" className={` ${styles.sec} ${styles.contact}`}>
      <ToastContainer position="top-center" />
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
                  <input
                    ref={fnameRef}
                    type="text"
                    name={contactFormCodes.FIRSTNAME}
                    value={contactData.firstName}
                    onChange={handleInputs}
                    id="id_fname"
                  />
                  <label htmlFor="id_fname">
                    <span>First Name</span>
                  </label>
                </div>
                <div className={styles.input_field}>
                  <input
                    ref={lnameRef}
                    type="text"
                    name={contactFormCodes.LASTNAME}
                    value={contactData.lastName}
                    onChange={handleInputs}
                    id="id_fname"
                  />
                  <label htmlFor="id_lname">
                    <span>Last Name</span>
                  </label>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.input_field}>
                  <input
                    ref={emailRef}
                    type="email"
                    name={contactFormCodes.CONTACTEMAIL}
                    value={contactData.contactEmail}
                    onChange={handleInputs}
                    id="id_email"
                  />
                  <label htmlFor="id_email">
                    <span>E-mail</span>
                  </label>
                </div>
              </div>

              <div className={styles.row}>
                <div className={`${styles.input_field} ${styles.textarea}`}>
                  <textarea
                    ref={messageRef}
                    name={contactFormCodes.MESSAGE}
                    value={contactData.message}
                    onChange={handleInputs}
                    id="id_message"
                    rows="10"
                  ></textarea>
                  <label htmlFor="id_message">
                    <span>Message</span>
                  </label>
                </div>
              </div>
              <button type="submit" onClick={handleSubmit}>
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
