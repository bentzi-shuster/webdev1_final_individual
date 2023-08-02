import styles from "./blog.module.css"
import { Comic_Neue,Red_Hat_Display } from 'next/font/google'
const RHdisplay = Red_Hat_Display({subsets: ['latin'],weight: ["700","400"]})
const ComicNeue = Comic_Neue({subsets: ['latin'],weight: ["700"]})
const Blog = () => {
    return (
      // more complicated html here, will do this in another pull request
      <>  
      <h2 className={ComicNeue.className} id="blog">Blog</h2>
</>
    );
  };
export default Blog;