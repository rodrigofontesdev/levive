'use client'

import { ProfessionalCard } from '@/components/ProfessionalCard'
import { motion } from 'motion/react'

import drDiegoBarbosa from '@/assets/dr-diego-barbosa.png'
import drLuisMachado from '@/assets/dr-luis-machado.png'
import drSamuelMontalvao from '@/assets/dr-samuel-montalvao.png'
import draErenildaBarbosa from '@/assets/dra-erenilda-barbosa.png'

export function Professionals({ sectionId }: { sectionId: string }) {
  return (
    <section
      id={sectionId}
      data-section={sectionId}
      className="pt-24 px-5 mb-12 lg:mb-40"
    >
      <motion.div
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <header className="flex flex-col lg:flex-row justify-between gap-10 mb-12 lg:mb-24">
            <h2 className="uppercase text-4xl md:text-5xl -tracking-wider">Nossos especialistas</h2>
            <p className="lg:max-w-screen-sm lg:text-right">
              Nosso time é composto por especialistas, dedicados a proporcionar o que há de melhor
              em inovação e experiência. Estamos preparados para guiá-la na sua jornada de
              transformação, potencializando os seus resultados.
            </p>
          </header>

          <ProfessionalCard
            avatar={drDiegoBarbosa}
            title="Dr. Diego Barbosa"
            jobRole="Harmonização Corporal"
            description="Médico do esporte, participante da nutrologia, especializado em definição corporal. Com protocolos precisos e estratégias de alta precisão, otimiza os resultados estéticos de seus pacientes com excelência."
          />

          <ProfessionalCard
            avatar={draErenildaBarbosa}
            title="Dra. Erenilda Barbosa"
            jobRole="Estética Íntima e Harmonização Glútea"
            description="Médica ginecologista com mais de 20 anos de experiência e professora de pós-graduação em São Paulo. Atua na harmonização glútea e estética íntima, promovendo liberdade e bem-estar para as mulheres."
          />

          <ProfessionalCard
            avatar={drLuisMachado}
            title="Dr. Luis H. Machado"
            jobRole="Transplante e Terapias Capilares"
            description="Médico tricologista e cirurgião capilar, especialista em transplante capilar. Formado pela Universidade de Itaúna, ele se dedica a cuidar do bem-estar dos pacientes e transformar vidas através da autoestima."
          />

          <ProfessionalCard
            avatar={drSamuelMontalvao}
            title="Dr. Samuel Montalvão"
            jobRole="Harmonização Facial"
            description="Cirurgião dentista com mais de 7 anos de experiência em Harmonização Orofacial, inclusive elevando a autoestima de famosos. Ele acredita que a harmonização facial é uma forma de ajudar as pessoas a se reencontrarem e aumentarem sua confiança."
          />
        </div>
      </motion.div>
    </section>
  )
}
