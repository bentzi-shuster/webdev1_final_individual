"use client"
import React from 'react'
import confetti from 'canvas-confetti'
import styles from './connectbutton.module.css'
import {Red_Hat_Display } from 'next/font/google'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["700"]})
export default function ConnectButton(props) {
    return (    
        <>
        <button onClick={(e)=>{
                confetti({
                  particleCount: Math.floor(Math.random() * 100) + 1,
                  spread: 100,
                angle: Math.floor(Math.random() * 360) + 1,
                startVelocity: 20,
                shapes: ['star'],
                colors: ['#e5d35e', '#E55EC4 ', '#C4E55E ',"#E5895E","#5EE5E5","#5E5EE5", "#E55E5E"],
                origin:{
                  x: e.clientX?e.clientX/window.innerWidth:(e.target.offsetLeft+e.target.offsetWidth/2)/window.innerWidth,
                  y: e.clientY?e.clientY/window.innerHeight:e.target.offsetTop/window.innerHeight
                }
                });
                

                document.querySelector("#subscribe").scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
                setTimeout(()=>{
                  document.querySelector("#subscribe + form input[type='text']").focus()
                }
                ,500)
                


        }}
           onKeyDown={
                  (e) => {
                  if(e.key==="Enter"||e.key===" "){
                // unfocus the button
                e.target.blur()
                // trigger the click event
                e.target.click()
                // focus the subscribe input
                setTimeout(()=>{
                document.querySelector("#subscribe + form input[type='text']").focus()
                }
                ,500)}
              }
            }     
        className={[styles.connectbutton,RHdisplay.className].join(" ")}>Lets Connect</button>
        </>
      )
}