import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'V & S | Valeria & Salvador - 4 de Enero, 2026',
  description: 'Únete a nosotros en la celebración de nuestro amor. Valeria & Salvador - 4 de Enero, 2026',
  keywords: 'boda, wedding, Salvador, Valeria, enero 2026',
  openGraph: {
    title: 'Valeria & Salvador - Nuestra Boda',
    description: 'Únete a nosotros en la celebración de nuestro amor - 4 de Enero, 2026',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="font-montserrat bg-white text-wedding-black antialiased">
        {children}
      </body>
    </html>
  )
}
