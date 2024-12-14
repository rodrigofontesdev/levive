import { ButtonLink } from '@/components/ButtonLink'
import Image from 'next/image'

import placeholderLargeImage from '@/assets/990x900.svg'
import placeholderSmallImage from '@/assets/440x490.svg'

export function AboutUs() {
  return (
    <section className="flex justify-between items-center relative py-36">
      <div className="w-1/2 h-[900px] relative">
        <Image
          src={placeholderLargeImage}
          alt="Placeholder Image"
          fill
          sizes="max(50vw, 1px)"
          className="object-cover object-center"
        />

        <div className="max-w-xl bg-white absolute bottom-[20%] -right-[18rem] flex flex-col items-start gap-7 p-14">
          <h2 className="uppercase text-5xl -tracking-wider">Sobre nós</h2>
          <p className="text-lg">
            A Clínica Levive está pronta para receber você em espaços especialmente planejados para
            promover bem-estar e saúde. Nossa clínica conta com 4 consultórios, preparados para
            atender todas as especialidades que oferecemos.
          </p>
          <p className="text-lg">
            Cada detalhe foi pensado com carinho para garantir que sua experiência seja a melhor
            possível.
          </p>

          {/* <ButtonLink href="#">Call to action</ButtonLink> */}
        </div>
      </div>

      <div className="w-[440px] h-[490px] relative">
        <Image
          src={placeholderSmallImage}
          alt="Placeholder Image"
          fill
          sizes="440px"
          className="object-cover object-center"
        />
      </div>
    </section>
  )
}
