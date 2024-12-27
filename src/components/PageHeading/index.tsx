import Image from 'next/image'

import pageHeadingImage from '@/assets/page-heading-background.jpg'

type PageHeadingProps = {
  title: string
}

export function PageHeading({ title }: PageHeadingProps) {
  return (
    <div className="relative bg-very-dark-brown py-24 lg:py-40 px-5">
      <Image
        src={pageHeadingImage}
        fill
        sizes="100vw"
        priority
        alt=""
        className="object-cover object-top"
      />

      <div className="absolute inset-0 bg-very-dark-brown/35" />

      <h1 className="relative z-10 uppercase text-4xl md:text-5xl lg:text-7xl text-muted text-center leading-tight -tracking-wider">
        {title}
      </h1>
    </div>
  )
}
