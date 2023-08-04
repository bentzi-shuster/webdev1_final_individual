import BorderCard from "./BorderCardComponent/BorderCard";
import styles from "./about.module.css"
import { Comic_Neue,Red_Hat_Display } from 'next/font/google'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["700","400"]})
const ComicNeue = Comic_Neue({subsets: ['latin'],weight: ["700"]})
const About = () => {
    return (
      <section>

<h2 className={ComicNeue.className} id="about">About Me</h2>
<div className={[styles.bordercardWrapper,RHdisplay.className].join(" ")}>
<BorderCard>
    <h4>Why I Love Web Dev</h4>
    <p> Web development has captured my heart because it allows me to bring my creativity to life through coding. The process of transforming ideas into interactive and visually appealing websites is incredibly fulfilling. The ability to constantly learn and explore new technologies keeps me engaged and motivated to stay at the forefront of this ever-evolving field. </p>
</BorderCard>
<BorderCard>
    <h4>How I Learn</h4>
    <p> My learning approach involves a perfect blend of hands-on practice and continuous learning. I firmly believe in the &quot;learn by doing&quot; philosophy, where I work on real-world projects to enhance my skills. Additionally, I stay updated with the latest trends and best practices in web development by attending workshops, participating in online courses, and being an active member of developer communities. </p>
</BorderCard>
<BorderCard>
    <h4>Where I Learned to code</h4>
    <p> My coding journey has mainly taken place at New Jersey Institute of Technology where I am working on my B.S. in Web and Information Systems. The solid foundation laid there equipped me with the necessary technical knowledge. Since, I&apos;ve started my career as a web developer, I&apos;ve been able to apply my skills to real-world projects and continue to learn and grow as a developer. </p>
</BorderCard>
<BorderCard>
    <h4>Well crafted sites</h4>
    <p> For me, web development is not just about writing code but also about creating meaningful user experiences. I take great pride in crafting websites that not only look visually appealing but also function flawlessly. My goal is to ensure that each website I build delivers an intuitive and delightful experience to its users. </p>
</BorderCard>
</div>
</section>
    );
  };
export default About;