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
import { useDispatch, useSelector } from "react-redux";

import { updateItem, updateResumeAsync } from "../../../features/resume/resumeSlice";
import { useAuth } from "../../../contexts/AuthContext";

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
  const { currentToken, currentUser } = useAuth();
  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    newEditFinishHandler();
    console.log("submited")
    dispatch(updateResumeAsync(currentToken))
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (formRef.current && !formRef.current.contains(e.target)) {
        newEditFinishHandler();
        dispatch(updateResumeAsync(currentToken))
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
    _id,
    onChangeHandler,
  } = props;

  console.log("name input= ", props)

  const newEditFinishHandler = () => {
    setEditName(!editName);
    if (userName === "") {
      onChangeHandler("secPersonalInfo", "personalInfo", _id, "userName", "Your Name")
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [editName, inputRef]);
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
        onChange={(e) => onChangeHandler("secPersonalInfo", "personalInfo", _id, "userName", e.target.value)} />
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
    _id,
    onChangeHandler,
  } = props;
  const newEditFinishHandler = () => {
    setEditProf(!editProf);
    if (profession === "") {
      onChangeHandler("secPersonalInfo", "personalInfo", _id, "profession", "Profession")
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [editProf, inputRef]);
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
        onChange={(e) => onChangeHandler("secPersonalInfo", "personalInfo", _id, "profession", e.target.value)}
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
    _id,
    onChangeHandler,
  } = props;
  const newEditFinishHandler = () => {
    setEditProfSummary(!editProfSummary);
    if (tagline === "") {
      onChangeHandler("secPersonalInfo", "personalInfo", _id, "tagline", "About you")
    }
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [editProfSummary, inputRef]);
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
        onChange={(e) => onChangeHandler("secPersonalInfo", "personalInfo", _id, "tagline", e.target.value)}
      />
    </CommonForm>
  );
};

export const ImageInput = (props) => {
  const { editImage, setEditImage, setItemData, onChangeHandler, inputRef } =
    props;
  const isImageUpload = true;

  console.log("image input= ", props)

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
    editFinishHandler,
    onChangeHandler,
    _id
  } = props;

  const newEditFinishHandler = () => {
    if (techSkill === "") {
      onChangeHandler("secTechSkills", "techSkills", _id, "techSkill", "Technical Skill")
    }
    editFinishHandler();
  };

  return (
    <CommonForm
      // handleDeleteItem={handleDeleteItem}
      newEditFinishHandler={newEditFinishHandler}
      secId="2"
      className="techSkillInput"
    >
      <input
        ref={inputRef}
        placeholder="Technical Skill"
        name={resumeInputCodes.TECHSKILL}
        value={techSkill}
        onChange={(e) => onChangeHandler("secTechSkills", "techSkills", _id, "techSkill", e.target.value)}
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
    _id,
  } = props;

  const newEditFinishHandler = () => {
    editFinishHandler();
    if (progLang === "") {
      onChangeHandler("secProgLangs", "progLangs", _id, "progLang", "Programming Language")
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
        onChange={(e) => onChangeHandler("secProgLangs", "progLangs", _id, "progLang", e.target.value)} />
    </CommonForm>
  );
};

export const ProgLangLevel = (props) => {
  const { progLangLevel, onChangeHandler, _id } = props;
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

  const { currentToken, currentUser } = useAuth();
  const dispatch = useDispatch()

  const changeAndUpdate = (e) => {
    onChangeHandler("secProgLangs", "progLangs", _id, "progLangLevel", e.target.value / 10)
    dispatch(updateResumeAsync(currentToken))
  }
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
          onChange={(e) => changeAndUpdate(e)}
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
    editFinishHandler,
    onChangeHandler,
    _id
  } = props;

  const newEditFinishHandler = () => {
    editFinishHandler();
    if (jobTitle === "") {
      onChangeHandler("secExperiences", "experiences", _id, "jobTitle", "Job Title")
    }
    if (jobCompany === "") {
      onChangeHandler("secExperiences", "experiences", _id, "jobCompany", "Company Name/workPlace")
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
            onChange={(e) => onChangeHandler("secExperiences", "experiences", _id, "jobStartDate", e.target.value)}
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
              onChange={(e) => onChangeHandler("secExperiences", "experiences", _id, "jobEndDate", e.target.value)}
            />
          )}

          <div className={styles.present}>
            <input
              type="checkbox"
              checked={jobPresent}
              name={resumeInputCodes.JOBPRESENT}
              id="present"
              onChange={(e) => onChangeHandler("secExperiences", "experiences", _id, "jobPresent", e.target.checked)}
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
              onChange={(e) => onChangeHandler("secExperiences", "experiences", _id, "jobTitle", e.target.value)}
            />
            <input
              value={jobCompany}
              name={resumeInputCodes.JOBCOMPANY}
              placeholder="Workplace/Company"
              onChange={(e) => onChangeHandler("secExperiences", "experiences", _id, "jobCompany", e.target.value)}
            />
          </div>
          <textarea
            value={jobDesc}
            type="text"
            name={resumeInputCodes.JOBDESC}
            placeholder="Description/Achievements"
            onChange={(e) => onChangeHandler("secExperiences", "experiences", _id, "jobDesc", e.target.value)}
          />
        </div>
      </CommonForm>
    </>
  );
};

const ContactOption = (props) => {
  const {
    type,
    fieldName,
    placeholder,
    value,
    checkVal,
    icon,
    setItems,
  } = props
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
        onChange={(e) => onChangeHandlerTc(e)} />
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

export const ContactInput = ({ setShowContactInput }) => {
  const { contactDetails } = useSelector(state => state?.resume?.data?.secContactDetails)
  const [items, setItems] = useState({ ...contactDetails[0] })
  const dispatch = useDispatch()

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
    _id
  } = items

  const { currentToken, currentUser } = useAuth();

  const onDiscardHandler = () => {
    dispatch(updateItem({
      secId: "5",
      secName: "secContactDetails",
      arrayName: "contactDetails",
      value: contactDetails[0]
    }))
    dispatch(updateResumeAsync(currentToken))
    setShowContactInput(false);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateItem({
      secId: "5",
      secName: "secContactDetails",
      arrayName: "contactDetails",
      value: { ...items }
    }))
    dispatch(updateResumeAsync(currentToken))
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
    projectTitle,
    projectTechStack,
    projectDesc,
    projectGitLink,
    videoExplanationLink,
    projectLiveDemo,
    _id,
    inputRef,
    handleDeleteItem,
    editFinishHandler,
    onChangeHandler,
  } = props;

  const newEditFinishHandler = () => {
    editFinishHandler();
    if (projectTitle === "") {
      onChangeHandler("secProjects", "projects", _id, "projectTitle", "Project Title")
    }
    if (projectTechStack === "") {
      onChangeHandler("secProjects", "projects", _id, "projectTechStack", "TechStack used")
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
          onChange={(e) => onChangeHandler("secProjects", "projects", _id, "projectTitle", e.target.value)} />
        <input
          type="text"
          placeholder="TechStack used"
          name={resumeInputCodes.PROJECTTECHSTACK}
          value={projectTechStack}
          onChange={(e) => onChangeHandler("secProjects", "projects", _id, "projectTechStack", e.target.value)}
        />
      </div>
      <div className={styles.bottom}>
        <textarea
          name={resumeInputCodes.PROJECTDESC}
          placeholder="Project Description"
          value={projectDesc}
          onChange={(e) => onChangeHandler("secProjects", "projects", _id, "projectDesc", e.target.value)}
        />
        <div className={styles.links}>
          <input
            type="text"
            placeholder="Github link"
            name={resumeInputCodes.PROJECTGITLINK}
            value={projectGitLink}
            onChange={(e) => onChangeHandler("secProjects", "projects", _id, "projectGitLink", e.target.value)}
          />
          <input
            type="text"
            placeholder="Video Explanation link"
            name={resumeInputCodes.PROJECTGITLINK}
            value={videoExplanationLink}
            onChange={(e) => onChangeHandler("secProjects", "projects", _id, "videoExplanationLink", e.target.value)}
          />
          <input
            type="text"
            placeholder="Live-Demo link"
            name={resumeInputCodes.PROJECTLIVEDEMO}
            value={projectLiveDemo}
            onChange={(e) => onChangeHandler("secProjects", "projects", _id, "projectLiveDemo", e.target.value)} />
        </div>
      </div>
    </CommonForm>
  );
};

const RadioGroup = (props) => {
  const { id, objId, value, labelVal, level, content, onChangeHandler } = props
  return (
    <div className={styles.radio_btn}>
      <input
        type="radio"
        name={resumeInputCodes.LANGUAGELEVEL}
        id={id}
        value={value}
        checked={value === level}
        onChange={(e) => { onChangeHandler("secLanguages", "languages", objId, "languageLevel", e.target.value); }}
      />
      <label htmlFor={id}>{labelVal}</label>
      <div className={styles.tooltip}>
        {content}
      </div>
    </div>
  );
};

export const LangInput = (props) => {
  const {
    language,
    languageLevel: level,
    _id,
    inputRef,
    handleDeleteItem,
    editFinishHandler,
    onChangeHandler,
  } = props;

  const newEditFinishHandler = () => {
    editFinishHandler();
    if (language === "") {
      onChangeHandler("secLanguages", "languages", _id, "language", "Language")
    };
  }
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
        value={language}
        onChange={(e) => onChangeHandler("secLanguages", "languages", _id, "language", e.target.value)}
      />
      <div className={styles.group}>
        <RadioGroup
          id={"option1"}
          onChangeHandler={onChangeHandler}
          labelVal="1/5"
          value="1"
          level={level}
          objId={_id}
          content={"Elementary Proficiency"}
        />
        <RadioGroup
          id={"option2"}
          onChangeHandler={onChangeHandler}
          labelVal="2/5"
          value="2"
          level={level}
          objId={_id}
          content={"Limited Working Proficiency"}
        />
        <RadioGroup
          id={"option3"}
          onChangeHandler={onChangeHandler}
          labelVal="3/5"
          value="3"
          level={level}
          objId={_id}
          content={"Professional Working Proficiency"}
        />
        <RadioGroup
          id={"option4"}
          onChangeHandler={onChangeHandler}
          labelVal="4/5"
          value="4"
          level={level}
          objId={_id}
          content={"Full Professional Proficiency"}
        />
        <RadioGroup
          id={"option5"}
          onChangeHandler={onChangeHandler}
          labelVal="5/5"
          value="5"
          level={level}
          objId={_id}
          content={"Native or Bilingual Proficiency"}
        />
      </div>
    </CommonForm>
  );
};
export const EducationInput = (props) => {
  const {
    inputRef,
    studyProgram,
    institution,
    cgpa,
    studyStartDate,
    studyEndDate,
    studyPresent,
    studyPlace,
    _id,
    handleDeleteItem,
    editFinishHandler,
    onChangeHandler,
  } = props;

  const newEditFinishHandler = () => {
    editFinishHandler();
    if (studyProgram === "") {
      onChangeHandler("secEducations", "educations", _id, "studyProgram", "Study Program")
    }
    if (institution === "") {
      onChangeHandler("secEducations", "educations", _id, "institution", "Institution/Place of Education")
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
          onChange={(e) => onChangeHandler("secEducations", "educations", _id, "studyProgram", e.target.value)} />
        <input
          name={resumeInputCodes.INSTITUTION}
          placeholder="Institution/Place of Education"
          value={institution}
          onChange={(e) => onChangeHandler("secEducations", "educations", _id, "institution", e.target.value)}
        />
      </div>
      <div className={styles.inputYear}>
        <input
          type="text"
          name={resumeInputCodes.STUDYSTARTDATE}
          id=""
          placeholder="yyyy"
          value={studyStartDate}
          onChange={(e) => onChangeHandler("secEducations", "educations", _id, "studyStartDate", e.target.value)}
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
            onChange={(e) => onChangeHandler("secEducations", "educations", _id, "studyEndDate", e.target.value)}
          />
        )}
        <input
          type="checkbox"
          checked={studyPresent}
          name={resumeInputCodes.STUDYPRESENT}
          id="present"
          onChange={(e) => onChangeHandler("secEducations", "educations", _id, "studyPresent", e.target.checked)}
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
          onChange={(e) => onChangeHandler("secEducations", "educations", _id, "cgpa", e.target.value)}
        />
        <input
          type="text"
          placeholder="Study Place"
          name={resumeInputCodes.STUDYPLACE}
          value={studyPlace}
          onChange={(e) => onChangeHandler("secEducations", "educations", _id, "studyPlace", e.target.value)}
        />
      </div>
    </CommonForm>
  );
};

export const InterestInput = (props) => {
  const {
    interest,
    _id,
    inputRef,
    handleDeleteItem,
    onChangeHandler,
    editFinishHandler,
  } = props;
  const newEditFinishHandler = () => {
    editFinishHandler();
    if (interest === "") {
      onChangeHandler("secInterests", "interests", _id, "interest", "Interest")
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
        onChange={(e) => onChangeHandler("secInterests", "interests", _id, "interest", e.target.value)}
      />
    </CommonForm>
  );
}