import { ButtonLink } from '@/components/ButtonLink'
import { openGraph, twitterCard } from './shared-metadata'
import { Metadata } from 'next'

const title = `404 | ${process.env.NEXT_PUBLIC_APP_SHORT_NAME}`
const description = `Ops! O conteúdo que você está tentando acessar não existe ou foi removido temporariamente.`

export const metadata: Metadata = {
  title: title,
  description: description,
  alternates: {
    canonical: '/politica-de-cookies',
  },
  openGraph: {
    ...openGraph,
    title: title,
    description: description,
    url: '/politica-de-cookies',
  },
  twitter: {
    ...twitterCard,
    title: title,
    description: description,
  },
  robots: {
    follow: false,
    index: false,
  },
}

export default function NotFound() {
  return (
    <main>
      <section>
        <div className="max-w-screen-xl mx-auto py-16 lg:py-28 px-5">
          <span className="block uppercase text-[10rem] text-center font-bold mb-5">404</span>
          <h1 className="uppercase text-4xl text-center -tracking-wider mb-10">
            Página não encontrada
          </h1>

          <p className="text-center mb-10">
            A página que você está procurando não existe ou pode ter sido removida temporariamente.
          </p>

          <div className="text-center">
            <ButtonLink href="/">Página Inicial</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
