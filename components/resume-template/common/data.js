import { IoIosMail } from "react-icons/io"
import { BsFillTelephoneFill } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"
import { GrLinkedin } from "react-icons/gr"
import { FaGithub } from "react-icons/fa"
import { CgWebsite } from "react-icons/cg"

import { fieldCode } from "./constants/typeCodes"

export const personalInfo=[
    {
        id: 1,
        [fieldCode.RESUMETITLE]: "Are we a good fit?",
        [fieldCode.IMAGESRC]: "link",
        [fieldCode.NAME]: "Hari Joshi",
        [fieldCode.PROFESSION]: "FullStack Developer",
        [fieldCode.TAGLINE]: "I am a quick lerner, my strength is my learning ability. I follow practical as well as new unconventional imaginative approach for finding solution to a problem"
    }
]

export const contactDetails ={
    [fieldCode.EMAIL]: "mr.hariprasdjoshi@gmail.com",
    [fieldCode.PHONE]: "7906519104",
    [fieldCode.ADDRESS]: "Dehradun, India",
    [fieldCode.WEBSITE]: "harijoshi.tech",
    [fieldCode.LINKEDIN]: "linkedin.com/in/harijoshi123",
    [fieldCode.GITHUB]: "github.com/harijoshi12",
    // [fieldCode.STACKOVERFLOW]: "stackoverflow",
    // [fieldCode.QUORA]: "quora",
    // [fieldCode.MEDIUM]: "medium",
}


export const techSkills = [
    // {
    //     id: 1,
    //     [fieldCode.TECHSKILL]: "React"
    // },
    // {
    //     id: 2,
    //     [fieldCode.TECHSKILL]: "React Native"
    // },
    // {
    //     id: 3,
    //     [fieldCode.TECHSKILL]: "Next.js"
    // },
    // {
    //     id: 4,
    //     [fieldCode.TECHSKILL]: "SASS"
    // },
    {
        id: 5,
        [fieldCode.TECHSKILL]: "Bootstrap"
    },
    {
        id: 6,
        [fieldCode.TECHSKILL]: "TailWind"
    },
    {
        id: 7,
        [fieldCode.TECHSKILL]: "Git & Github"
    },
    {
        id: 8,
        [fieldCode.TECHSKILL]: "Node.js"
    },
    // {
    //     id: 9,
    //     [fieldCode.TECHSKILL]: "Mongodb"
    // },
    // {
    //     id: 10,
    //     [fieldCode.TECHSKILL]: "Express.js"
    // },
    // {
    //     id: 11,
    //     [fieldCode.TECHSKILL]: "Django"
    // },
    {
        id: 12,
        [fieldCode.TECHSKILL]: "PostgreSQL"
    },
    {
        id: 13,
        [fieldCode.TECHSKILL]: "DSA"
    },
    {
        id: 18,
        [fieldCode.TECHSKILL]: "AWS"
    },
    {
        id: 14,
        [fieldCode.TECHSKILL]: "Blockchain Development"
    },
    // {
    //     id: 16,
    //     [fieldCode.TECHSKILL]: "Linux"
    // },
    // {
    //     id: 17,
    //     [fieldCode.TECHSKILL]: "Computer Networking"
    // },
    // {
    //     id: 15,
    //     [fieldCode.TECHSKILL]: "Wordpress Theme & Plugin Development"
    // },
    {
        id: 19,
        [fieldCode.TECHSKILL]:"Cyber Security"
    },
    // {
    //     id: 20,
    //     [fieldCode.TECHSKILL]:"Unity"
    // },
    // {
    //     id: 21,
    //     [fieldCode.TECHSKILL]:"Blender"
    // },
    {
        id: 22,
        [fieldCode.TECHSKILL]:"IOT"
    }
]

export const progLangs = [
    {
       id: 1,
       [fieldCode.PROGLANG]: "Html/Css",
       [fieldCode.PROGLANGLEVEL]:  9
    },
    {
       id: 2,
       [fieldCode.PROGLANG]: "JavaScript",
       [fieldCode.PROGLANGLEVEL]:  9
    },
    {
       id: 3,
       [fieldCode.PROGLANG]: "Python",
       [fieldCode.PROGLANGLEVEL]:  8
    },
    {
       id: 6,
       [fieldCode.PROGLANG]: "Java",
       [fieldCode.PROGLANGLEVEL]:  8
    },
    {
       id: 4,
       [fieldCode.PROGLANG]: "SQL",
       [fieldCode.PROGLANGLEVEL]:  8
    },
    {
       id: 5,
       [fieldCode.PROGLANG]: "C++",
       [fieldCode.PROGLANGLEVEL]:  7
    },
    // {
    //     id: 10,
    //     [fieldCode.PROGLANG]: "TypeScript",
    //     [fieldCode.PROGLANGLEVEL]:  7
    //  },
    // {
    //    id: 7,
    //    [fieldCode.PROGLANG]: "GoLang",
    //    [fieldCode.PROGLANGLEVEL]:  6
    // },
    // {
    //    id: 8,
    //    [fieldCode.PROGLANG]: "Solidity",
    //    [fieldCode.PROGLANGLEVEL]:  6
    // },
    // {
    //    id: 9,
    //    [fieldCode.PROGLANG]: "Php",
    //    [fieldCode.PROGLANGLEVEL]:  6
    // }
]

export const langs = [
    {
        id: 1,
        [fieldCode.LANGUAGE]: "Hindi",
        [fieldCode.LANGUAGELEVEL]: "Native or Bilingual Proficiency"
    },
    {
        id: 2,
        [fieldCode.LANGUAGE]: "English",
        [fieldCode.LANGUAGELEVEL]: "Professional Working Proficiency"
    },
    // {
    //     id: 3,
    //     [fieldCode.LANGUAGE]: "Urdu",
    //     [fieldCode.LANGUAGELEVEL]: "Professional Working Proficiency"
    // },
    // {
    //     id: 4,
    //     [fieldCode.LANGUAGE]: "Sanskrit",
    //     [fieldCode.LANGUAGELEVEL]: "Professional Working Proficiency"
    // }
]

export const education = [
    {
        id: 1,
        [fieldCode.STUDYPROGRAM]: "Mechanical Engineering",
        [fieldCode.INSTITUTION]: "Govt. Polytechnic Nainital",
        [fieldCode.STUDYSTARTDATE]: "2012",
        [fieldCode.STUDYENDDATE]: "2015",
        [fieldCode.STUDYPLACE]: "Nainital, Uttarakhand, India",
        [fieldCode.CGPA]: "67%"
    },
    // {
    //     id: 2,
    //     [fieldCode.STUDYPROGRAM]: "Mechanical Engineering",
    //     [fieldCode.INSTITUTION]: "Govt. Polytechnic Nainital",
    //     [fieldCode.STUDYSTARTDATE]: "2012",
    //     [fieldCode.STUDYENDDATE]: "2015",
    //     [fieldCode.STUDYPLACE]: "Nainital, Uttarakhand, India",
    //     [fieldCode.CGPA]: "67%"
    // }
]

export const projects = [
    {
        id: 1,
        [fieldCode.PROJECTTITLE]: "Portfolio Website",
        [fieldCode.PROJECTTECHSTACK]: "React, Firebase",
        [fieldCode.PROJECTDESC]: "Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor sit, amet consectetur  corrupti corrupti officiis eaque.",
        [fieldCode.PROJECTGITLINK]: "React, Firebase",
        [fieldCode.PROJECTLIVEDEMO]: "React, Firebase",
    },
    {
        id: 2,
        [fieldCode.PROJECTTITLE]: "Resume Maker",
        [fieldCode.PROJECTTECHSTACK]: "React, Firebase",
        [fieldCode.PROJECTDESC]: "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet consectetur  corrupti  corrupti officiis eaque.",
        [fieldCode.PROJECTGITLINK]: "React, Firebase",
        [fieldCode.PROJECTLIVEDEMO]: "React, Firebase",
    },
    // {
    //     id: 3,
    //     [fieldCode.PROJECTTITLE]: "E-Commerce",
    //     [fieldCode.PROJECTTECHSTACK]: "React, Django, PostgreSQL",
    //     [fieldCode.PROJECTDESC]: "Lorem ipsum dolor sit, amet consectetur  corrupti officiis eaque.",
    //     [fieldCode.PROJECTGITLINK]: "React, Django, PostgreSQL",
    //     [fieldCode.PROJECTLIVEDEMO]: "React, Django, PostgreSQL",
    // },
    // {
    //     id: 4,
    //     [fieldCode.PROJECTTITLE]: "Social Networking Website",
    //     [fieldCode.PROJECTTECHSTACK]: "MERN stack",
    //     [fieldCode.PROJECTDESC]: "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet consectetur  corrupti corrupti officiis eaque.",
    //     [fieldCode.PROJECTGITLINK]: "MERN stack",
    //     [fieldCode.PROJECTLIVEDEMO]: "MERN stack",
    // },
    // {
    //     id: 5,
    //     [fieldCode.PROJECTTITLE]: "Blockchain Project",
    //     [fieldCode.PROJECTTECHSTACK]: "Etherium, Solidity",
    //     [fieldCode.PROJECTDESC]: "Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet consectetur  corrupti corrupti officiis eaque.",
    //     [fieldCode.PROJECTGITLINK]: "Etherium, Solidity",
    //     [fieldCode.PROJECTLIVEDEMO]: "Etherium, Solidity",
    // },
    // {
    //     id: 6,
    //     [fieldCode.PROJECTTITLE]: "Artificial Intelligence",
    //     [fieldCode.PROJECTTECHSTACK]: "Tensorflow",
    //     [fieldCode.PROJECTDESC]: "Lorem ipsum dolor sit, amet consectetur  corrupti officiis eaque.",
    //     [fieldCode.PROJECTGITLINK]: "Tensorflow",
    //     [fieldCode.PROJECTLIVEDEMO]: "Tensorflow",
    // },
    {
        id: 7,
        [fieldCode.PROJECTTITLE]: "Android App",
        [fieldCode.PROJECTTECHSTACK]: "React Native, Firebase",
        [fieldCode.PROJECTDESC]: "Lorem ipsum dolor sit, amet consectetur  corrupti officiis eaque.",
        [fieldCode.PROJECTGITLINK]: "React Native, Firebase",
        [fieldCode.PROJECTLIVEDEMO]: "React Native, Firebase",
    }
]

export const myJourney = [
    {
        id:3,
        [fieldCode.JOBSTARTDATE]: "2020",
        [fieldCode.JOBENDDATE]: "present",
        [fieldCode.JOBTITLE]: "Self-Taught Developer",
        [fieldCode.JOBPRESENT]: "Self-Taught Developer",
        [fieldCode.JOBCOMPANY]: "Freelancer",
        [fieldCode.JOBDESC]: "i learned coding from 0 to intermediate & advance level by watching tutorials, reading books & taking some paid courses"
    },
    {
        id:2,
        [fieldCode.JOBSTARTDATE]:"2017",
        [fieldCode.JOBENDDATE]:"2020",
        [fieldCode.JOBTITLE]: "Teacher",
        [fieldCode.JOBPRESENT]: "Teacher",
        [fieldCode.JOBCOMPANY]: "Hari Coaching Classes",
        [fieldCode.JOBDESC]: "Opened my own coaching institute where i taught Physics & Maths to B.Sc. students"
    },
    {
        id:1,
        [fieldCode.JOBSTARTDATE]:"2016",
        [fieldCode.JOBENDDATE]:"2017",
        [fieldCode.JOBTITLE]: "Mechanical Engineer",
        [fieldCode.JOBPRESENT]: "Mechanical Engineer",
        [fieldCode.JOBCOMPANY]: "keihnfie",
        [fieldCode.JOBDESC]: "worked as CNC programer & operator"
    }
]

export const interests = [
    {
        id:1,
        [fieldCode.INTEREST]: "Coding"
    },
    {
        id:2,
        [fieldCode.INTEREST]: "Solving Puzzles"
    },
    {
        id:5,
        [fieldCode.INTEREST]: "Listning Audio Books"
    },
    {
        id:3,
        [fieldCode.INTEREST]: "Reading Science & Technology related Articles"
    },
    {
        id:4,
        [fieldCode.INTEREST]: "Watching Ted Talks & Documentries"
    },
    {
        id:6,
        [fieldCode.INTEREST]: "Exercising"
    },
    {
        id:7,
        [fieldCode.INTEREST]: "Learning New Skills"
    },
]
