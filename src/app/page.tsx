import About from '@/components/pages/home/About'
import Contact from '@/components/pages/home/Contact'
import Experience from '@/components/pages/home/Experience'
import Hero from '@/components/pages/home/Hero'
import RecentlyPublished from '@/components/pages/home/RecentlyPublished'
import Work from '@/components/pages/home/Work'
import { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Home',
}

async function HomePage() {
   return (
      <main>
         <Hero />
         <About />
         <Experience />
         <Work />
         <RecentlyPublished />
         <Contact />
      </main>
   )
}
export default HomePage
