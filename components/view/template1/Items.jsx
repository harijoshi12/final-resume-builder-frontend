import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../../contexts/AuthContext";
import { AiFillDelete, AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { MdDone, MdEmail } from "react-icons/md";
import { CgSmartphone, CgWebsite } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FaQuora } from "react-icons/fa";

import styles from "./styles/Template1.module.css";


export const PersonalInfo = ({ data }) => {
  const { userName, profession, imageSrc, tagline } = data
  return (
    <>
      <h1 className={styles.resumeTitle}>"Are We A Good Fit?"</h1>
      <div className={styles.imgboxOuter}>
        <div className={styles.imgboxInner}>
          <div className={styles.imgbox_wrapper}>
            <div
              className={styles.imgbox} style={{ backgroundImage: `url(${imageSrc})` }}
            ></div>
          </div>
          <div className={styles.myinfo}>

            <h1 className={styles.myName}>
              {userName}
            </h1>

            <h2
              className={styles.profession}
            >
              {profession}
            </h2>

          </div>
        </div>
      </div>
      <h2 className={styles.tagline}>
        "{tagline}"
      </h2>
    </>
  );
};

const ContactItem = ({ icon, info, type }) => {
  return (
    <a rel="noopener noreferrer" target="_blank" href={type === "phone" ? `tel:${info}` : type === "email" ? `mailto:${info}` : type === "link" ? `https://www.${info}/` : null}>
      <span >{icon}</span>
      <span >{info}</span>
    </a>
  );
};

export const ContactDetails = (props) => {
  const { currentUser } = useAuth();
  const {
    setShowContactInput,
    email,
    emailChecked,
    phone,
    phoneChecked,
    address,
    addressChecked,
    website,
    websiteChecked,
    linkedin,
    linkedinChecked,
    github,
    githubChecked,
    stackoverflow,
    stackoverflowChecked,
    quora,
    quoraChecked,
    medium,
    mediumChecked,
  } = props

  return (
    <>
      {email && emailChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={email}
          icon={<MdEmail />}
          type="email"
        />
      )}

      {phone && phoneChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={phone}
          icon={<CgSmartphone />}
          type="phone"
        />
      )}

      {address && addressChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={address}
          icon={<IoLocationSharp />}
          type="address"
        />
      )}

      {website && websiteChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={website}
          icon={<CgWebsite />}
          type="link"
        />
      )}

      {linkedin && linkedinChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={linkedin}
          icon={<BsLinkedin />}
          type="link"
        />
      )}

      {github && githubChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={github}
          icon={<AiFillGithub />}
          type="link"
        />
      )}

      {stackoverflow && stackoverflowChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={stackoverflow}
          icon={<BsStackOverflow />}
          type="link"
        />
      )}

      {quora && quoraChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={quora}
          icon={<FaQuora />}
          type="link"
        />
      )}

      {medium && mediumChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={email}
          icon={<AiFillMediumCircle />}
          type="link"
        />
      )}
    </>
  );
};

export const TechnicalSkill = (props) => {
  const { techSkill } = props;
  return (
    <span className={styles.technicalSkill}>
      {techSkill}
    </span>
  );
};

export const ProgLang = (props) => {
  const {
    progLang,
    progLangLevel: level,
  } = props;
  return (
    <div className={styles.progLang}>
      <span className={styles.title}>{progLang}</span>
      <span className={styles.outer}>
        <span className={styles.inner} style={{ width: `${level * 10}%` }} ></span>
      </span>
    </div>
  );
};

export const Language = (props) => {
  const { language, languageLevel: level } = props
  return (
    <div className={styles.lang}>
      <span className={styles.title} >
        {language}
      </span>
      <span className={styles.level}>
        {level === 1 ? (
          "Elementary Proficiency"
        ) : level === 2 ? (
          "Limited Working Proficiency"
        ) : level === 3 ? (
          "Professional Working Proficiency"
        ) : level === 4 ? (
          "Full Professional Proficiency"
        ) : (
          "Native or Bilingual Proficiency"
        )}
      </span>
    </div>
  );
};

export const Education = (props) => {
  const {
    studyProgram,
    institution,
    studyStartDate,
    studyEndDate,
    studyPresent,
    studyPlace,
    cgpa
  } = props

  let time = studyStartDate || studyEndDate;

  return (
    <div className={styles.edu}>
      <div className={styles.r1}>
        <span className={styles.title} >
          {studyProgram}
        </span>{" "}
        <span> | </span>
        <span className={styles.institute}>
          {institution}
        </span>
      </div>
      <div className={styles.r2}>
        {cgpa ? (
          <span className={styles.cgpa}>
            {cgpa}
          </span>
        ) : null}
        {cgpa ? "|" : null}
        {time ? (
          <span className={styles.time}>
            {studyStartDate}-{studyPresent ? "Present" : studyEndDate}
          </span>
        ) : null}
        {time ? "|" : null}
        {studyPlace ? (
          <span className={styles.place}>
            {studyPlace}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export const Project = (props) => {
  const {
    projectTitle,
    projectTechStack,
    projectDesc,
    projectGitLink,
    videoExplanationLink,
    projectLiveDemo,
  } = props
  return (
    <div className={styles.projectItem}>
      <h2 className={styles.title}>
        <span className={styles.p_title}>{projectTitle}</span>
        <span className={styles.p_divider}>|</span>
        <span className={styles.p_techStack}>{projectTechStack}</span>
      </h2>
      <div className={styles.desc} >
        <p>{projectDesc}</p>
        <div className={styles.link}>
          {projectGitLink && <a rel="noopener noreferrer" target="_blank" className={styles.git_link} href={projectGitLink}>
            Github link
          </a>}
          {videoExplanationLink && <a rel="noopener noreferrer" target="_blank" className={styles.git_link} href={videoExplanationLink}>
            Video explanation
          </a>}
          {projectLiveDemo && <a rel="noopener noreferrer" target="_blank" className={styles.liveDemo_link} href={projectLiveDemo}>
            Live-Demo link
          </a>}
        </div>
      </div>
    </div>
  );
}

export const MyJourney = (props) => {
  const {
    jobStartDate,
    jobEndDate,
    jobPresent,
    jobTitle,
    jobCompany,
    jobDesc,
  } = props;
  return (
    <div className={styles.myJourneyItem}>
      <span className={styles.time} >
        {jobStartDate}-{jobPresent ? "Present" : jobEndDate}
      </span>
      <h1 className={styles.title} >
        <span className={styles.bullet_point}></span>
        <span className={styles.job_title}>{jobTitle}</span>{" "}
        <span className={styles.divider}>|</span>
        <span className={styles.company}>{jobCompany}</span>
      </h1>
      <p className={styles.desc} >
        {jobDesc}
      </p>
    </div>
  );
}

export const Interest = (props) => {
  const { interest, } = props;
  return (
    <span className={styles.interest} >
      {interest}
    </span>
  );
};