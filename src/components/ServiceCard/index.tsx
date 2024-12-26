'use client'

import Image, { StaticImageData } from 'next/image'
import { motion } from 'motion/react'

type ServiceCardProps = {
  cover: StaticImageData
  title: string
  description: string
}

export function ServiceCard({ cover, title, description }: ServiceCardProps) {
  return (
    <article className="w-full h-full relative overflow-hidden">
      <motion.div
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="w-full h-full relative"
      >
        <Image
          src={cover}
          fill
          sizes="max(50vw, 1px)"
          alt={title}
          className="object-cover object-center"
        />
      </motion.div>

      <motion.div
        whileHover="hovered"
        whileTap="tapped"
        className="absolute inset-0 z-10 flex flex-col justify-end items-center gap-12 p-10 pb-5"
      >
        <motion.div
          initial={{ y: 0 }}
          variants={{ hovered: { y: -50 }, tapped: { y: -50, opacity: 1 } }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h3 className="uppercase text-4xl md:text-5xl text-muted text-center -tracking-wider">
            {title}
          </h3>
        </motion.div>

        <motion.div
          initial={{ y: 0, opacity: 0 }}
          variants={{ hovered: { y: -50, opacity: 1 }, tapped: { y: -50, opacity: 1 } }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="min-h-14"
        >
          <p className="lg:text-xl text-muted text-center font-light">{description}</p>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/15 to-neutral-900" />
    </article>
  )
}
