'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHeart } from 'react-icons/fa'

const storyEvents = [
  {
    year: '2018',
    title: 'El Primer Encuentro',
    description: 'Nuestros caminos se cruzaron en una tarde de primavera. Una mirada, una sonrisa, y el destino comenzó a escribir nuestra historia.',
  },
  {
    year: '2020',
    title: 'El Primer "Te Amo"',
    description: 'Entre risas y complicidad, descubrimos que habíamos encontrado algo especial. Tres palabras que cambiaron todo.',
  },
  {
    year: '2023',
    title: 'La Propuesta',
    description: 'Bajo las estrellas, con el corazón latiendo fuerte, llegó la pregunta que soñábamos. Un "sí" lleno de amor y promesas.',
  },
  {
    year: '2026',
    title: 'Nuestro Gran Día',
    description: 'El comienzo de nuestra aventura como esposos. Un nuevo capítulo lleno de amor, risas y sueños compartidos.',
  },
]

export default function OurStory() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            Nuestra Historia
          </h2>
          <p className="text-wedding-gray max-w-2xl mx-auto text-lg">
            Una historia de amor que comenzó con una mirada y continúa con una promesa eterna
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300" />
          
          {storyEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="glass-morphism p-6 rounded-lg backdrop-blur-sm bg-white/60">
                  <h3 className="font-playfair text-3xl text-wedding-black mb-2">{event.year}</h3>
                  <h4 className="text-xl font-semibold mb-3">{event.title}</h4>
                  <p className="text-wedding-gray">{event.description}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-wedding-black flex items-center justify-center">
                <FaHeart className="text-wedding-black text-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
