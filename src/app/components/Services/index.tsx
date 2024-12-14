import { ServiceCard } from '@/components/ServiceCard'
import { ButtonLink } from '@/components/ButtonLink'

import service1Image from '@/assets/service.jpg'
import service2Image from '@/assets/service2.jpg'

export function Services() {
  return (
    <section className="grid grid-cols-2 grid-rows-3">
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

      <article className="flex flex-col justify-center items-center h-[664px] py-20 px-10 bg-black">
        <h3 className="uppercase text-5xl text-center text-white -tracking-wider mb-8">
          Agendar consulta
        </h3>

        <p className="text-lg text-center text-white mb-16">
          Venha nos visitar e descobrir como podemos ajudar você a se sentir bem consigo mesma.
        </p>

        <ButtonLink href="#">Call to action</ButtonLink>
      </article>
    </section>
  )
}
