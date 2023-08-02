import Image from 'next/image'
import styles from './page.module.css'
import TagLineName from '@/components/TagLineNameComponent/TagLineName'
import Toolbox from '@/components/ToolboxComponent/Toolbox'
import Projects from '@/components/ProjectsComponent/Projects'
import About from '@/components/AboutComponent/About'
import Subscribe from '@/components/SubscribeComponent/Subscribe'
import Footer from '@/components/FooterComponent/Footer'
import Blog from '@/components/BlogComponent/Blog'

export default function Home() {
  return (
    <main>
      <TagLineName />
      <Toolbox  />
      <Projects />
      <About />
      <Blog />
      <Subscribe />
      <Footer />
    </main>
  )
}
