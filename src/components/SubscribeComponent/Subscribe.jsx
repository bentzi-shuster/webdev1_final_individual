"use client"
import styles from "./subscribe.module.css"
import { Comic_Neue,Red_Hat_Display } from 'next/font/google'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["700","400"]})
const ComicNeue = Comic_Neue({subsets: ['latin'],weight: ["700"]})
const Subscribe = () => {
    return (
      <section>
        <h2 className={ComicNeue.className} id="subscribe">Subscribe for More</h2>
        <form className={styles.subscribeForm} action="#" method="POST" onSubmit={(e)=>{e.preventDefault();alert("Thank you for subscribing!");e.target.reset()}} >
          <input required minLength={3} type="text" placeholder="Name" />
          <input required minLength={3} type="email" placeholder="Email" />
          <button>Subscribe</button>
        </form>     
      </section>
    );
  };
export default Subscribe;