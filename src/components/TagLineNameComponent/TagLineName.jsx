"use client"
import RefreshButton from "./RefreshButtonComponent/RefreshButton";
import styles from "./tagline_name.module.css"
import { Red_Hat_Display } from 'next/font/google'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["600","900"]})
const TagLineName = () => {
    return (
      <section>
          <div>
          <h2 className={[RHdisplay.className].join(" ")}>tagline</h2>
          <p className={[RHdisplay.className].join(" ")}>text</p> 
          </div>

          <RefreshButton /*onClick={randomTaglineFunc}*/ />
          </section>
    );
  };
export default TagLineName;