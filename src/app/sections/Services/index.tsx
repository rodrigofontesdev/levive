import { ServiceCard } from '@/components/ServiceCard'
import { ButtonLink } from '@/components/ButtonLink'
import Image from 'next/image'

import service1Image from '@/assets/service.jpg'
import service2Image from '@/assets/service2.jpg'
import submarkImage from '@/assets/submark.svg'

const phoneNumber = '5594991331618'
const message =
  'Olá! 😊 Tenho muito interesse em conhecer a clínica e gostaria de agendar uma avaliação para começar a minha jornada de transformação.'
const chatUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

export function Services() {
  return (
    <section
      id="especialidades"
      data-section="especialidades"
      className="grid grid-cols-1 lg:grid-cols-2 grid-rows-6 lg:grid-rows-3 mb-48"
    >
      <ServiceCard
        cover={service1Image}
        title="Emagrecimento"
        description="Soluções avançadas para você alcançar e manter seu peso ideal com saúde e equilíbrio."
      />

      <ServiceCard
        cover={service2Image}
        title="Harmonização Corporal"
        description="Contornos definidos e harmonia perfeita que refletem sua beleza."
      />

      <ServiceCard
        cover={service2Image}
        title="Harmonização Facial"
        description="Técnicas refinadas para realçar sua expressão e rejuvenescer sua aparência."
      />

      <ServiceCard
        cover={service1Image}
        title="Estética Íntima"
        description="Tratamentos discretos e inovadores para renovar sua confiança e bem-estar."
      />

      <ServiceCard
        cover={service1Image}
        title="Transplante Capilar"
        description="Tecnologia de ponta para restaurar seu cabelo e sua autoestima."
      />

      <article className="flex flex-col relative justify-center items-center h-[664px] py-20 px-10 bg-[#e0e3d7]">
        <div className="relative z-10">
          <h3 className="uppercase text-5xl text-center text-black -tracking-wider mb-8">
            Agendar consulta
          </h3>

          <p className="text-lg text-center text-black mb-16">
            Venha nos visitar e descobrir como podemos ajudar você a se sentir bem consigo mesma.
          </p>

          <div className="text-center">
            <ButtonLink href={chatUrl}>Agendar consulta</ButtonLink>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-5">
          <Image
            src={submarkImage}
            alt=""
            width={500}
            height={500}
            aria-hidden
          />
        </div>
      </article>
    </section>
  )
}
