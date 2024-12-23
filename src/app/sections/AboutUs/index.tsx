'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

import aboutUsLargeImage from '@/assets/about-us-1.jpg'
import aboutUsSmallImage from '@/assets/about-us-2.jpg'

export function AboutUs({ sectionId }: { sectionId: string }) {
  return (
    <section
      id={sectionId}
      data-section={sectionId}
      className="flex flex-col lg:flex-row justify-between items-center gap-24 relative pt-12 mb-12 lg:mb-24"
    >
      <div className="w-full lg:w-1/2 h-96 lg:h-[900px] relative z-10">
        <Image
          src={aboutUsLargeImage}
          fill
          sizes="50vw"
          alt=""
          className="object-cover object-center"
        />
      </div>

      <div className="w-full absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 z-30 px-5">
        <motion.div
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
        >
          <div className="w-full max-w-screen-sm mx-auto flex flex-col gap-7 bg-white p-7 md:p-14">
            <h2 className="uppercase text-4xl md:text-5xl -tracking-wider">Sobre nós</h2>
            <p>
              A Clínica Levive está pronta para receber você em espaços especialmente planejados
              para promover bem-estar e saúde. Nossa clínica conta com 4 consultórios, preparados
              para atender todas as especialidades que oferecemos.
            </p>
            <p>
              Cada detalhe foi pensado para garantir que sua experiência seja a melhor possível.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="w-full lg:w-[440px] h-96 lg:h-[490px] relative z-20">
        <Image
          src={aboutUsSmallImage}
          fill
          sizes="440px"
          alt=""
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
