import Image from 'next/image'
import { ServiceCard } from '@/components/ServiceCard'
import { ButtonLink } from '@/components/ButtonLink'
import { clickToChat } from '@/helpers/app'

import service1Image from '@/assets/service.jpg'
import service2Image from '@/assets/service2.jpg'
import submarkImage from '@/assets/levive-submark-brown.svg'

export function Services({ sectionId }: { sectionId: string }) {
  return (
    <section
      id={sectionId}
      data-section={sectionId}
      className="grid grid-cols-1 lg:grid-cols-2 grid-rows-6 lg:grid-rows-3 pt-12 mb-12 lg:mb-40"
    >
      <div className="h-[500px] lg:h-[664px]">
        <ServiceCard
          cover={service1Image}
          title="Emagrecimento"
          description="Soluções avançadas para você alcançar e manter seu peso ideal com saúde e equilíbrio."
        />
      </div>

      <div className="h-[500px] lg:h-[664px]">
        <ServiceCard
          cover={service2Image}
          title="Harmonização Corporal"
          description="Contornos definidos e harmonia perfeita que refletem sua beleza."
        />
      </div>

      <div className="h-[500px] lg:h-[664px]">
        <ServiceCard
          cover={service2Image}
          title="Harmonização Facial"
          description="Técnicas refinadas para realçar sua expressão e rejuvenescer sua aparência."
        />
      </div>

      <div className="h-[500px] lg:h-[664px]">
        <ServiceCard
          cover={service1Image}
          title="Estética Íntima"
          description="Tratamentos discretos e inovadores para renovar sua confiança e bem-estar."
        />
      </div>

      <div className="h-[500px] lg:h-[664px]">
        <ServiceCard
          cover={service1Image}
          title="Transplante Capilar"
          description="Tecnologia de ponta para restaurar seu cabelo e sua autoestima."
        />
      </div>

      <article className="h-[500px] lg:h-[664px] flex justify-center items-center relative py-10 lg:py-20 px-5 lg:px-10 bg-light-brown">
        <div className="max-w-lg flex flex-col items-center justify-center gap-8 relative z-10">
          <h3 className="uppercase text-4xl md:text-5xl text-center -tracking-wider">
            Agendar consulta
          </h3>

          <p className="text-center mb-4">
            Venha nos visitar e descobrir como podemos ajudar você a se sentir bem consigo mesmo.
          </p>

          <ButtonLink
            href={clickToChat()}
            target="_blank"
          >
            Agendar consulta
          </ButtonLink>
        </div>

        <div className="absolute w-full max-w-[22.5rem] lg:max-w-[30rem] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20">
          <Image
            src={submarkImage}
            alt=""
            aria-hidden={true}
          />
        </div>
      </article>
    </section>
  )
}
