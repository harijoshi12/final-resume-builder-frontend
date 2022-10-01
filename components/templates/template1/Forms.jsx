import React, { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { MdDone, MdEmail } from "react-icons/md";
import { CgSmartphone, CgWebsite } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import { BsLinkedin, BsStackOverflow } from "react-icons/bs";
import { FaQuora } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";

import styles from "./styles/Template1.module.css";
import { resumeInputCodes } from "../../../constants/constants";

export const CommonForm = (props) => {
  const {
    secId,
    isInfo,
    isImageUpload,
    newEditFinishHandler,
    handleDeleteItem,
    className,
    children,
  } = props;
  const formRef = useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    newEditFinishHandler();
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (formRef.current && !formRef.current.contains(e.target)) {
        newEditFinishHandler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  });

  return (
    <form
      ref={formRef}
      className={styles[className]}
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
    >
      <div className={styles.input_fields}>{children}</div>
      <div className={styles.icons}>
        {!isImageUpload ? (
          <span
            className={`${styles.icon} ${styles.save}`}
            onClick={(e) => onSubmitHandler(e)}
          >
            <MdDone />
          </span>
        ) : null}
        {!isInfo ? (
          <span
            className={`${styles.icon} ${styles.delete}`}
            onClick={(e) => handleDeleteItem(e)}
          >
            <AiFillDelete />
          </span>
        ) : null}
      </div>
    </form>
  );
};

export const NameInput = (props) => {
  const {
    inputRef,
    editName,
    setEditName,
    isInfo,
    userName,
    setItemData,
    onChangeHandler,
  } = props;

  const newEditFinishHandler = () => {
    setEditName(!editName);
    if (userName === "") {
      setItemData((prev) => ({ ...prev, userName: "Your Name" }));
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [editName]);
  return (
    <CommonForm
      isInfo={isInfo}
      newEditFinishHandler={newEditFinishHandler}
      className="nameInput"
    >
      <input
        ref={inputRef}
        value={userName}
        name={resumeInputCodes.NAME}
        placeholder="Your Name"
        onChange={(e) => onChangeHandler(e)}
      />
    </CommonForm>
  );
};

export const ProfessionInput = (props) => {
  const {
    inputRef,
    isInfo,
    editProf,
    setEditProf,
    profession,
    setItemData,
    onChangeHandler,
  } = props;
  const newEditFinishHandler = () => {
    setEditProf(!editProf);
    if (profession === "") {
      setItemData((prev) => ({ ...prev, profession: "Profession" }));
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [editProf]);
  return (
    <CommonForm
      isInfo={isInfo}
      newEditFinishHandler={newEditFinishHandler}
      className="professionInput"
    >
      <input
        ref={inputRef}
        name={resumeInputCodes.PROFESSION}
        placeholder="Profession"
        value={profession}
        onChange={(e) => onChangeHandler(e)}
      />
    </CommonForm>
  );
};

export const ProfSummaryInput = (props) => {
  const {
    inputRef,
    editProfSummary,
    setEditProfSummary,
    isInfo,
    tagline,
    setItemData,
    onChangeHandler,
  } = props;
  const newEditFinishHandler = () => {
    setEditProfSummary(!editProfSummary);
    if (tagline === "") {
      setItemData((prev) => ({ ...prev, tagline: "About you" }));
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [editProfSummary]);
  return (
    <CommonForm
      isInfo={isInfo}
      newEditFinishHandler={newEditFinishHandler}
      className="profSummaryInput"
    >
      <textarea
        ref={inputRef}
        name={resumeInputCodes.TAGLINE}
        placeholder="About You"
        value={tagline}
        onChange={(e) => onChangeHandler(e)}
      />
    </CommonForm>
  );
};

export const ImageInput = (props) => {
  const { editImage, setEditImage, setItemData, onChangeHandler, inputRef } =
    props;
  const isImageUpload = true;
  const newEditFinishHandler = () => {
    setEditImage(!editImage);
  };
  return (
    <CommonForm
      isImageUpload={isImageUpload}
      newEditFinishHandler={newEditFinishHandler}
      className="imgInput"
    >
      <label htmlFor="imgUpload">
        <span className={styles.upload}>
          <IoMdCloudUpload />
        </span>
        Upload Photo
      </label>
      <input
        type="file"
        id="imgUpload"
        ref={inputRef}
        name={resumeInputCodes.IMAGESRC}
        onChange={(e) => onChangeHandler(e)}
      />
    </CommonForm>
  );
};

export const TechSkillInput = (props) => {
  const {
    techSkill,
    inputRef,
    setItemData,
    handleDeleteItem,
    onChangeHandler,
    editFinishHandler,
  } = props;
  const newEditFinishHandler = () => {
    editFinishHandler();
    if (techSkill === "") {
      setItemData((prev) => ({ ...prev, techSkill: "Technical Sikll" }));
    }
  };
  return (
    <CommonForm
      handleDeleteItem={handleDeleteItem}
      newEditFinishHandler={newEditFinishHandler}
      secId="2"
      className="techSkillInput"
    >
      <input
        ref={inputRef}
        placeholder="Technical Skill"
        name={resumeInputCodes.TECHSKILL}
        value={techSkill}
        onChange={(e) => onChangeHandler(e)}
      />
    </CommonForm>
  );
};

export const ProgLangInput = (props) => {
  const {
    progLang,
    inputRef,
    handleDeleteItem,
    editFinishHandler,
    onChangeHandler,
    setItemData,
  } = props;

  const newEditFinishHandler = () => {
    editFinishHandler();
    if (progLang === "") {
      setItemData((prev) => ({ ...prev, progLang: "Programming Language" }));
    }
  };
  return (
    <CommonForm
      newEditFinishHandler={newEditFinishHandler}
      handleDeleteItem={handleDeleteItem}
      secId="3"
      className="progLangInput"
    >
      <input
        value={progLang}
        placeholder="Programming Language"
        ref={inputRef}
        name={resumeInputCodes.PROGLANG}
        onChange={(e) => onChangeHandler(e)}
      />
    </CommonForm>
  );
};

export const ProgLangLevel = (props) => {
  const { progLangLevel, setItemData } = props;
  const level = progLangLevel;
  const innerRef = useRef(null);
  const outerRef = useRef(null);
  const thumbRef = useRef(null);
  const inputRef = useRef(null);
  const handleSlide = (e) => {
    let width = inputRef.current.clientWidth;
    let value = e.target.value;
    innerRef.current.style.width = `${value}%`;
    thumbRef.current.style.left = `${(value / 100) * width - 10}px`;
  };

  const onChangeHandler = (e) => {
    setItemData((prev) => ({ ...prev, [e.target.name]: e.target.value / 10 }));
  };
  return (
    <span ref={outerRef} className={`${styles.outer} ${styles.progLangLevel}`}>
      <form action="">
        <span
          ref={innerRef}
          className={styles.inner}
          style={{ width: `${level * 10}%` }}
        ></span>
        <span
          ref={thumbRef}
          className={styles.thumb}
          style={{ left: `calc(${level * 10}% - 15px)` }}
        ></span>
        <input
          value={level * 10}
          onInput={(e) => handleSlide(e)}
          ref={inputRef}
          type="range"
          step={"5"}
          name={resumeInputCodes.PROGLANGLEVEL}
          onChange={(e) => onChangeHandler(e)}
          id=""
        />
      </form>
    </span>
  );
};

export const MyJourneyInput = (props) => {
  const {
    inputRef,
    jobStartDate,
    jobEndDate,
    jobPresent,
    jobTitle,
    jobCompany,
    jobDesc,
    handleDeleteItem,
    setItemData,
    editFinishHandler,
    onChangeHandler,
  } = props;

  const onChangeHandlerTc = (e) => {
    setItemData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };
  const newEditFinishHandler = () => {
    editFinishHandler();
    if (jobTitle === "") {
      setItemData((prev) => ({ ...prev, jobTitle: "Job Title" }));
    }
    if (jobCompany === "") {
      setItemData((prev) => ({
        ...prev,
        jobCompany: "Company Name/workPlace",
      }));
    }
  };

  return (
    <>
      <CommonForm
        newEditFinishHandler={newEditFinishHandler}
        handleDeleteItem={handleDeleteItem}
        secId="4"
        className="myJourneyInput"
      >
        <div className={styles.inputYear}>
          <input
            value={jobStartDate}
            type="text"
            name={resumeInputCodes.JOBSTARTDATE}
            id=""
            placeholder="yyyy"
            onChange={(e) => onChangeHandler(e)}
          />
          <span>to</span>
          {jobPresent ? (
            <span className={styles.present}>Present</span>
          ) : (
            <input
              value={jobEndDate}
              type="text"
              id=""
              name={resumeInputCodes.JOBENDDATE}
              placeholder="yyyy"
              onChange={(e) => onChangeHandler(e)}
            />
          )}

          <div className={styles.present}>
            <input
              type="checkbox"
              checked={jobPresent}
              name={resumeInputCodes.JOBPRESENT}
              id="present"
              onChange={(e) => onChangeHandlerTc(e)}
            />
            <label htmlFor="present">present</label>
          </div>
        </div>
        <div className={styles.main_details}>
          <div className={styles.top}>
            <input
              value={jobTitle}
              ref={inputRef}
              name={resumeInputCodes.JOBTITLE}
              placeholder="Title/Position"
              onChange={(e) => onChangeHandler(e)}
            />
            <input
              value={jobCompany}
              name={resumeInputCodes.JOBCOMPANY}
              placeholder="Workplace/Company"
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <textarea
            value={jobDesc}
            type="text"
            name={resumeInputCodes.JOBDESC}
            placeholder="Description/Achievements"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
      </CommonForm>
    </>
  );
};

const ContactOption = ({
  type,
  fieldName,
  placeholder,
  value,
  checkVal,
  icon,
  setItems,
}) => {
  const onChangeHandler = (e) => {
    setItems((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onChangeHandlerTc = (e) => {
    if (fieldName === "email") {
      setItems((prev) => ({ ...prev, [e.target.name]: true }));
    } else {
      setItems((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
    }
  };
  return (
    <div className={styles.contact_option}>
      <input
        checked={checkVal}
        type="checkbox"
        name={`${fieldName}Checked`}
        id=""
        onChange={(e) => onChangeHandlerTc(e)}
      />
      <span>{icon}</span>
      <input
        className={styles.input}
        value={value}
        type={type}
        placeholder={placeholder}
        name={fieldName}
        id={`id_${fieldName}`}
        required={fieldName === resumeInputCodes.EMAIL || checkVal}
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
};

export const ContactInput = (props) => {
  const { newSecData, setShowContactInput, setNewSecData } = props;
  const [items, setItems] = useState({ ...newSecData });

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
  } = items;

  const onDiscardHandler = () => {
    setNewSecData({ ...newSecData });
    setShowContactInput(false);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setNewSecData((prev) => ({ ...items }));
    setShowContactInput(false);
  };

  return (
    <form className={styles.contactInput} onSubmit={(e) => onSubmitHandler(e)}>
      <div className={styles.save_discard}>
        <button
          type="button"
          className={styles.discard}
          onClick={() => onDiscardHandler()}
        >
          discard
        </button>
        <button type="submit" className={styles.save}>
          save
        </button>
      </div>
      <div className={styles.contactOptions}>
        <ContactOption
          type={"email"}
          value={email}
          checkVal={emailChecked}
          placeholder="E-mail"
          fieldName={resumeInputCodes.EMAIL}
          icon={<MdEmail />}
          setItems={setItems}
        />

        <ContactOption
          type={"number"}
          value={phone}
          checkVal={phoneChecked}
          placeholder="Phone"
          fieldName={resumeInputCodes.PHONE}
          icon={<CgSmartphone />}
          setItems={setItems}
        />

        <ContactOption
          type={"text"}
          value={address}
          checkVal={addressChecked}
          placeholder="Address"
          fieldName={resumeInputCodes.ADDRESS}
          icon={<IoLocationSharp />}
          setItems={setItems}
        />

        <ContactOption
          type={"text"}
          value={website}
          checkVal={websiteChecked}
          placeholder="Website"
          fieldName={resumeInputCodes.WEBSITE}
          icon={<CgWebsite />}
          setItems={setItems}
        />

        <ContactOption
          type={"text"}
          value={linkedin}
          checkVal={linkedinChecked}
          placeholder="Linkedin"
          fieldName={resumeInputCodes.LINKEDIN}
          icon={<BsLinkedin />}
          setItems={setItems}
        />

        <ContactOption
          type={"text"}
          value={github}
          checkVal={githubChecked}
          placeholder="Github"
          fieldName={resumeInputCodes.GITHUB}
          icon={<AiFillGithub />}
          setItems={setItems}
        />

        <ContactOption
          type={"text"}
          value={stackoverflow}
          checkVal={stackoverflowChecked}
          placeholder="StackOverflow"
          fieldName={resumeInputCodes.STACKOVERFLOW}
          icon={<BsStackOverflow />}
          setItems={setItems}
        />

        <ContactOption
          type={"text"}
          value={quora}
          checkVal={quoraChecked}
          placeholder="Quora"
          fieldName={resumeInputCodes.QUORA}
          icon={<FaQuora />}
          setItems={setItems}
        />

        <ContactOption
          type={"text"}
          value={medium}
          checkVal={mediumChecked}
          placeholder="Medium"
          fieldName={resumeInputCodes.MEDIUM}
          icon={<AiFillMediumCircle />}
          setItems={setItems}
        />
      </div>
    </form>
  );
};

export const ProjectInput = (props) => {
  const {
    inputRef,
    projectTitle,
    projectTechStack,
    projectDesc,
    projectGitLink,
    projectLiveDemo,
    handleDeleteItem,
    setItemData,
    editFinishHandler,
    onChangeHandler,
  } = props;

  const newEditFinishHandler = () => {
    editFinishHandler();
    if (projectTitle === "") {
      setItemData((prev) => ({ ...prev, projectTitle: "Project Title" }));
    }
    if (projectTechStack === "") {
      setItemData((prev) => ({ ...prev, projectTechStack: "TechStack used" }));
    }
  };

  return (
    <CommonForm
      newEditFinishHandler={newEditFinishHandler}
      handleDeleteItem={handleDeleteItem}
      secId="6"
      className="projectInput"
    >
      <div className={styles.top}>
        <input
          type="text"
          placeholder="Project Title"
          ref={inputRef}
          name={resumeInputCodes.PROJECTTITLE}
          value={projectTitle}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="text"
          placeholder="TechStack used"
          name={resumeInputCodes.PROJECTTECHSTACK}
          value={projectTechStack}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div className={styles.bottom}>
        <textarea
          name={resumeInputCodes.PROJECTDESC}
          placeholder="Project Description"
          value={projectDesc}
          onChange={(e) => onChangeHandler(e)}
        />
        <div className={styles.links}>
          <input
            type="text"
            placeholder="Github link"
            name={resumeInputCodes.PROJECTGITLINK}
            value={projectGitLink}
            onChange={(e) => onChangeHandler(e)}
          />
          <input
            type="text"
            placeholder="Live-Demo link"
            name={resumeInputCodes.PROJECTLIVEDEMO}
            value={projectLiveDemo}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
      </div>
    </CommonForm>
  );
};

const RadioGroup = ({ id, value, onChangeHandler }) => {
  return (
    <>
      <input
        type="radio"
        name={resumeInputCodes.LANGUAGELEVEL}
        id={id}
        value={value}
        onChange={(e) => onChangeHandler(e)}
      />
      <label htmlFor={id}>{value}</label>
    </>
  );
};

export const LangInput = (props) => {
  const {
    Language,
    LanguageLevel,
    inputRef,
    handleDeleteItem,
    editFinishHandler,
    onChangeHandler,
    setItemData,
  } = props;
  const newEditFinishHandler = () => {
    editFinishHandler();
    if (progLang === "") {
      setItemData((prev) => ({ ...prev, progLang: "Programming Language" }));
    }
  };
  return (
    <CommonForm
      newEditFinishHandler={newEditFinishHandler}
      handleDeleteItem={handleDeleteItem}
      secId="7"
      className="langInput"
    >
      <input
        ref={inputRef}
        type="text"
        name={resumeInputCodes.LANGUAGE}
        placeholder="Language"
        value={Language}
        onChange={(e) => onChangeHandler(e)}
      />
      <div className={styles.group}>
        <RadioGroup
          id={"option1"}
          onChangeHandler={onChangeHandler}
          value="1/5"
        />
        <RadioGroup
          id={"option2"}
          onChangeHandler={onChangeHandler}
          value="2/5"
        />
        <RadioGroup
          id={"option3"}
          onChangeHandler={onChangeHandler}
          value="3/5"
        />
        <RadioGroup
          id={"option4"}
          onChangeHandler={onChangeHandler}
          value="4/5"
        />
        <RadioGroup
          id={"option5"}
          onChangeHandler={onChangeHandler}
          value="5/5"
        />
      </div>
    </CommonForm>
  );
};

export const EducationInput = (props) => {
  const {
    inputRef,
    setItemData,
    studyProgram,
    institution,
    cgpa,
    studyStartDate,
    studyEndDate,
    studyPresent,
    studyPlace,
    handleDeleteItem,
    editFinishHandler,
    onChangeHandler,
  } = props;

  const onChangeHandlerTc = (e) => {
    setItemData((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };
  const newEditFinishHandler = () => {
    editFinishHandler();
    if (studyProgram === "") {
      setItemData((prev) => ({ ...prev, studyProgram: "Study Program" }));
    }
    if (institution === "") {
      setItemData((prev) => ({
        ...prev,
        institution: "Institution/Place of Education",
      }));
    }
  };

  return (
    <CommonForm
      secId="8"
      newEditFinishHandler={newEditFinishHandler}
      className="educationInput"
      handleDeleteItem={handleDeleteItem}
    >
      <div className={styles.top}>
        <input
          ref={inputRef}
          name={resumeInputCodes.STUDYPROGRAM}
          placeholder="Study Program"
          value={studyProgram}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          name={resumeInputCodes.INSTITUTION}
          placeholder="Institution/Place of Education"
          value={institution}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div className={styles.inputYear}>
        <input
          type="text"
          name={resumeInputCodes.STUDYSTARTDATE}
          id=""
          placeholder="yyyy"
          value={studyStartDate}
          onChange={(e) => onChangeHandler(e)}
        />
        <span>to</span>
        {studyPresent ? (
          <span className={styles.present}>Present</span>
        ) : (
          <input
            type="text"
            id=""
            name={resumeInputCodes.STUDYENDDATE}
            placeholder="yyyy"
            value={studyEndDate}
            onChange={(e) => onChangeHandler(e)}
          />
        )}
        <input
          type="checkbox"
          checked={studyPresent}
          name={resumeInputCodes.STUDYPRESENT}
          id="present"
          onChange={(e) => onChangeHandlerTc(e)}
        />
        <label htmlFor="present">Present</label>
      </div>
      <div className={styles.bottom}>
        <input
          type="text"
          name={resumeInputCodes.CGPA}
          id=""
          placeholder="CGPA/Percentage"
          value={cgpa}
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="text"
          placeholder="Study Place"
          name={resumeInputCodes.STUDYPLACE}
          value={studyPlace}
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
    </CommonForm>
  );
};

export const InterestInput = (props) => {
  const {
    interest,
    inputRef,
    setItemData,
    handleDeleteItem,
    onChangeHandler,
    editFinishHandler,
  } = props;

  const newEditFinishHandler = () => {
    editFinishHandler();
    if (interest === "") {
      setItemData((prev) => ({ ...prev, interest: "interest" }));
    }
  };

  return (
    <CommonForm
      newEditFinishHandler={newEditFinishHandler}
      handleDeleteItem={handleDeleteItem}
      secId="9"
      className="interestInput"
    >
      <input
        placeholder="Interest"
        ref={inputRef}
        name={resumeInputCodes.INTEREST}
        value={interest}
        onChange={(e) => onChangeHandler(e)}
      />
    </CommonForm>
  );
};