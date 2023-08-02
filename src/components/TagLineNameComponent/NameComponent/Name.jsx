import { Comic_Neue,Red_Hat_Display } from 'next/font/google'
import styles from './name.module.css'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["700","400"]})
const ComicNeue = Comic_Neue({subsets: ['latin'],weight: ["700"]})

const NameComponent = () => {
    return (
        <div>
          <h1 className={[ComicNeue.className,styles.firstName,styles.name].join(" ")}>Benjamin</h1>
      <h1 className={[ComicNeue.className,styles.lastName,styles.name].join(" ")}>Shuster</h1>
        </div>
    );
};
export default NameComponent;