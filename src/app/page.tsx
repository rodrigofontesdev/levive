import { Header } from '@/components/Header'
import { Hero } from './sections/Hero'
import { AboutUs } from './sections/AboutUs'
import { Professionals } from './sections/Professionals'
import { Services } from './sections/Services'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AboutUs />
        <Professionals />
        <Services />
      </main>
    </>
  )
}
