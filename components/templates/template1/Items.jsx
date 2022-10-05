import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../../contexts/AuthContext";
import { ImageInput, NameInput, ProfessionInput, ProfSummaryInput, ProgLangInput, ProgLangLevel } from "./Forms";

import { AiFillDelete, AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { MdDone, MdEmail } from "react-icons/md";
import { CgSmartphone, CgWebsite } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FaQuora } from "react-icons/fa";

import styles from "./styles/Template1.module.css";

export const PersonalInfo = ({ data }) => {
  const [editName, setEditName] = useState(false);
  const [editProf, setEditProf] = useState(false);
  const [editProfSummary, setEditProfSummary] = useState(false);
  const [editImage, setEditImage] = useState(false);
  const isInfo = true;


  const { userName, profession, imageSrc, tagline } = data

  return (
    <>
      <h1 className={styles.resumeTitle}>"Are We A Good Fit?"</h1>
      <div className={styles.imgboxOuter}>
        <div className={styles.imgboxInner}>
          <div className={styles.imgbox_wrapper}>
            {editImage ? (
              <ImageInput
                editImage={editImage}
                setEditImage={setEditImage}
                inputRef={inputRef}
                setItemData={setItemData}
                onChangeHandler={onChangeHandler}
              />
            ) : null}
            <div
              className={styles.imgbox} style={{ background: `url${imageSrc}` }}
              onClick={() => setEditImage(true)}
            ></div>
          </div>
          <div className={styles.myinfo}>
            {editName ? (
              <NameInput
                editName={editName}
                setEditName={setEditName}
                isInfo={isInfo}
                inputRef={inputRef}
                userName={userName}
                setItemData={setItemData}
                onChangeHandler={onChangeHandler}
              />
            ) : (
              <h1 className={styles.myName} onClick={() => setEditName(true)}>
                {userName}
              </h1>
            )}

            {editProf ? (
              <ProfessionInput
                editProf={editProf}
                setEditProf={setEditProf}
                isInfo={isInfo}
                inputRef={inputRef}
                profession={profession}
                setItemData={setItemData}
                onChangeHandler={onChangeHandler}
              />
            ) : (
              <h2
                className={styles.profession}
                onClick={() => setEditProf(true)}
              >
                {profession}
              </h2>
            )}
          </div>
        </div>
      </div>
      {editProfSummary ? (
        <ProfSummaryInput
          editProfSummary={editProfSummary}
          setEditProfSummary={setEditProfSummary}
          isInfo={isInfo}
          inputRef={inputRef}
          tagline={tagline}
          setItemData={setItemData}
          onChangeHandler={onChangeHandler}
        />
      ) : (
        <h2 className={styles.tagline} onClick={() => setEditProfSummary(true)}>
          "{tagline}"
        </h2>
      )}
    </>
  );
};

const ContactItem = ({ setShowContactInput, icon, info }) => {
  return (
    <a rel="noopener noreferrer" target="_blank">
      <span onClick={() => setShowContactInput(true)}>{icon}</span>
      <span onClick={() => setShowContactInput(true)}>{info}</span>
    </a>
  );
};

export const ContactDetails = ({ setShowContactInput }) => {
  const { contactDetails } = useSelector(state => state?.resume?.data?.secContactDetails)
  const {
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
  } = contactDetails[0]

  return (
    <>
      {email && emailChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={email}
          icon={<MdEmail />}
        />
      )}

      {phone && phoneChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={phone}
          icon={<CgSmartphone />}
        />
      )}

      {address && addressChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={address}
          icon={<IoLocationSharp />}
        />
      )}

      {website && websiteChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={website}
          icon={<CgWebsite />}
        />
      )}

      {linkedin && linkedinChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={linkedin}
          icon={<BsLinkedin />}
        />
      )}

      {github && githubChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={github}
          icon={<AiFillGithub />}
        />
      )}

      {stackoverflow && stackoverflowChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={stackoverflow}
          icon={<BsStackOverflow />}
        />
      )}

      {quora && quoraChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={quora}
          icon={<FaQuora />}
        />
      )}

      {medium && mediumChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          info={email}
          icon={<AiFillMediumCircle />}
        />
      )}
    </>
  );
};

export const TechnicalSkill = (props) => {
  const { handleClickItem, techSkill } = props;
  return (
    <span className={styles.technicalSkill} onClick={handleClickItem} >
      {techSkill}
    </span>
  );
};

export const ProgLang = (props) => {
  const {
    progLang,
    progLangLevel,
    inputRef,
    handleClickItem,
    editFinishHandler,
    handleDeleteItem,
    onChangeHandler,
    edit,
  } = props;
  return (
    <div className={styles.progLang}>
      {edit ? (
        <ProgLangInput
          {...props}
          inputRef={inputRef}
          onChangeHandler={onChangeHandler}
          handleDeleteItem={handleDeleteItem}
          editFinishHandler={editFinishHandler}
        />
      ) : (
        <span className={styles.title} onClick={handleClickItem}>
          {progLang}
        </span>
      )}
      <ProgLangLevel
        inputRef={inputRef}
        onChangeHandler={onChangeHandler}
        handleDeleteItem={handleDeleteItem}
        editFinishHandler={editFinishHandler}
        {...props}
      />
    </div>
  );
};

export const Language = ({ language, languageLevel: level, handleClickItem }) => {
  return (
    <div className={styles.lang} onClick={handleClickItem}>
      <span className={styles.title} >
        {language}
      </span>
      <span className={styles.level} >
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

export const Education = ({
  studyProgram,
  institution,
  studyStartDate,
  studyEndDate,
  studyPresent,
  studyPlace,
  cgpa,
  handleClickItem,
}) => {
  let time = studyStartDate || studyEndDate;

  return (
    <div className={styles.edu} onClick={handleClickItem}>
      <div className={styles.r1}>
        <span className={styles.title} >
          {studyProgram}
        </span>{" "}
        <span> | </span>
        <span className={styles.institute} >
          {institution}
        </span>
      </div>
      <div className={styles.r2}>
        {cgpa ? (
          <span className={styles.cgpa} >
            {cgpa}
          </span>
        ) : null}
        {cgpa ? "|" : null}
        {time ? (
          <span className={styles.time} >
            {studyStartDate}-{studyPresent ? "Present" : studyEndDate}
          </span>
        ) : null}
        {time ? "|" : null}
        {studyPlace ? (
          <span className={styles.place} >
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
    projectLiveDemo,
    videoExplanationLink,
    handleClickItem,
  } = props
  return (
    <div className={styles.projectItem} onClick={handleClickItem}>
      <h2 className={styles.title}>
        <span >{projectTitle}</span>
        <span>|</span>
        <span >{projectTechStack}</span>
      </h2>
      <div className={styles.desc} >
        <p>{projectDesc}</p>
        <div className={styles.link}>
          {projectGitLink && <a className={styles.git_link} href={projectGitLink}>
            Github link
          </a>}
          {videoExplanationLink && <a className={styles.git_link} href={videoExplanationLink}>
            Video explanation
          </a>}
          {projectLiveDemo && <a className={styles.liveDemo_link} href={projectLiveDemo}>
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
    handleClickItem,
  } = props;
  return (
    <div className={styles.myJourneyItem} onClick={handleClickItem}>
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
  const { interest, handleClickItem } = props;
  return (
    <span className={styles.interest} onClick={handleClickItem}>
      {interest}
    </span>
  );
};