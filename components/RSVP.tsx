'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function RSVP() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    script.onload = () => {
      // @ts-ignore
      if (typeof window.Tally !== 'undefined') {
        // @ts-ignore
        window.Tally.loadEmbeds()
      }
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section className="py-20 md:py-32 snap-start bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-7xl text-wedding-black mb-4">
            Confirmación de Asistencia
          </h2>
          <p className="text-wedding-gray max-w-2xl mx-auto text-lg">
            Por favor, confirma tu asistencia antes del 15 de diciembre de 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-morphism p-4 md:p-8 rounded-lg backdrop-blur-sm bg-white/80 shadow-lg">
            <iframe 
              data-tally-src="https://tally.so/embed/meVEAl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="1034" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Formulario de Confirmación - Boda V & S"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
