import { ReactNode } from 'react'
import { Metadata } from 'next'
import { openGraph, twitterCard } from '../shared-metadata'

const title = `Blog | ${process.env.NEXT_PUBLIC_APP_SHORT_NAME}`
const description =
  'Explore nosso blog para obter as últimas tendências, dicas e insights de especialistas. Seu guia de bem-estar e saúde começa aqui.'

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    ...openGraph,
    title: title,
    description: description,
    url: '/blog',
  },
  twitter: {
    ...twitterCard,
    title: title,
    description: description,
  },
}

type BlogArchiveLayoutProps = {
  children: ReactNode
}

export default function BlogArchiveLayout({ children }: BlogArchiveLayoutProps) {
  return (
    <main>
      <section>
        <div className="bg-black py-40 px-5">
          <h1 className="uppercase text-5xl sm:text-7xl text-center text-white">Blog</h1>
        </div>

        <div className="px-5">
          <div className="max-w-screen-xl mx-auto">{children}</div>
        </div>
      </section>
    </main>
  )
}
