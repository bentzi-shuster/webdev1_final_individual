import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from './page.module.css'
import Toolbox from '@/components/ToolboxComponent/Toolbox'
import Projects from '@/components/ProjectsComponent/Projects'
import About from '@/components/AboutComponent/About'
import Subscribe from '@/components/SubscribeComponent/Subscribe'
import Footer from '@/components/FooterComponent/Footer'
import Blog from '@/components/BlogComponent/Blog'
import  DividerBottom  from '@/components/divider/DividerBottom'
import  DividerTop  from '@/components/divider/DividerTop'

const TagLineName = dynamic(() => import('@/components/TagLineNameComponent/TagLineName'), {
  ssr: false,  // the content is randomly generated and will not be the same on each request so we disable SSR to avoid errors
})
export default function Home() {
  return (
    <main>
      <TagLineName />
      <Toolbox  />
      <DividerTop />
      <Projects />
      <About />
      <DividerBottom />
      <Blog />

      <Subscribe />
      <Footer />
    </main>
  )
}
