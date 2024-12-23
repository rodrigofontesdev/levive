'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { motion } from 'motion/react'

import beforeImage from '@/assets/before.svg'
import afterImage from '@/assets/after.svg'

export function BeforeAndAfter() {
  return (
    <section className="pt-12 px-5 mb-24 lg:mb-40">
      <motion.div
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="max-w-screen-xl mx-auto">
          <header className="flex flex-col lg:flex-row justify-between gap-10 mb-12 lg:mb-24">
            <h2 className="uppercase text-4xl md:text-5xl -tracking-wider">Transformações Reais</h2>
            <p className="lg:max-w-[680px] lg:text-right">
              Resultados que transformam vidas e inspiram confiança. Conheça as histórias de
              pacientes que já realizaram seus sonhos em nossa clínica, com procedimentos seguros e
              resultados naturais que respeitam a beleza única de cada pessoa.
            </p>
          </header>

          <div className="max-w-[50rem] lg:max-w-none mx-auto lg:mx-0">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={2}
              slidesPerGroup={2}
              pagination
              grabCursor
              autoplay
              loop
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 4,
                },
              }}
            >
              <SwiperSlide className="w-[25rem]">
                <Image
                  src={beforeImage}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="w-[25rem]">
                <Image
                  src={afterImage}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="w-[25rem]">
                <Image
                  src={beforeImage}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="w-[25rem]">
                <Image
                  src={afterImage}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="w-[25rem]">
                <Image
                  src={beforeImage}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className="w-[25rem]">
                <Image
                  src={afterImage}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
