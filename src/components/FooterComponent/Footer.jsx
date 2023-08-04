import styles from "./footer.module.css"
import { Comic_Neue,Red_Hat_Display } from 'next/font/google'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["700","400"]})
const ComicNeue = Comic_Neue({subsets: ['latin'],weight: ["700"]})
const Footer = () => {
    return (
      <footer className={[RHdisplay.className,styles.footer].join(" ")}>
      <h4>Benjamin Shuster</h4>
      <a href="./privacy.html">Privacy Policy</a>
    </footer>
    );
  };
export default Footer;