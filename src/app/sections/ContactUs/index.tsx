'use client'

import { Faq } from '@/components/Faq'
import { ContactForm } from '../ContactForm'
import { motion } from 'motion/react'

export function ContactUs({ sectionId }: { sectionId: string }) {
  return (
    <section
      id={sectionId}
      data-section={sectionId}
      className="bg-very-dark-brown py-20 lg:py-32 px-5"
    >
      <motion.div
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row gap-20 lg:gap-10 xl:gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="uppercase text-4xl md:text-5xl text-muted -tracking-wider mb-12">
              Dúvidas Frequentes
            </h2>

            <Faq.Root defaultItem="question-1">
              <Faq.Item
                name="question-1"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
              >
                <Faq.Content>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi reiciendis
                  ratione nobis ea repellendus, eum culpa molestias optio atque excepturi vitae vel
                  cupiditate a eveniet provident modi. Dolore, pariatur.
                </Faq.Content>
              </Faq.Item>

              <Faq.Item
                name="question-2"
                title="Nulla dapibus leo in aliquam porta?"
              >
                <Faq.Content>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi reiciendis
                  ratione nobis ea repellendus, eum culpa molestias optio atque excepturi vitae vel
                  cupiditate a eveniet provident modi. Dolore, pariatur.
                </Faq.Content>
              </Faq.Item>

              <Faq.Item
                name="question-3"
                title="Maecenas euismod mauris tristique, vehicula nisi a?"
              >
                <Faq.Content>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi reiciendis
                  ratione nobis ea repellendus, eum culpa molestias optio atque excepturi vitae vel
                  cupiditate a eveniet provident modi. Dolore, pariatur.
                </Faq.Content>
              </Faq.Item>

              <Faq.Item
                name="question-4"
                title="Morbi rhoncus felis et erat rhoncus, at dapibus mi tempus?"
              >
                <Faq.Content>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi reiciendis
                  ratione nobis ea repellendus, eum culpa molestias optio atque excepturi vitae vel
                  cupiditate a eveniet provident modi. Dolore, pariatur.
                </Faq.Content>
              </Faq.Item>

              <Faq.Item
                name="question-5"
                title="Pellentesque vitae nulla sed risus interdum pharetra?"
              >
                <Faq.Content>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi reiciendis
                  ratione nobis ea repellendus, eum culpa molestias optio atque excepturi vitae vel
                  cupiditate a eveniet provident modi. Dolore, pariatur.
                </Faq.Content>
              </Faq.Item>
            </Faq.Root>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="uppercase text-4xl md:text-5xl text-muted -tracking-wider mb-12">
              Fale Conosco
            </h2>

            <ContactForm />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
