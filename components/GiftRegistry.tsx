'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGift, FaExternalLinkAlt } from 'react-icons/fa'

export default function GiftRegistry() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 md:py-32 snap-start bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-playfair text-5xl md:text-7xl text-wedding-black mb-4">
            Mesa de Regalos
          </h2>
          <p className="text-wedding-gray max-w-2xl mx-auto text-lg mb-12">
            Su presencia es nuestro mejor regalo, pero si desean obsequiarnos algo, 
            hemos preparado algunas opciones
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.a
              href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51750080"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass-morphism p-8 rounded-lg backdrop-blur-sm bg-white/80 shadow-lg cursor-pointer group block"
            >
              <FaGift className="text-4xl text-wedding-black mx-auto mb-4" />
              <h3 className="font-playfair text-2xl mb-2">Liverpool</h3>
              <p className="text-wedding-gray text-sm mb-4">Mesa de regalos #51750080</p>
              <div className="flex items-center justify-center text-wedding-black group-hover:text-gray-600 transition-colors">
                <span className="mr-2 text-sm">Ver mesa</span>
                <FaExternalLinkAlt className="text-xs" />
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="glass-morphism p-8 rounded-lg backdrop-blur-sm bg-white/80 shadow-lg cursor-pointer group"
            >
              <FaGift className="text-4xl text-wedding-black mx-auto mb-4" />
              <h3 className="font-playfair text-2xl mb-2">Sobre de Regalo</h3>
              <p className="text-wedding-gray text-sm mb-4">Disponible en recepción</p>
              <div className="flex items-center justify-center text-wedding-black">
                <span className="text-sm">En el evento</span>
              </div>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-wedding-black text-white py-4 px-8 rounded-lg magnetic-hover tracking-wider inline-flex items-center"
          >
            <FaGift className="mr-3" />
            VER TODAS LAS OPCIONES
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
