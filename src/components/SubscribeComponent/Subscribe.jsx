import styles from "./subscribe.module.css"
import { Comic_Neue,Red_Hat_Display } from 'next/font/google'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["700","400"]})
const ComicNeue = Comic_Neue({subsets: ['latin'],weight: ["700"]})
const Subscribe = () => {
    return (
      <section>
        <h2 className={ComicNeue.className} id="subscribe">Subscribe for More</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
        </form>
        <footer className={[RHdisplay.className].join(" ")}>
          <h4>Benjamin Shuster</h4>
        </footer>
      
      </section>
    );
  };
export default Subscribe;