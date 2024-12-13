import { ProfessionalCard } from '@/components/ProfessionalCard'

import profileImage from '@/assets/100x100.svg'

export function Professionals() {
  return (
    <section className="py-40 px-5">
      <div className="max-w-screen-xl mx-auto">
        <header className="flex justify-between gap-10">
          <h2 className="uppercase text-5xl -tracking-wider flex-shrink-0 mb-32">
            Nossos especialistas
          </h2>
          <p className="text-lg text-right max-w-2xl">
            Nosso time é composto por especialistas, dedicados a proporcionar o que há de melhor em
            inovação e experiência. Estamos preparados para guiá-la na sua jornada de transformação,
            potencializando os seus resultados.
          </p>
        </header>

        <ProfessionalCard
          avatar={profileImage}
          title="Dr. Diego Barbosa"
          jobRole="Harmonização Corporal"
          description="Médico do esporte, participante da nutrologia, especializado em definição corporal. Com protocolos precisos e estratégias de alta precisão, otimiza os resultados estéticos de seus pacientes com excelência."
        />

        <ProfessionalCard
          avatar={profileImage}
          title="Dra. Erenilda Barbosa"
          jobRole="Estética Íntima"
          description="Médica ginecologista com mais de 20 anos de experiência e professora de pós-graduação em São Paulo. Atua na harmonização glútea e estética íntima, promovendo liberdade e bem-estar para as mulheres."
        />

        <ProfessionalCard
          avatar={profileImage}
          title="Dr. Luiz H. Machado"
          jobRole="Transplante Capilar"
          description="Médico tricologista e cirurgião capilar, especialista em transplante capilar. Formado pela Universidade de Itaúna, ele se dedica a cuidar do bem-estar dos pacientes e transformar vidas através da autoestima."
        />

        <ProfessionalCard
          avatar={profileImage}
          title="Dr. Samuel Montalvão"
          jobRole="Harmonização Facial"
          description="Cirurgião dentista com mais de 7 anos de experiência em Harmonização Orofacial, inclusive elevando a autoestima de famosos. Ele acredita que a harmonização facial é uma forma de ajudar as pessoas a se reencontrarem e aumentarem sua confiança."
        />
      </div>
    </section>
  )
}
