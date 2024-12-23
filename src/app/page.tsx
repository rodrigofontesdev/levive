import { Hero } from './sections/Hero'
import { AboutUs } from './sections/AboutUs'
import { Professionals } from './sections/Professionals'
import { Services } from './sections/Services'
import { BeforeAndAfter } from './sections/BeforeAndAfter'
import { CallToAction } from './sections/CallToAction'
import { Blog } from './sections/Blog'
import { ContactUs } from './sections/ContactUs'

export default function Home() {
  return (
    <main>
      <Hero sectionId="home" />
      <AboutUs sectionId="sobre" />
      <Professionals />
      <Services />
      <BeforeAndAfter />
      <CallToAction />
      <Blog />
      <ContactUs />
    </main>
  )
}
