import React from 'react'
import styles from "./dividertop.module.css"
 const DividerTop = () => {
  return (
    <div className={styles.dividerWrapper}>
<div className={styles.divider}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <defs>
  <filter id="strong-inner">
    <feFlood floodColor="black" />
    <feFlood floodOpacity="0.25"/>
    <feComposite operator="out" in2="SourceGraphic" />
    <feMorphology operator="dilate" radius="1"/>
    <feGaussianBlur stdDeviation="2" />
    <feOffset dx="0" dy="5" result="offsetblur"/>
    <feComposite operator="atop" in2="SourceGraphic"/>
  </filter>
  </defs>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"className={styles.dividerfill}  filter="url(#strong-inner)"></path>
    </svg>
</div>
</div>
  )
}
export default DividerTop;