import { resumeInputCodes } from "../../constants/constants";

const secTitle = {
  [resumeInputCodes.SECTITLE]: "",
};

const contactDetails = {
  [resumeInputCodes.EMAIL]: "",
  [resumeInputCodes.EMAILCHECKED]: false,
  [resumeInputCodes.PHONE]: "",
  [resumeInputCodes.PHONECHECKED]: false,
  [resumeInputCodes.ADDRESS]: "",
  [resumeInputCodes.ADDRESSCHECKED]: false,
  [resumeInputCodes.WEBSITE]: "",
  [resumeInputCodes.WEBSITECHECKED]: false,
  [resumeInputCodes.LINKEDIN]: "",
  [resumeInputCodes.LINKEDINCHECKED]: false,
  [resumeInputCodes.GITHUB]: "",
  [resumeInputCodes.GITHUBCHECKED]: false,
  [resumeInputCodes.STACKOVERFLOW]: "",
  [resumeInputCodes.STACKOVERFLOWCHECKED]: false,
  [resumeInputCodes.QUORA]: "",
  [resumeInputCodes.QUORACHECKED]: false,
  [resumeInputCodes.MEDIUM]: "",
  [resumeInputCodes.MEDIUMCHECKED]: false,
};

const personalInfo = {
  [resumeInputCodes.NAME]: "",
  [resumeInputCodes.PROFESSION]: "",
  [resumeInputCodes.IMAGESRC]: "",
  [resumeInputCodes.TAGLINE]: "",
};

const techskill = {
  [resumeInputCodes.TECHSKILL]: "",
};

const progLang = {
  [resumeInputCodes.PROGLANG]: "",
  [resumeInputCodes.PROGLANGLEVEL]: null,
};

const experience = {
  [resumeInputCodes.JOBSTARTDATE]: "",
  [resumeInputCodes.JOBENDDATE]: "",
  [resumeInputCodes.JOBPRESENT]: null,
  [resumeInputCodes.JOBTITLE]: "",
  [resumeInputCodes.JOBCOMPANY]: "",
  [resumeInputCodes.JOBDESC]: "",
};

const project = {
  [resumeInputCodes.PROJECTTITLE]: "",
  [resumeInputCodes.PROJECTTECHSTACK]: "",
  [resumeInputCodes.PROJECTDESC]: "",
  [resumeInputCodes.PROJECTGITLINK]: "",
  [resumeInputCodes.PROJECTLIVEDEMO]: "",
};

const language = {
  [resumeInputCodes.LANGUAGE]: "",
  [resumeInputCodes.LANGUAGELEVEL]: null,
};

const education = {
  [resumeInputCodes.STUDYPROGRAM]: "",
  [resumeInputCodes.INSTITUTION]: "",
  [resumeInputCodes.CGPA]: "",
  [resumeInputCodes.STUDYSTARTDATE]: "",
  [resumeInputCodes.STUDYENDDATE]: "",
  [resumeInputCodes.STUDYPRESENT]: null,
  [resumeInputCodes.STUDYPLACE]: "",
};

const interest = {
  [resumeInputCodes.INTEREST]: "",
};

const initialState = {
  templateId: "",
  secTitles: [secTitle],
  personalInfo: [personalInfo],
  contactDetails: [contactDetails],
  techskills: [techskill],
  progLangs: [progLang],
  experiences: [experience],
  projects: [project],
  languages: [language],
  educations: [education],
  interests: [interest],
};


export default initialState;
