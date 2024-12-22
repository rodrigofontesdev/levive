import Image from 'next/image'

import aboutUsLargeImage from '@/assets/about-us-1.jpg'
import aboutUsSmallImage from '@/assets/about-us-2.jpg'

export function AboutUs() {
  return (
    <section
      id="sobre"
      data-section="sobre"
      className="flex flex-col lg:flex-row justify-between items-center gap-y-24 relative mb-48"
    >
      <div className="w-full lg:w-1/2 h-96 lg:h-[900px] relative">
        <Image
          src={aboutUsLargeImage}
          alt="Placeholder Image"
          fill
          sizes="max(50vw, 1px)"
          className="object-cover object-center"
        />
      </div>

      <div className="w-full max-w-[calc(100%-2.5rem)] md:max-w-screen-sm bg-white absolute bottom-1/2 translate-y-1/2 -translate-x-1/2 left-1/2 z-10 flex flex-col items-start gap-7 p-14">
        <h2 className="uppercase text-4xl sm:text-5xl -tracking-wider">Sobre nós</h2>
        <p className="text-lg">
          A Clínica Levive está pronta para receber você em espaços especialmente planejados para
          promover bem-estar e saúde. Nossa clínica conta com 4 consultórios, preparados para
          atender todas as especialidades que oferecemos.
        </p>
        <p className="text-lg">
          Cada detalhe foi pensado com carinho para garantir que sua experiência seja a melhor
          possível.
        </p>
      </div>

      <div className="w-full lg:w-[440px] h-96 lg:h-[490px] relative">
        <Image
          src={aboutUsSmallImage}
          alt="Placeholder Image"
          fill
          sizes="440px"
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
