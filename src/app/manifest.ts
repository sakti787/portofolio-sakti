import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sakti Indra Heradewa - Full-Stack Developer Portfolio',
    short_name: 'Sakti Portfolio',
    description: 'Portfolio website showcasing web development projects and skills',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#5755ff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}