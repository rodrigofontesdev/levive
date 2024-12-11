import { ButtonLink } from '@/components/ButtonLink'
import Image from 'next/image'

import heroImage from '@/assets/hero.jpg'
import submarkImage from '@/assets/submark.svg'

export function Hero() {
  return (
    <section className="relative px-5">
      <div className="w-1/2 h-full absolute right-0">
        <Image
          src={heroImage}
          alt="Hero Image"
          fill
          sizes="max(50vw, 1px)"
          className="object-cover object-center grayscale"
        />
      </div>

      <div className="max-w-screen-xl mx-auto relative">
        <div className="w-1/2 flex flex-col items-start gap-8 pt-20 pr-10 pb-60">
          <h1 className="uppercase text-7xl leading-tight -tracking-wider">
            Descubra uma nova perspectiva de saúde e beleza
          </h1>
          <p className="text-xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum doloribus aliquam eius
            ut iusto provident numquam labore quam corrupti delectus cumque sequi adipisci,
            laudantium dolor fuga, impedit culpa dolorum.
          </p>

          <ButtonLink href="#">Agendar consulta</ButtonLink>

          <div className="absolute bottom-0 animate-bounce">
            <Image
              src={submarkImage}
              alt=""
              width={100}
              height={91}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
