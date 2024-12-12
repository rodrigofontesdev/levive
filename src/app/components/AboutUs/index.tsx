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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, debitis? Eveniet nobis,
            non ducimus, autem deserunt cumque ipsa expedita placeat perspiciatis fugit numquam
            blanditiis, mollitia ex tenetur illum hic eius.
          </p>

          <ButtonLink href="#">Call to action</ButtonLink>
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
