'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGlassCheers, FaMicrophone, FaUtensils, FaMusic, FaHeart } from 'react-icons/fa'

const timelineEvents = [
  {
    time: '2:00 – 5:00 PM',
    title: 'Discurso de Bodas y Palabras',
    icon: FaMicrophone,
    description: 'Discurso de bodas en el salón del reino',
  },
  {
    time: '5:30 – 6:30 PM',
    title: 'Hora de Cóctel',
    icon: FaGlassCheers,
    description: 'Recepción de invitados, bebidas y aperitivos ligeros, música ambiental, libro de firmas y fotografías',
  },
  {
    time: '6:30 – 8:00 PM',
    title: 'Cena',
    icon: FaUtensils,
    description: 'Servicio de tres tiempos, discursos especiales entre platillos, música ambiental',
  },
  {
    time: '8:00 – 11:00 PM',
    title: 'Baile y Celebración',
    icon: FaMusic,
    description: 'Primer baile, pista de baile abierta, servicio de bebidas ilimitadas, DJ con iluminación',
  },
  {
    time: '11:00 – 11:30 PM',
    title: 'Cierre',
    icon: FaHeart,
    description: 'Canción especial de cierre, mensaje de agradecimiento, despedida de invitados',
  },
]

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 md:py-32 snap-start bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-7xl text-wedding-black mb-4">
            Cronograma del Día
          </h2>
          <p className="text-wedding-gray max-w-2xl mx-auto text-lg">
            Cada momento ha sido planeado con amor para crear recuerdos inolvidables
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 via-wedding-black to-gray-300" />

          {timelineEvents.map((event, index) => {
            const Icon = event.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:justify-end' : ''
                }`}
              >
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center w-full relative">
                  {isEven ? (
                    <>
                      <div className="w-[45%] text-right pr-12">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="glass-morphism p-6 rounded-lg backdrop-blur-sm bg-white/80 shadow-lg cursor-pointer"
                        >
                          <p className="text-wedding-gray text-sm tracking-wider mb-2">{event.time}</p>
                          <h3 className="font-playfair text-2xl text-wedding-black mb-3">{event.title}</h3>
                          <p className="text-wedding-gray text-sm leading-relaxed">{event.description}</p>
                        </motion.div>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-wedding-black flex items-center justify-center z-10">
                        <Icon className="text-wedding-black text-lg" />
                      </div>
                      <div className="w-[45%] ml-auto" />
                    </>
                  ) : (
                    <>
                      <div className="w-[45%]" />
                      <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-wedding-black flex items-center justify-center z-10">
                        <Icon className="text-wedding-black text-lg" />
                      </div>
                      <div className="w-[45%] text-left pl-12 ml-auto">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className="glass-morphism p-6 rounded-lg backdrop-blur-sm bg-white/80 shadow-lg cursor-pointer"
                        >
                          <p className="text-wedding-gray text-sm tracking-wider mb-2">{event.time}</p>
                          <h3 className="font-playfair text-2xl text-wedding-black mb-3">{event.title}</h3>
                          <p className="text-wedding-gray text-sm leading-relaxed">{event.description}</p>
                        </motion.div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="flex md:hidden items-center w-full pl-20">
                  <div className="absolute left-8 w-10 h-10 bg-white rounded-full border-4 border-wedding-black flex items-center justify-center z-10">
                    <Icon className="text-wedding-black text-sm" />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-morphism p-5 rounded-lg backdrop-blur-sm bg-white/80 shadow-lg w-full"
                  >
                    <p className="text-wedding-gray text-xs tracking-wider mb-2">{event.time}</p>
                    <h3 className="font-playfair text-xl text-wedding-black mb-2">{event.title}</h3>
                    <p className="text-wedding-gray text-sm leading-relaxed">{event.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
