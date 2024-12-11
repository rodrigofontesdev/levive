import localFont from 'next/font/local'

import './globals.css'

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
        className={`${dupletOpen.variable} ${daxlinePro.variable} text-black antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  )
}
