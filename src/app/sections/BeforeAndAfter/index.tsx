'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'

import beforeImage from '@/assets/before.svg'
import afterImage from '@/assets/after.svg'
import before2Image from '@/assets/before2.svg'
import after2Image from '@/assets/after2.svg'

export function BeforeAndAfter() {
  return (
    <section className="mb-48 px-5">
      <div className="max-w-screen-xl mx-auto">
        <header className="flex flex-col lg:flex-row justify-between gap-10 mb-12 lg:mb-24">
          <h2 className="uppercase text-4xl sm:text-5xl -tracking-wider flex-shrink-0">
            Transformações Reais
          </h2>
          <p className="text-lg lg:text-right lg:max-w-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eveniet optio nesciunt
            consequuntur ipsam iusto magnam nulla! Ut quod labore quo earum dolores ea eveniet fugit
            optio dolorum dolore. Laudantium.
          </p>
        </header>

        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={2}
          slidesPerGroup={2}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 4,
            },
          }}
          navigation
          grabCursor
          rewind
        >
          <SwiperSlide>
            <Image
              src={beforeImage}
              alt=""
              width={400}
              height={600}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={afterImage}
              alt=""
              width={400}
              height={600}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={before2Image}
              alt=""
              width={400}
              height={600}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={after2Image}
              alt=""
              width={400}
              height={600}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={beforeImage}
              alt=""
              width={400}
              height={600}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={afterImage}
              alt=""
              width={400}
              height={600}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
