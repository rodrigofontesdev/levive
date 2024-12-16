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
    <article className="w-1/2 flex flex-col gap-5">
      <Link href={slug}>
        <Image
          src={cover}
          alt={title}
          width={640}
          height={480}
        />
      </Link>

      <Link href={slug}>
        <h3 className="uppercase text-3xl -tracking-wider">{title}</h3>
      </Link>

      <p>{description}</p>
    </article>
  )
}
