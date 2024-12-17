export const commom = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}/manifest.json`,
  applicationName: `${process.env.NEXT_PUBLIC_APP_NAME}`,
  authors: [
    {
      name: 'A Internet Group',
      url: 'https://ainternetgroup.com',
    },
    {
      name: 'Rodrigo Fontes',
      url: 'https://rodrigofontes.dev',
    },
  ],
  creator: 'Rodrigo Fontes',
  publisher: 'A Internet Group',
}

export const openGraph = {
  siteName: process.env.NEXT_PUBLIC_APP_NAME,
  type: 'website',
  countryName: 'Brazil',
  locale: 'pt_BR',
  images: [
    {
      url: '1200x630.svg',
      secureUrl: '1200x630.svg',
      alt: '',
      type: 'image/svg+xml',
      width: 1200,
      height: 630,
    },
    {
      url: '600x315.svg',
      alt: '',
      type: 'image/svg+xml',
      width: 600,
      height: 315,
    },
  ],
}

export const twitterCard = {
  card: 'summary_large_image',
  images: [
    {
      url: '1024x512.svg',
      alt: '',
      type: 'image/svg+xml',
      width: 1024,
      height: 512,
    },
  ],
}

export const robots = {
  follow: true,
  index: true,
  nocache: true,
}
