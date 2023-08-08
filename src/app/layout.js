import Nav from '@/components/NavComponent/Nav'
import './globals.css'
import 'material-symbols';
import Script from 'next/script';
export const metadata = {
  title: 'Benjamin Shuster',
  description: 'Benjamin Shuster is a software engineer and web developer',
  openGraph: {
    title: 'Benjamin Shuster',
    description: 'Benjamin Shuster is a software engineer and web developer',
    image: 'https://em-content.zobj.net/thumbs/120/twitter/351/clown-face_1f921.png',
    url: 'https://bentzi-shuster.github.io/webdev1_final_individual',
    type: 'website',
  },
  authors: [{ name: 'Benjamin Shuster' }],
  applicationName: 'Benjamin Shuster',
  keywords: ['Benjamin Shuster',"Web Developer"],
  twitter: {
    card: 'summary_large_image',
    url: 'https://bentzi-shuster.github.io/webdev1_final_individual',
    title: 'Benjamin Shuster',
    description: 'Benjamin Shuster is a software engineer and web developer',
    image: 'https://em-content.zobj.net/thumbs/120/twitter/351/clown-face_1f921.png',
  },
  themeColor: 'black',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  manifest:"/manifest.webmanifest",//local
  manifest:"/webdev1_final_individual/manifest.webmanifest" //gh pages
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
                
{/* <!-- Google tag (gtag.js) --> */}
<Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-07J2SQ3D3C"></Script>
<Script strategy='afterInteractive' dangerouslySetInnerHTML={{__html:`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-07J2SQ3D3C');

`}} id="gtag"></Script>

      <Nav />
        {children}


        </body>
    </html>
  )
}
