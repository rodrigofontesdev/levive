import localFont from 'next/font/local'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton'
import { CookieDialog } from '@/components/CookieDialog'
import { cookies } from 'next/headers'
import { Metadata, Viewport } from 'next'
import { commom, openGraph, robots, twitterCard } from './shared-metadata'

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'swiper/css'
import 'swiper/css/navigation'
import './globals.css'

config.autoAddCss = false

const dupletOpen = localFont({
  src: [
    {
      path: '../assets/fonts/duplet-open-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/duplet-open-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/duplet-open-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-duplet-open',
})

const daxlinePro = localFont({
  src: [
    {
      path: '../assets/fonts/daxline-pro-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/daxline-pro-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-daxline-pro',
})

const title = `${process.env.NEXT_PUBLIC_APP_SHORT_NAME} | Beleza não se sustenta sem saúde`
const description =
  'Clínica especializada em tratamentos para emagrecimento e harmonização corporal. Descubra uma nova perspectiva de saúde e beleza com a Clínica Levive!'

export const metadata: Metadata = {
  ...commom,
  title: title,
  description: description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    ...openGraph,
    title: title,
    description: description,
    url: '/',
  },
  twitter: {
    ...twitterCard,
    title: title,
    description: description,
  },
  robots: {
    ...robots,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
  themeColor: 'black',
  colorScheme: 'dark',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const hasCookieConsent = cookieStore.has('levive_cookie_consent')

  return (
    <html lang="pt-BR">
      <body
        className={`${dupletOpen.variable} ${daxlinePro.variable} bg-muted text-lg text-black leading-normal antialiased`}
      >
        {!hasCookieConsent && <CookieDialog />}

        <Header />
        {children}
        <Footer />

        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
