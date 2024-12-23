'use client'

import { ButtonLink } from '@/components/ButtonLink'
import { clickToChat } from '@/helpers/app'
import { motion } from 'motion/react'

export function CallToAction() {
  return (
    <section className="bg-light-brown py-20 lg:py-32 px-5 mb-12 lg:mb-24">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="max-w-screen-md mx-auto flex flex-col items-center gap-10">
          <h2 className="uppercase text-4xl md:text-5xl text-center -tracking-wider">
            Venha viver a experiência Levive
          </h2>
          <p className="text-center">
            Se você deseja alcançar uma transformação natural e personalizada, agende sua consulta e
            inicie sua jornada rumo a uma vida mais saudável.
          </p>

          <ButtonLink
            href={clickToChat()}
            target="_blank"
          >
            Agendar consulta
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  )
}
