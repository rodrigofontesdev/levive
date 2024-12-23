'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

type PostProps = {
  cover: StaticImageData
  slug: string
  title: string
  description: string
}

export function Post({ cover, slug, title, description }: PostProps) {
  return (
    <article className="w-full flex flex-col gap-5">
      <Link
        href={slug}
        className="block overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="w-full h-[360px] lg:h-[480px] relative"
        >
          <Image
            src={cover}
            sizes="max(50vw, 1px)"
            fill
            alt={title}
            className="object-cover object-center"
          />
        </motion.div>
      </Link>

      <Link
        href={slug}
        className="hover:underline"
      >
        <h3 className="uppercase text-2xl md:text-3xl -tracking-wider">{title}</h3>
      </Link>

      <p className="text-base">{description}</p>
    </article>
  )
}
