import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type PostProps = {
  cover: StaticImageData
  slug: string
  title: string
  description: string
}

export function Post({ cover, slug, title, description }: PostProps) {
  return (
    <article className="w-full flex flex-col gap-5">
      <Link
        href={slug}
        className="group"
      >
        <div className="h-96 relative overflow-hidden">
          <Image
            src={cover}
            alt={title}
            fill
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
