"use client"
import { useState } from "react";
import RefreshButton from "./RefreshButtonComponent/RefreshButton";
import styles from "./tagline_name.module.css"
import { Comic_Neue,Red_Hat_Display } from 'next/font/google'
import Link from "next/link";
import NameComponent from "./NameComponent/Name";
import SocialLinks from "./SocialLinksComponent/SocialLinks";
import ConnectButton from "./ConnectButtonComponent/ConnectButton";
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["700","400"]})
const ComicNeue = Comic_Neue({subsets: ['latin'],weight: ["700"]})
const TagLineName = () => {
const taglinesarr = [
  { tagline: "Front-end Fanatic", text: "Creating beautiful and responsive user interfaces" },
  { tagline: "Lifelong Learner", text: "Always seeking to expand my knowledge and skills" },
  { tagline: "Upbeat UI's", text: "Designing interfaces that put the fun in functional" },
  { tagline: "Security Specialist", text: "Protecting systems and data from unauthorized access" },
  { tagline: "Dedicated Developer", text: "Committed to delivering high-quality software" },
  { tagline: "Spreadsheet Slayer", text: "Some would say its freaky how good I am with spreadsheets" },
  { tagline: "Expert in Experience", text: "Crafting seamless and enjoyable user experiences" },
  { tagline: "Error Eliminator", text: "Debugging and fixing issues with precision" },
  { tagline: "Code Connoisseur", text: "Writing elegant and efficient code with the documentation it deserves" },
  { tagline: "Javascript Junkie", text: "Loving all things JavaScript to the point of addiction" },
  { tagline: "CSS Craftsman", text: "Creating stunning visual designs with CSS" },
  { tagline: "HTML Hero", text: "Building solid and accessible web pages with HTML" },
  { tagline: "Terminal Terminator", text: "Navigating the command line with ease" },
  { tagline: "Git Guru", text: "Managing code and collaborating with Git" },
  { tagline: "Computer Commander", text: "Controlling computers and devices with just a few keystrokes" },
  { tagline: "API Aficionado", text: "Integrating, consuming, and sometimes breaking APIs with ease" },
  { tagline: "Devtools Dominator", text: "Harnessing the power of developer tools to get the job done quickly" },
  { tagline: "Browser Badass", text: "Taming the wild world of web browsers and their quirks" },
  { tagline: "Markdown Master", text: "Creating and formatting content with Markdown" },
  { tagline: "Fabulous Figmas", text: "Designing beautiful and functional interfaces with Figma" },
  { tagline: "Design Diva", text: "Crafting stunning visual designs with precision" },
  { tagline: "UX Unicorn", text: "Creating intuitive and immersive experiences for all users" },
  { tagline: "Vite Veteran", text: "Building fast and efficient web applications with Vite" },
  { tagline: "Github Gangster", text: "Managing code and collaborating with GitHub" },
  { tagline: "SQL Sensei", text: "Writing precise and performant SQL queries" },
  { tagline: "Testing Titan", text: "Writing tests to ensure code is working as expected" },
  { tagline: "Typescript Tycoon", text: "Taking advantage of the benefits of TypeScript" },
  { tagline: "Bootstrap Beast", text: "Building responsive and accessible websites with Bootstrap" },
  { tagline: "PHP Pickle", text: "I turned myself into a PHP pickle, Morty!" },
  { tagline: "Svelte Savant", text: "Building fast and efficient web applications with Svelte" },
  { tagline: "JSON Jedi", text: "Use the JSON Luke" },
  { tagline: "WebSocket Wizard", text: "Building real-time applications with WebSockets like magic" },
  { tagline: "PWA Powerhouse", text: "Producing progressive web apps like a machine" },
  { tagline: "Friendly Face", text: "I'm a friendly face to have on your team" },
  { tagline: "Delightful Developer", text: "I'm a delightful person to work with, or so I've been told" },
  { tagline: "Hygiene Hero", text: "Its sad that I need to mention this, but you'd be surprised" },
  { tagline: "Animation Anarchist", text: "Creating beautiful and sometimes chaotic animations with CSS" },
  { tagline: "Documentation Doctor", text: "Reading and writing documentation like I was born to do it" },
  { tagline: "Comment Comedian", text: "Writing funny and informative comments in my code" }, // I'm not actually funny 🥲
  { tagline: "Stack-Overflow Stalker", text: "I'm not afraid to admit that I've spent a lot of time on Stack Overflow" },
  { tagline: "Browser-Extension Builder", text: "I have a few browser extensions under my belt and I'm always looking to build more" },      
]
  let [taglines,setTaglines]=useState(taglinesarr)
  if (taglines.length === 1) {
      setTaglines(taglinesarr)
  }

  let defaultObj = taglines[Math.floor(Math.random() * taglines.length)]
  let [tagline,updateTagline] = useState(defaultObj.tagline)
  let [text,updateText] = useState(defaultObj.text)

function randomTaglineFunc(e){
    let tagline = taglines[Math.floor(Math.random() * taglines.length)];
    updateTagline(tagline.tagline)
    updateText(tagline.text)
    // remove the object from the array
    setTaglines(taglines.filter((item) => item.tagline !== tagline.tagline))
    e.preventDefault()
  }
    return (
      <section>
<SocialLinks />
<NameComponent />
          <div className={styles.taglineContainer}>
          <h2 className={[RHdisplay.className,styles.tagline].join(" ")}>{tagline}</h2>
          <p className={[RHdisplay.className,styles.taglineText].join(" ")}>{text}</p> 
          </div>
          <RefreshButton onClick={randomTaglineFunc} />
          <ConnectButton />
          </section>
    );
  };
export default TagLineName;