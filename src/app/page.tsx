import { Header } from '@/components/Header'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AboutUs />
      </main>
    </>
  )
}
