import Image, { StaticImageData } from 'next/image'

type ServiceCardProps = {
  cover: StaticImageData
  title: string
  description: string
}

export function ServiceCard({ cover, title, description }: ServiceCardProps) {
  return (
    <article className="h-[664px] relative group">
      <Image
        src={cover}
        sizes="max(50vw, 1px)"
        fill
        alt={title}
        className="object-cover object-center"
      />

      <div className="absolute right-0 bottom-0 left-0 z-20 py-5 px-10 group-hover:-translate-y-10 transition-transform duration-300 ease-in will-change-transform">
        <h3 className="uppercase text-5xl text-center text-white -tracking-wider mb-14">{title}</h3>

        <p className="text-lg text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in will-change-[opacity]">
          {description}
        </p>
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-900/15 to-neutral-900" />
    </article>
  )
}
