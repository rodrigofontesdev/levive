import { ButtonLink } from '@/components/ButtonLink'
import Image from 'next/image'

import heroImage from '@/assets/hero.jpg'
import submarkImage from '@/assets/submark.svg'

const phoneNumber = '5594991331618'
const message =
  'Olá! 😊 Tenho muito interesse em conhecer a clínica e gostaria de agendar uma avaliação para começar a minha jornada de transformação.'
const chatUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

export function Hero() {
  return (
    <section
      id="home"
      data-section="home"
      className="relative px-0 lg:px-5 mb-36 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full min-h-80 relative lg:absolute lg:right-0 overflow-hidden">
          <Image
            src={heroImage}
            alt="Hero Image"
            fill
            sizes="max(50vw, 1px)"
            className="object-cover object-top lg:object-center animate-zoom-out"
          />
        </div>

        <div className="max-w-screen-xl mx-auto relative">
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 pt-20 px-5 lg:pr-10 lg:pl-0 pb-48 xl:pb-80">
            <h1 className="uppercase text-4xl sm:text-5xl lg:text-6xl leading-tight -tracking-wider">
              Emagrecimento & Harmonização Corporal
            </h1>
            <p className="text-xl font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eum doloribus aliquam
              eius ut iusto provident numquam labore quam corrupti delectus cumque sequi adipisci,
              laudantium dolor fuga, impedit culpa dolorum.
            </p>

            <ButtonLink
              href={chatUrl}
              target="_blank"
            >
              Agendar consulta
            </ButtonLink>

            <div className="absolute bottom-0 xl:bottom-0 animate-bounce">
              <Image
                src={submarkImage}
                alt=""
                width={100}
                height={91}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
