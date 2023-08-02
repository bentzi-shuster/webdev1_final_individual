import Link from "next/link";
import styles from "./projects.module.css"
import { Comic_Neue,Red_Hat_Display } from 'next/font/google'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["700","400"]})
const ComicNeue = Comic_Neue({subsets: ['latin'],weight: ["700"]})
const Projects = () => {
    return (
      <section>
      <h2 className={ComicNeue.className} id="projects">Some of my Projects</h2>
      <div className={styles.cards}>
  <div className={styles.card}>
    <div className={styles.actions}>
    <Link target="_blank" href="https://chrome.google.com/webstore/detail/njit-schedule-builder-pro/pmnpckcmdalibabddocfiabejkbmcanp" className={styles.action}>
  <span className="material-symbols-rounded">
  link
</span>
</Link>
      <Link target="_blank" href="https://github.com/bentzi-shuster/NJIT-Schedule-Builder-Profiles" className={styles.action}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
</Link>
    </div>
    
    <h4 className={RHdisplay.className}>Schedule Builder Profiles</h4>
     {/*eslint-disable-next-line*/}
    <img style={{
    "position": "relative",
    "top": "40px",
    "right": "14%",
    "width": "max(25%, 150px)"
  }} src="images/SBPicon.png" alt="Schedule Builder Profiles Icon" />
  {/*eslint-disable-next-line*/}
  <img style={{
    "position": "relative",
    "top": "0px",
    "left": "5%",
    "width": "max(25%, 150px)"
  }} src="images/SBPbar.png" alt="Schedule Builder Profiles Toolbar" />
  </div>
  <div className={styles.card}>
  <div className={styles.actions}>
      <div className={styles.action}>
        <p title="In Progress" className={RHdisplay.className}>IP</p>
      </div>
      </div>
  <h4 className={RHdisplay.className} >Schedule Builder Clone</h4>
  <div className={styles.scheduleClassWrapper
  
  }>  <div className={[styles.scheduleClass1,styles.scheduleClass,RHdisplay.className].join(" ")}> 
  <span className="material-symbols-rounded">
    close
  </span>
  <strong>IS 218-001 (3)</strong> Williams, Keith<br />
4:00pm-5:20pm @ CKB 317<br />BUILDING WEB APPLICATIONS<br />94109
  
   </div><div className={[styles.scheduleClassinvis,styles.scheduleClass,RHdisplay.className].join(" ")}>  </div>
 <div className={[styles.scheduleClassinvis,styles.scheduleClass,RHdisplay.className].join(" ")}>  </div> <div className={[RHdisplay.className,styles.scheduleClass2,styles.scheduleClass].join(" ")}>   <span className="material-symbols-rounded">
    close
  </span>   <strong>IS 218-001 (3)</strong> Williams, Keith<br />
4:00pm-5:20pm @ CKB 317<br />BUILDING WEB APPLICATIONS<br />94109</div>
</div>
  </div>


  <div className={styles.card}>
  <div className={styles.actions}>
      <Link target="_blank" href="https://web.njit.edu/~bzs6/bzs6-prod" className={styles.action}>
  <span className="material-symbols-rounded">
  link
</span>
</Link>
      
      </div>
  <h4 className={RHdisplay.className} >Bens mortuary and grill</h4>
    {/*eslint-disable-next-line*/}
  <img style={{
    "position": "relative",
    "top": "100px",
    "right": "25%",
  }} src="images/burger_emoji.png" alt="Burger Empji" />
  {/*eslint-disable-next-line*/}
  <img style={{
    "position": "relative",
    "top": "-70px",
    "left": "25%",
  }} src="images/skull_emoji.png" alt="Skull Emoji" />

  </div>
  </div>
</section>

    );
  };
export default Projects;