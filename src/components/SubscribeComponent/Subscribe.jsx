"use client"
import { useState } from "react"
import styles from "./subscribe.module.css"
import { Comic_Neue,Red_Hat_Display } from 'next/font/google'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["700","400"]})
const ComicNeue = Comic_Neue({subsets: ['latin'],weight: ["700"]})
const Subscribe = () => {
  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
    return (
      <section>
        <h2 className={ComicNeue.className} id="subscribe">Subscribe for More</h2>
        <form className={styles.subscribeForm} action="/api/mail" method="POST" onSubmit={(e)=>{


          e.preventDefault();
          e.target.reset()
          fetch("/api/mail?"+new URLSearchParams({
            name:name,
            email:email
          }),{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            },
          })
          .then(data=>console.log(data))
          .catch(err=>console.log(err))          
          
          }} >
          <input required minLength={3} type="text" placeholder="Name" name="name" onChange={(e)=>setName(e.target.value)} />
          <input required minLength={3} type="email" placeholder="Email" name="email" onChange={(e)=>setEmail(e.target.value)} />
          <button type="submit">Subscribe</button>
        </form>     
      </section>
    );
  };
export default Subscribe;