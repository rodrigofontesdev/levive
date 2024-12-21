/* eslint-disable camelcase */
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: process.env.NEXT_PUBLIC_APP_NAME,
    short_name: process.env.NEXT_PUBLIC_APP_SHORT_NAME,
    description: `Site oficial da ${process.env.NEXT_PUBLIC_APP_NAME}.`,
    scope: '/',
    id: '/',
    start_url: '/',
    background_color: '#F2F3EE',
    theme_color: '#F2F3EE',
    display: 'standalone',
    orientation: 'any',
    launch_handler: {
      client_mode: ['auto'],
    },
    icons: [
      {
        sizes: '48x48',
        src: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  }
}
