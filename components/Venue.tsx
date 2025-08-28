'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa'

export default function Venue() {
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
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-7xl text-wedding-black mb-4">
            Ceremonia y Recepción
          </h2>
          <p className="text-wedding-gray max-w-2xl mx-auto text-lg">
            Un lugar mágico donde celebraremos el comienzo de nuestra nueva vida juntos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-morphism p-8 rounded-lg backdrop-blur-sm bg-white/80 shadow-lg">
              <h3 className="font-playfair text-3xl mb-6">Detalles del Evento</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-wedding-black mr-4 text-xl" />
                  <div>
                    <p className="font-semibold">Fecha</p>
                    <p className="text-wedding-gray">Domingo, 4 de Enero de 2026</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaClock className="text-wedding-black mr-4 text-xl" />
                  <div>
                    <p className="font-semibold">Hora</p>
                    <p className="text-wedding-gray">5:00 PM - 11:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-wedding-black mr-4 text-xl" />
                  <div>
                    <p className="font-semibold">Lugar</p>
                    <p className="text-wedding-gray">Quinta los Agapantos</p>
                    <p className="text-wedding-gray text-sm">Cam. a las Moras 1532</p>
                    <p className="text-wedding-gray text-sm">45640 San Agustín, Jal.</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/iSL9ma1MWhJbBRNy6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full bg-wedding-black text-white py-3 px-6 rounded-lg magnetic-hover tracking-wider block text-center"
              >
                VER EN GOOGLE MAPS
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-96 md:h-auto"
          >
            <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.647801098319!2d-103.48205042310349!3d20.561586503657093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ab34abadeeef%3A0xd1064427b36cb43e!2sQuinta%20Los%20Agapantos!5e0!3m2!1ses-419!2smx!4v1756395756842!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
