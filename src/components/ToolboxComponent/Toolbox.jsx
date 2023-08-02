"use client"
import styles from "./toolbox.module.css"
import { Comic_Neue,Red_Hat_Display } from 'next/font/google'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["700","400"]})
const ComicNeue = Comic_Neue({subsets: ['latin'],weight: ["700"]})
const Toolbox = () => {
  let ImagePathsRow1 = [
    {
      src: "images/ChatGPT_logo.png",
      alt: "ChatGPT logo",
      ShadowColor: ["#03a27f", "#ffffff"]
    },
    {
      src: "images/fedora-logo.png",
      alt: "Fedora logo",
      ShadowColor: ["#55a2da", "#ffffff"]
    },
    {
      src: "images/icons8-css3-96.png",
      alt: "CSS3 logo",
      ShadowColor: ["#1572B6", "#ffffff"]
    },
    {
      src: "images/icons8-figma-96.png",
      alt: "Figma logo",
      ShadowColor: ["#F24E1E", "#66bb6a"]
    },
    {
      src: "images/icons8-github-96.png",
      alt: "GitHub logo",
      ShadowColor: ["#000000", "#ffffff"],
      needsInvert: true
    },
    {
      src: "images/icons8-html-5-96.png",
      alt: "HTML5 logo",
      ShadowColor: ["#ff6d00", "#ffffff"]
    },
    {
      src: "images/icons8-google-sheets-96.png",
      alt: "Google Sheets logo",
      ShadowColor: ["#43a047", "#ffffff"]
    },
    {
      src: "images/php-logo.png",
      alt: "PHP logo",
      ShadowColor: ["#617cbe", "#000000"]
    }
  ];
  let ImagePathsRow2 = [
    {
      src: "images/icons8-git-96.png",
      alt: "Git logo",
      ShadowColor: ["#f4511e", "#ffffff"]
    },
    {
      src: "images/icons8-java-96.png",
      alt: "Java logo",
      ShadowColor: ["#1565c0", "#f44336"]
    },
    {
      src: "images/icons8-javascript-96.png",
      alt: "JavaScript logo",
      ShadowColor: ["#ffd600", "#000000"]
    },
    {
      src: "images/icons8-linux-96.png",
      alt: "Linux logo",
      ShadowColor: ["#000000", "#ffffff"]
    },
    {
      src: "images/icons8-nodejs-96.png",
      alt: "Node.js logo",
      ShadowColor: ["#4caf50", "#000000"]
    },
    {
      src: "images/icons8-python-96.png",
      alt: "Python logo",
      ShadowColor: ["#0277bd", "#ffc107"]
    },
    {
      src: "images/icons8-typescript-96.png",
      alt: "TypeScript logo",
      ShadowColor: ["#1976d2", "#ffffff"]
    },
    {
      src: "images/icons8-web-components-96.png",
      alt: "Web Components logo",
      ShadowColor: ["#f76418", "#ffffff"]
    },
    {
      src: "images/icons8-windows-11-96.png",
      alt: "Windows 11 logo",
      ShadowColor: ["#1976d2", "#ffffff"]
    }
  ];

    return (
      <section>
        
      <h2 className={ComicNeue.className} id="toolbox">My Toolbox</h2>
      <div>  
      <ul>
     {ImagePathsRow1.map((obj,index) => {
        return(
        <li key={index} style={{"--shadow-color1": obj.ShadowColor[0],"--shadow-color2": obj.ShadowColor[1]}}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={obj.needsInvert?styles.invertDark:""} src={obj.src} alt={obj.alt} />
        </li>
        )
        })
      }
      </ul> 
      <ul>
      {ImagePathsRow2.map((obj,index) => {
        return(
        <li key={index} style={{"--shadow-color1": obj.ShadowColor[0],"--shadow-color2": obj.ShadowColor[1]}}>
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={obj.src} alt={obj.alt} />
        </li>
        )
      })
      }
      </ul> 
      </div>
      
      </section>
    );
  };
export default Toolbox;