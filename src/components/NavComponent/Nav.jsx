'use client'
import { useState,useEffect } from 'react';
import { Red_Hat_Display } from 'next/font/google'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["900","600"]})
import Link from "next/link";
import styles from "./nav.module.css"
import  getDefaultEmoji  from './getDefaultEmoji';
import changeDarkMode from './changeDarkMode';
import scrollLink from './scrollLink';
const Nav = () => {
let links = [
  {name:"My Toolbox",href:"#toolbox"},
  {name:"Projects",href:"#projects"},
  {name:"Benefits",href:"#benefits"},
  {name:"Blog",href:"#blog"},
  {name:"Subscribe",href:"#subscribe"},
]
let lastToggle = new Date().getTime()
let [isopen,setOpen] = useState(false)

useEffect(()=>{
  let emoji = getDefaultEmoji()
  setButtonEmoji(emoji)
  if(window.innerWidth > 768){
    setOpen(true)
    window.removeEventListener("click",onClickFun,{
      capture:true
    })
  }
  if(window.innerWidth < 768){
    setOpen(false)
    window.addEventListener("click",onClickFun,{
      capture:true
    })
  }
  window.addEventListener("resize",()=>{
    if(window.innerWidth > 768){
      setOpen(true)
      window.removeEventListener("click",onClickFun,{
        capture:true
      })
    }
    if(window.innerWidth < 768){
      setOpen(false)
      window.addEventListener("click",onClickFun,{
        capture:true
      })
    }
  })
  function onClickFun(e){
      console.log(e.target)
      if(!e.target.contains(document.querySelector(".nav *"))&& !e.target.contains(document.querySelector(".nav"))){
        setOpen(false)
    }
  }
},[])

let [buttonEmoji,setButtonEmoji] = useState("🤡")
    return (    
    <nav className={[styles.nav]}>
             <Link onClick={(e)=>{scrollLink(e,{href:"#top"})}} href="#top"><h4 style={{"weight":"900","letterSpacing": "0.96px"}} className={RHdisplay.className}>Benjamin Shuster</h4></Link> 
      <details {...(isopen ? {open:true} : {open:false})}>
        <summary onClick={(e)=>{
          e.preventDefault()
          e.stopPropagation()
          if(new Date().getTime() - lastToggle < 100){
            //FUCK THIS BUG !!!!!!!! I GOT BUG SPRAY (stop 2x toggle)
            return
          }
          setOpen(!isopen)
          lastToggle = new Date().getTime()
          }}>
          <span className="material-symbols-rounded">menu</span>
        </summary>
        <ul className={[styles.ul]}>
          {links.map((link,i)=>(
            <li key={i} style={{"weight":"400"}} className={RHdisplay.className}>
                <Link onClick={(e)=>{scrollLink(e,link)}}
                 href={link.href}>{link.name}</Link>
            </li>
          ))}
          <button onClick={()=>changeDarkMode(setButtonEmoji)} className={[styles.darklight]}><p>{buttonEmoji}</p></button>
        </ul>
        </details>
      </nav>
      
      )
  };
  
export default Nav;