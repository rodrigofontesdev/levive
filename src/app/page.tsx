import { Header } from '@/components/Header'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Professionals } from './components/Professionals'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AboutUs />
        <Professionals />
      </main>
    </>
  )
}
