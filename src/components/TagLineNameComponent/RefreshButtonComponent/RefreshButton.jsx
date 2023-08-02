"use client";
import confetti from "canvas-confetti";
import styles from "./refreshbutton.module.css"
export default function RefreshButton(props) {
        function isDarkMode() {
            return document.documentElement.getAttribute('data-theme')?document.documentElement.getAttribute('data-theme')==="dark":window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return (
<div className={styles.refreshButtonWrapper}>

            <button onClick={(e)=>{
                console.log(document.documentElement.getAttribute('data-theme')?document.documentElement.getAttribute('data-theme')==="dark":window.matchMedia('(prefers-color-scheme: dark)').matches);
                confetti({
                  ticks: 50,
                        particleCount: Math.floor(Math.random() * 15) + 25,
                        spread: 100,
                      angle: 90,
                      startVelocity: 22.5,
                      gravity:1.5,
                      shapes: ['circle'],
                      colors: [...(isDarkMode()?["#F9CC2F","#f2d539","#ffffff"]:["#606060","#000000","#ffffff"])],
                      origin:{
                        x: e.clientX?e.clientX/window.innerWidth:(e.target.offsetLeft+e.target.offsetWidth/2)/window.innerWidth,
                        y: e.clientY?e.clientY/window.innerHeight:e.target.offsetTop/window.innerHeight
                      },
                      drift: 0,
                      scalar: 1.5,
                      })
                props.onClick(e)
                }} className={styles.refreshButton}>
       <i><span className="material-symbols-rounded">
       refresh
       </span></i>
       </button> 
         
</div>
        )
    }
    