import styles from '../../../styles/Template1.module.css'

export const PersonalInfo = () => {
    return (
        <>
            <h1 className={styles.resumeTitle}>Are we a good fit?</h1>
            <div className={styles.imgboxOuter}>
                <div className={styles.imgboxInner}>
                    <div className={styles.imgbox}>
                        {/* <img src={pic} alt="" /> */}
                    </div>
                    <div className={styles.myinfo}>
                        <h1 className={styles.myName}>Hari Joshi</h1>
                        <h2 className={styles.profession}>FullStack Developer</h2>
                    </div>
                </div>
            </div>
            <h2 className={styles.tagline}>"I am a <span>quick learner</span> , my <span>strength</span>  is my <span>learning ability</span> . I follow <span>practical</span>  as well as new <span>unconventional imaginative</span>  approach for finding <span>solution</span>  to a problem."</h2>
        </>
    )
}

export const ContactDetail = (props) =>{
    return(
        <a href={props.link} rel="noopener noreferrer" target="_blank"><span>{props.icon}</span> <span>{props.info}</span></a>
    )
}

export const TechnicalSkill = ({title}) => {
    return(
        <span className={styles.technicalSkill}>
            {title}
        </span>
    )
}

export const ProgLang = ({title, level})=>{
    return(
        <div className={styles.progLang}>
            <span className={styles.title}>{title}</span>
            <span className={styles.progressBarOuter}>
                <span className={styles.progressBarInner} style={{width: `${level*10}%`}} ></span>
            </span>
        </div>
    )
}

export const Lang = ({title, level}) => {
    return(
        <div className={styles.lang}>
            <span className={styles.title}>{title}</span>
            <span className={styles.level}>{level}</span>
        </div>
    )
}

export const Edu = ({title, institute, time, place, cgpa}) =>{
    return(
        <div className={styles.edu}>
            <div className={styles.r1}>
                <span className={styles.title}>{title}</span> <span> | </span>
                <span className={styles.institute}>{institute}</span>
            </div>
            <div className={styles.r2}>
                <span className={styles.time}>{time}</span> / <span className={styles.place}> {place}</span>
            </div>
            {/* <div className={styles.cgpa}>{cgpa}</div> */}
        </div>
    )
}

export function ProjectItem({ title,tech, desc }) {
    return (
        <div className={styles.projectItem}>
            <h2 className={styles.title}><span>{title}</span><span>|</span><span>{tech}</span></h2>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}

export function MyJourneyItem(props) {
    const { time, jobTitle, companyName, desc } = props.data
    return (
        <div className={styles.myJourneyItem}>
            <span className={styles.time}>{time}</span>
            <h1 className={styles.title}><span></span><span>{jobTitle}</span>   | <span>{companyName}</span></h1>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}

export const Interest = ({ title }) => {
    return (
        <span className={styles.interest}>{title}</span>
    )
}