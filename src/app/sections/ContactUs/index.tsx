import { ContactForm } from '../ContactForm'
import { Faq } from '../Faq'

export function ContactUs() {
  return (
    <section className="py-20 px-5 bg-black">
      <div className="max-w-screen-xl mx-auto flex gap-10">
        <div className="w-1/2">
          <h2 className="uppercase text-5xl text-white -tracking-wider mb-20">
            Dúvidas Frequentes
          </h2>

          <Faq />
        </div>

        <div className="w-1/2">
          <h2 className="uppercase text-5xl text-white -tracking-wider mb-20">Fale Conosco</h2>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
