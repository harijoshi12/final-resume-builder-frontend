import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { MdDone, MdEmail } from "react-icons/md";
import { CgSmartphone, CgWebsite } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FaQuora } from "react-icons/fa";
import styles from "../Resume.module.css";

import {
  EducationInput,
  ImageInput,
  InterestInput,
  LangInput,
  MyJourneyInput,
  NameInput,
  ProfessionInput,
  ProfSummaryInput,
  ProgLangInput,
  ProgLangLevel,
  ProjectInput,
  TechSkillInput,
} from "./ItemsInput";
import { useAuth } from "../../../../contexts/AuthContext";

const SecItem = (props) => {
  const { secId, itemData, secData, setSecData, addNewItem, setPlusEl } = props;
  const [edit, setEdit] = useState(false);

  const [newItemData, setNewItemData] = useState(itemData);

  console.log("id=", itemData)

  useEffect(() => {
    if (itemData.isLast) {
      if (addNewItem) {
        setEdit(true);
      } else {
        setEdit(false);
      }
    }
  }, [addNewItem]);

  useEffect(() => {
    setPlusEl(edit);
  }, [edit]);

  const inputRef = useRef(null);

  const handleClickItem = () => {
    setEdit(!edit);
    setPlusEl(true);
  };

  const onChangeHandler = (e) => {
    setNewItemData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const editFinishHandler = () => {
    setPlusEl(false);
    setEdit(!edit);
  };

  const handleDeleteItem = (e) => {
    setSecData(
      secData.filter((d) => {
        return d.id != itemData.id;
      })
    );
    setPlusEl(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  let childComponent;
  if (secId === "1") {
    childComponent = (
      <PersonalInfo
        {...newItemData}
        setItemData={setNewItemData}
        onChangeHandler={onChangeHandler}
        inputRef={inputRef}
      />
    );
  }

  if (secId === "2") {
    edit
      ? (childComponent = (
        <TechSkillInput
          {...newItemData}
          setItemData={setNewItemData}
          onChangeHandler={onChangeHandler}
          handleDeleteItem={handleDeleteItem}
          editFinishHandler={editFinishHandler}
          inputRef={inputRef}
        />
      ))
      : (childComponent = (
        <TechnicalSkill handleClickItem={handleClickItem} {...newItemData} />
      ));
  }

  if (secId === "3") {
    childComponent = (
      <ProgLang
        {...newItemData}
        setItemData={setNewItemData}
        handleClickItem={handleClickItem}
        onChangeHandler={onChangeHandler}
        handleDeleteItem={handleDeleteItem}
        editFinishHandler={editFinishHandler}
        inputRef={inputRef}
        edit={edit}
      />
    );
  }

  if (secId === "4") {
    edit
      ? (childComponent = (
        <MyJourneyInput
          {...newItemData}
          setItemData={setNewItemData}
          onChangeHandler={onChangeHandler}
          handleDeleteItem={handleDeleteItem}
          editFinishHandler={editFinishHandler}
          inputRef={inputRef}
        />
      ))
      : (childComponent = (
        <MyJourney handleClickItem={handleClickItem} {...newItemData} />
      ));
  }

  if (secId === "5") {
    return;
  }

  if (secId === "6") {
    edit
      ? (childComponent = (
        <ProjectInput
          {...newItemData}
          setItemData={setNewItemData}
          onChangeHandler={onChangeHandler}
          handleDeleteItem={handleDeleteItem}
          editFinishHandler={editFinishHandler}
          inputRef={inputRef}
        />
      ))
      : (childComponent = (
        <Project handleClickItem={handleClickItem} {...newItemData} />
      ));
  }

  if (secId === "7") {
    edit
      ? (childComponent = (
        <LangInput
          {...newItemData}
          setItemData={setNewItemData}
          onChangeHandler={onChangeHandler}
          handleDeleteItem={handleDeleteItem}
          editFinishHandler={editFinishHandler}
          inputRef={inputRef}
        />
      ))
      : (childComponent = (
        <Lang handleClickItem={handleClickItem} {...newItemData} />
      ));
  }

  if (secId === "8") {
    edit
      ? (childComponent = (
        <EducationInput
          {...newItemData}
          setItemData={setNewItemData}
          onChangeHandler={onChangeHandler}
          handleDeleteItem={handleDeleteItem}
          editFinishHandler={editFinishHandler}
          inputRef={inputRef}
        />
      ))
      : (childComponent = (
        <Edu handleClickItem={handleClickItem} {...newItemData} />
      ));
  }

  if (secId === "9") {
    edit
      ? (childComponent = (
        <InterestInput
          {...newItemData}
          setItemData={setNewItemData}
          onChangeHandler={onChangeHandler}
          handleDeleteItem={handleDeleteItem}
          editFinishHandler={editFinishHandler}
          inputRef={inputRef}
        />
      ))
      : (childComponent = (
        <Interest handleClickItem={handleClickItem} {...newItemData} />
      ));
  }
  return <>{childComponent}</>;
};

export default SecItem;

const PersonalInfo = (props) => {
  const [editName, setEditName] = useState(false);
  const [editProf, setEditProf] = useState(false);
  const [editProfSummary, setEditProfSummary] = useState(false);
  const [editImage, setEditImage] = useState(false);
  const isInfo = true;
  const {
    resumeTitle,
    userName,
    profession,
    imagesrc,
    tagline,
    inputRef,
    setItemData,
    onChangeHandler,
  } = props;

  return (
    <>
      <h1 className={styles.resumeTitle}>{resumeTitle}</h1>
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
              className={styles.imgbox}
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
  } = props;

  return (
    <>
      {email && emailChecked && (
        <ContactItem
          setShowContactInput={setShowContactInput}
          // info={email}
          info={currentUser?.email}
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

const TechnicalSkill = (props) => {
  const { handleClickItem, techSkill } = props;
  // console.log(props)
  return (
    <span className={styles.technicalSkill} onClick={handleClickItem}>
      {techSkill}
    </span>
  );
};

const ProgLang = (props) => {
  const {
    progLang,
    setItemData,
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
          setItemData={setItemData}
          progLang={progLang}
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
        setItemData={setItemData}
        inputRef={inputRef}
        onChangeHandler={onChangeHandler}
        handleDeleteItem={handleDeleteItem}
        editFinishHandler={editFinishHandler}
        progLangLevel={progLangLevel}
      />
    </div>
  );
};

const Lang = ({ language, languageLevel, handleClickItem }) => {
  return (
    <div className={styles.lang}>
      <span className={styles.title} onClick={handleClickItem}>
        {language}
      </span>
      <span className={styles.level} onClick={handleClickItem}>
        {languageLevel}
      </span>
    </div>
  );
};

const Edu = ({
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
    <div className={styles.edu}>
      <div className={styles.r1}>
        <span className={styles.title} onClick={handleClickItem}>
          {studyProgram}
        </span>{" "}
        <span> | </span>
        <span className={styles.institute} onClick={handleClickItem}>
          {institution}
        </span>
      </div>
      <div className={styles.r2}>
        {cgpa ? (
          <span className={styles.cgpa} onClick={handleClickItem}>
            {cgpa}
          </span>
        ) : null}
        {cgpa ? "|" : null}
        {time ? (
          <span className={styles.time} onClick={handleClickItem}>
            {studyStartDate}-{studyPresent ? "Present" : studyEndDate}
          </span>
        ) : null}
        {time ? "|" : null}
        {studyPlace ? (
          <span className={styles.place} onClick={handleClickItem}>
            {studyPlace}
          </span>
        ) : null}
      </div>
    </div>
  );
};

function Project({
  projectTitle,
  projectTechStack,
  projectDesc,
  projectGitLink,
  projectLiveDemo,
  handleClickItem,
}) {
  return (
    <div className={styles.projectItem}>
      <h2 className={styles.title}>
        <span onClick={handleClickItem}>{projectTitle}</span>
        <span>|</span>
        <span onClick={handleClickItem}>{projectTechStack}</span>
      </h2>
      <div className={styles.desc} onClick={handleClickItem}>
        <p>{projectDesc}</p>
        <div className={styles.link}>
          <a className={styles.git_link} href={projectGitLink}>
            Github link
          </a>
          <a className={styles.liveDemo_link} href={projectLiveDemo}>
            Live-Demo link
          </a>
        </div>
      </div>
    </div>
  );
}

function MyJourney(props) {
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
    <div className={styles.myJourneyItem}>
      <span className={styles.time} onClick={handleClickItem}>
        {jobStartDate}-{jobPresent ? "Present" : jobEndDate}
      </span>
      <h1 className={styles.title} onClick={handleClickItem}>
        <span></span>
        <span onClick={handleClickItem}>{jobTitle}</span>{" "}
        <span className={styles.divider}>|</span>
        <span onClick={handleClickItem}>{jobCompany}</span>
      </h1>
      <p className={styles.desc} onClick={handleClickItem}>
        {jobDesc}
      </p>
    </div>
  );
}

const Interest = (props) => {
  const { interest, handleClickItem } = props;
  return (
    <span className={styles.interest} onClick={handleClickItem}>
      {interest}
    </span>
  );
};
