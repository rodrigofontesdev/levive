'use client'

import { ButtonLink } from '@/components/ButtonLink'
import { motion } from 'motion/react'
import { clickToChat } from '@/helpers/app'
import Image from 'next/image'

import heroBannerImage from '@/assets/hero-banner.png'
import submarkImage from '@/assets/levive-submark-black.svg'

export function Hero({ sectionId }: { sectionId: string }) {
  return (
    <section
      id={sectionId}
      data-section={sectionId}
      className="w-full min-h-[80vh] relative flex flex-col-reverse lg:flex-row justify-center lg:px-5 mb-12 lg:mb-24"
    >
      <div className="max-w-screen-xl">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-between gap-20 relative pt-12 xl:pt-24 px-5 lg:px-0 z-20">
          <motion.div
            className="flex flex-col items-start gap-5 lg:gap-10 pr-0 lg:pr-12"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <h1 className="uppercase text-[2.5rem] md:text-5xl lg:text-7xl leading-tight -tracking-wider">
              Desperte sua melhor versão
            </h1>

            <p className="lg:text-xl font-light">
              Da harmonização facial ao corporal, nossa tecnologia avançada e profissionais
              especializados cuidam da sua transformação com resultados duradouros para sua
              autoestima.
            </p>

            <ButtonLink
              href={clickToChat()}
              target="_blank"
            >
              Agendar consulta
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ y: -25 }}
            animate={{ y: [-25, 0, -25] }}
            transition={{ duration: 1, delay: 1, ease: 'easeInOut', repeat: Infinity }}
            className="w-16 lg:w-24"
          >
            <Image
              src={submarkImage}
              alt=""
              aria-hidden={true}
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-full relative lg:absolute lg:top-0 lg:right-0 lg:z-10">
        <div className="w-full h-96 lg:h-full relative flex overflow-hidden">
          <motion.div
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={heroBannerImage}
              fill
              quality={100}
              alt="Na imagem estão a Dra. Erenilda Barbosa à esquerda, Dr. Diego Barbosa no meio, Dr. Samuel Montalvão e Dr. Luis Machado à direita, respectivamente. Todos na foto estão em pé, com sorriso no rosto e roupas elegantes"
              className="object-cover object-top lg:object-[50%_50%_0px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
