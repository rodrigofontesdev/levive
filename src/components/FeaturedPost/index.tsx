import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type FeaturedPostProps = {
  cover: StaticImageData
  slug: string
  title: string
  description: string
}

export function FeaturedPost({ cover, slug, title, description }: FeaturedPostProps) {
  return (
    <article className="w-full lg:w-1/2 flex flex-col gap-5">
      <Link
        href={slug}
        className="group"
      >
        <div className="h-96 relative overflow-hidden">
          <Image
            src={cover}
            alt={title}
            width={640}
            height={480}
            className="object-cover object-center group-hover:hover:scale-110 transition-all duration-300 overflow-hidden"
          />
        </div>
      </Link>

      <Link href={slug}>
        <h3 className="uppercase text-2xl sm:text-3xl -tracking-wider">{title}</h3>
      </Link>

      <p>{description}</p>
    </article>
  )
}
