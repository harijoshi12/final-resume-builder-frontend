import { resumeInputCodes } from "../../../constants/constants";


const secTitles = [
    {
      [resumeInputCodes.SECTITLE]: "Personal Info",
      id: "1"
    },
    {
      [resumeInputCodes.SECTITLE]: "Technical Skills",
      id: "2"
    },
    {
      [resumeInputCodes.SECTITLE]: "Programming Languages",
      id: "3"
    },
    {
      [resumeInputCodes.SECTITLE]: "My Journey",
      id: "4"
    },
    {
      [resumeInputCodes.SECTITLE]: "Contact Details",
      id: "5"
    },
    {
      [resumeInputCodes.SECTITLE]: "Projects",
      id: "6"
    },
    {
      [resumeInputCodes.SECTITLE]: "Languages",
      id: "7"
    },
    {
      [resumeInputCodes.SECTITLE]: "Education",
      id: "8"
    },
    {
      [resumeInputCodes.SECTITLE]: "Intrests",
      id: "9"
    },
  ];
  
  const contactDetails = {
    [resumeInputCodes.EMAIL]: "myemail@email.com",
    [resumeInputCodes.EMAILCHECKED]: true,
    [resumeInputCodes.PHONE]: "9876543210",
    [resumeInputCodes.PHONECHECKED]: true,
    [resumeInputCodes.ADDRESS]: "Dehradun, India",
  
    [resumeInputCodes.ADDRESSCHECKED]: true,
    [resumeInputCodes.WEBSITE]: "harijoshi.tech",
  
    [resumeInputCodes.WEBSITECHECKED]: true,
    [resumeInputCodes.LINKEDIN]: "linkedin.com/in/harijoshi123",
    [resumeInputCodes.LINKEDINCHECKED]: true,
    [resumeInputCodes.GITHUB]: "github.com/harijoshi12",
    [resumeInputCodes.GITHUBCHECKED]: true,
    [resumeInputCodes.STACKOVERFLOW]: "",
    [resumeInputCodes.STACKOVERFLOWCHECKED]: false,
    [resumeInputCodes.QUORA]: "",
    [resumeInputCodes.QUORACHECKED]: false,
    [resumeInputCodes.MEDIUM]: "",
    [resumeInputCodes.MEDIUMCHECKED]: false,
  };
  
  const personalInfo = [
    {
      [resumeInputCodes.NAME]: "My Name",
      [resumeInputCodes.PROFESSION]: "Full Stack Developer",
      [resumeInputCodes.IMAGESRC]:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      [resumeInputCodes.TAGLINE]:
        "Seeking a challenging position in an organization where I can use my talents and skills to grow and expand an organization as well as myself.",
    },
  ];
  
  const techskills = [
    {
      id: 5,
      [resumeInputCodes.TECHSKILL]: "Bootstrap",
    },
    {
      id: 6,
      [resumeInputCodes.TECHSKILL]: "TailWind",
    },
    {
      id: 7,
      [resumeInputCodes.TECHSKILL]: "Git & Github",
    },
    {
      id: 8,
      [resumeInputCodes.TECHSKILL]: "Node.js",
    },
    {
      id: 12,
      [resumeInputCodes.TECHSKILL]: "PostgreSQL",
    },
    {
      id: 13,
      [resumeInputCodes.TECHSKILL]: "DSA",
    },
    {
      id: 18,
      [resumeInputCodes.TECHSKILL]: "AWS",
    },
    {
      id: 14,
      [resumeInputCodes.TECHSKILL]: "Blockchain Development",
    },
    {
      id: 19,
      [resumeInputCodes.TECHSKILL]: "Cyber Security",
    },
    {
      id: 22,
      [resumeInputCodes.TECHSKILL]: "IOT",
    },
  ];
  
  const progLangs = [
    {
      id: 1,
      [resumeInputCodes.PROGLANG]: "Html/Css",
      [resumeInputCodes.PROGLANGLEVEL]: 9,
    },
    {
      id: 2,
      [resumeInputCodes.PROGLANG]: "JavaScript",
      [resumeInputCodes.PROGLANGLEVEL]: 9,
    },
    {
      id: 3,
      [resumeInputCodes.PROGLANG]: "Python",
      [resumeInputCodes.PROGLANGLEVEL]: 8,
    },
    {
      id: 6,
      [resumeInputCodes.PROGLANG]: "Java",
      [resumeInputCodes.PROGLANGLEVEL]: 8,
    },
    {
      id: 4,
      [resumeInputCodes.PROGLANG]: "SQL",
      [resumeInputCodes.PROGLANGLEVEL]: 8,
    },
    {
      id: 5,
      [resumeInputCodes.PROGLANG]: "C++",
      [resumeInputCodes.PROGLANGLEVEL]: 7,
    },
  ];
  
  const experiences = [
    {
      id: 3,
      [resumeInputCodes.JOBSTARTDATE]: "2020",
      [resumeInputCodes.JOBENDDATE]: "present",
      [resumeInputCodes.JOBTITLE]: "Self-Taught Developer",
      [resumeInputCodes.JOBPRESENT]: true,
      [resumeInputCodes.JOBCOMPANY]: "Freelancer",
      [resumeInputCodes.JOBDESC]:
        "i learned coding from 0 to intermediate & advance level by watching tutorials, reading books & taking some paid courses",
    },
    {
      id: 2,
      [resumeInputCodes.JOBSTARTDATE]: "2017",
      [resumeInputCodes.JOBENDDATE]: "2020",
      [resumeInputCodes.JOBTITLE]: "Teacher",
      [resumeInputCodes.JOBPRESENT]: false,
      [resumeInputCodes.JOBCOMPANY]: "Hari Coaching Classes",
      [resumeInputCodes.JOBDESC]:
        "Opened my own coaching institute where i taught Physics & Maths to B.Sc. students",
    },
    {
      id: 1,
      [resumeInputCodes.JOBSTARTDATE]: "2016",
      [resumeInputCodes.JOBENDDATE]: "2017",
      [resumeInputCodes.JOBTITLE]: "Mechanical Engineer",
      [resumeInputCodes.JOBPRESENT]: true,
      [resumeInputCodes.JOBCOMPANY]: "keihnfie",
      [resumeInputCodes.JOBDESC]: "worked as CNC programer & operator",
    },
  ];
  const projects = [
    {
      id: 1,
      [resumeInputCodes.PROJECTTITLE]: "Portfolio Website",
      [resumeInputCodes.PROJECTTECHSTACK]: "React, Firebase",
      [resumeInputCodes.PROJECTDESC]:
        "Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor sit, amet consectetur  corrupti corrupti officiis eaque.",
      [resumeInputCodes.PROJECTGITLINK]: "React, Firebase",
      [resumeInputCodes.PROJECTLIVEDEMO]: "React, Firebase",
    },
    {
      id: 2,
      [resumeInputCodes.PROJECTTITLE]: "Resume Maker",
      [resumeInputCodes.PROJECTTECHSTACK]: "React, Firebase",
      [resumeInputCodes.PROJECTDESC]:
        "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet consectetur  corrupti  corrupti officiis eaque.",
      [resumeInputCodes.PROJECTGITLINK]: "React, Firebase",
      [resumeInputCodes.PROJECTLIVEDEMO]: "React, Firebase",
    },
    {
      id: 7,
      [resumeInputCodes.PROJECTTITLE]: "Android App",
      [resumeInputCodes.PROJECTTECHSTACK]: "React Native, Firebase",
      [resumeInputCodes.PROJECTDESC]:
        "Lorem ipsum dolor sit, amet consectetur  corrupti officiis eaque.",
      [resumeInputCodes.PROJECTGITLINK]: "React Native, Firebase",
      [resumeInputCodes.PROJECTLIVEDEMO]: "React Native, Firebase",
    },
  ];
  
  const languages = [
    {
      id: 1,
      [resumeInputCodes.LANGUAGE]: "English",
      [resumeInputCodes.LANGUAGELEVEL]: 4,
    },
    {
      id: 2,
      [resumeInputCodes.LANGUAGE]: "Hindi",
      [resumeInputCodes.LANGUAGELEVEL]: 5,
    },
  ];
  
  const educations = [
    {
      id: 1,
      [resumeInputCodes.STUDYPROGRAM]: "Computer Sciene",
      [resumeInputCodes.INSTITUTION]: "Engineering College",
      [resumeInputCodes.CGPA]: "8.9",
      [resumeInputCodes.STUDYSTARTDATE]: 2017,
      [resumeInputCodes.STUDYENDDATE]: 2021,
      [resumeInputCodes.STUDYPRESENT]: false,
      [resumeInputCodes.STUDYPLACE]: "Dehradun",
    },
  ];
  
  const interests = [
    {
      id: 1,
      [resumeInputCodes.INTEREST]: "Coding",
    },
    {
      id: 2,
      [resumeInputCodes.INTEREST]: "Solving Puzzles",
    },
    {
      id: 5,
      [resumeInputCodes.INTEREST]: "Listning Audio Books",
    },
    {
      id: 3,
      [resumeInputCodes.INTEREST]:
        "Reading Science & Technology related Articles",
    },
    {
      id: 4,
      [resumeInputCodes.INTEREST]: "Watching Ted Talks & Documentries",
    },
    {
      id: 6,
      [resumeInputCodes.INTEREST]: "Exercising",
    },
    {
      id: 7,
      [resumeInputCodes.INTEREST]: "Learning New Skills",
    },
  ];
  
  const initialState = {
    secTitles: secTitles,
    personalInfo: personalInfo,
    contactDetails: contactDetails,
    techskills: techskills,
    progLangs: progLangs,
    experiences: experiences,
    projects: projects,
    languages: languages,
    educations: educations,
    interests: interests,
  };
  
  
  export default initialState;
  