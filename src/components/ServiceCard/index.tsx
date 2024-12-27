'use client'

import Image, { StaticImageData } from 'next/image'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

type ServiceCardProps = {
  cover: StaticImageData
  title: string
  description: string
}

export function ServiceCard({ cover, title, description }: ServiceCardProps) {
  const [device, setDevice] = useState<'mobile' | 'desktop'>('mobile')

  function changeDevice() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      setDevice('desktop')
    } else {
      setDevice('mobile')
    }
  }

  useEffect(() => {
    changeDevice()

    window.addEventListener('resize', changeDevice)

    return () => window.removeEventListener('resize', changeDevice)
  }, [])

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
        className="absolute inset-0 z-10 flex flex-col justify-end items-center gap-8 lg:gap-12 p-5 sm:p-10 sm:pb-5"
      >
        {device === 'desktop' ? (
          <>
            <motion.div
              initial={{ y: 0 }}
              variants={{ hovered: { y: -50 } }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <h3 className="uppercase text-4xl md:text-5xl text-muted text-center -tracking-wider">
                {title}
              </h3>
            </motion.div>

            <motion.div
              initial={{ y: 0, opacity: 0 }}
              variants={{ hovered: { y: -50, opacity: 1 } }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <p className="min-h-14 lg:text-xl text-muted text-center font-light">{description}</p>
            </motion.div>
          </>
        ) : (
          <>
            <h3 className="uppercase text-4xl md:text-5xl text-muted text-center -tracking-wider -translate-y-[50px]">
              {title}
            </h3>

            <p className="min-h-14 lg:text-xl text-muted text-center font-light -translate-y-[50px]">
              {description}
            </p>
          </>
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/15 to-neutral-900" />
    </article>
  )
}
