'use client'

import { ButtonLink } from '@/components/ButtonLink'
import { Post } from '@/components/Post'
import { motion } from 'motion/react'

import postOneImage from '@/assets/post-1.jpg'
import postTwoImage from '@/assets/post-2.jpg'

export function Blog({ sectionId }: { sectionId: string }) {
  return (
    <section
      id={sectionId}
      data-section={sectionId}
      className="pt-12 px-5 mb-24 lg:mb-40"
    >
      <motion.div
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <header className="flex flex-col lg:flex-row justify-between gap-10 mb-12">
            <h2 className="uppercase text-4xl md:text-5xl -tracking-wider">Blog</h2>
            <p className="lg:max-w-screen-sm lg:text-right">
              Explore nosso blog para obter as últimas tendências, dicas e insights de
              especialistas. Seu guia de bem-estar e saúde começa aqui.
            </p>
          </header>

          <div className="flex lg:justify-end mb-12">
            <ButtonLink href="/blog">Ver Blog</ButtonLink>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <Post
              cover={postOneImage}
              slug="/blog/post-slug"
              title="Assumenda doloremque voluptatibus nesciunt esse corrupti"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illo ipsum! Quis sapiente
        natus, tempore repellendus numquam ab nemo dolores ex, mollitia maxime accusamus, officia
        ullam beatae voluptatem unde eius!"
            />

            <Post
              cover={postTwoImage}
              slug="/blog/post-slug"
              title="Assumenda doloremque voluptatibus nesciunt esse corrupti"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illo ipsum! Quis sapiente
        natus, tempore repellendus numquam ab nemo dolores ex, mollitia maxime accusamus, officia
        ullam beatae voluptatem unde eius!"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
