'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPalette } from 'react-icons/fa'

export default function DressCode() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 snap-start">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 uppercase tracking-[0.4em] text-xs text-wedding-gray mb-6">
            <FaPalette className="text-wedding-black" />
            <span>Código de vestimenta</span>
          </div>
          <h2 className="font-playfair text-5xl md:text-6xl text-wedding-black mb-6">
            Elegancia que armonice
          </h2>
          <p className="text-wedding-gray max-w-3xl mx-auto text-lg leading-relaxed mb-6">
            Para mantener una armonía en los colores del evento, les pedimos de la manera más atenta evitar el color
            rojo en su vestimenta. El código es de gala: pueden elegir libremente el resto de los tonos siempre que
            mantengan un estándar elegante. ¡Gracias por entender!
          </p>
          <p className="text-wedding-gray max-w-3xl mx-auto text-lg leading-relaxed">
            Les sugerimos cordialmente ir bien abrigados, ya que estará haciendo frío. Queremos que se sientan cómodos
            durante toda la celebración.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
