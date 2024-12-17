import localFont from 'next/font/local'
import { config } from '@fortawesome/fontawesome-svg-core'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton'

import '@fortawesome/fontawesome-svg-core/styles.css'
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${dupletOpen.variable} ${daxlinePro.variable} bg-slate-50 text-lg text-black leading-normal antialiased scroll-smooth`}
      >
        <Header />
        {children}
        <Footer />

        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
