'use client'

import { motion } from 'framer-motion'
import Countdown from 'react-countdown'
import { FaChevronDown } from 'react-icons/fa'
import EventButtons from './EventButtons'

const weddingDate = new Date('2026-01-04T17:00:00')

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <span className="text-2xl">¡Es el gran día!</span>
  } else {
    return (
      <div className="flex gap-8 md:gap-12">
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-light">{days}</div>
          <div className="text-xs md:text-sm tracking-widest mt-2">DÍAS</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-light">{hours}</div>
          <div className="text-xs md:text-sm tracking-widest mt-2">HORAS</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-light">{minutes}</div>
          <div className="text-xs md:text-sm tracking-widest mt-2">MINUTOS</div>
        </div>
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-light">{seconds}</div>
          <div className="text-xs md:text-sm tracking-widest mt-2">SEGUNDOS</div>
        </div>
      </div>
    )
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center snap-start">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50 z-0" />
      
      <div className="relative z-10 text-center section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-wedding-gray text-sm md:text-base tracking-[0.3em] mb-8">
            NOS CASAMOS
          </h2>
          
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-wedding-black mb-4">
            Salvador
          </h1>
          
          <div className="text-3xl md:text-4xl text-wedding-gray font-light my-4">&</div>
          
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl text-wedding-black mb-12">
            Valeria
          </h1>
          
          <div className="text-wedding-gray tracking-widest mb-16">
            <p className="text-lg md:text-xl mb-2">4 DE ENERO DE 2026</p>
            <p className="text-sm md:text-base">DOMINGO • 5:00 PM</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="glass-morphism rounded-2xl p-8 md:p-12 inline-block"
        >
          <p className="text-sm md:text-base text-wedding-gray mb-6 tracking-wider">
            FALTAN
          </p>
          <Countdown date={weddingDate} renderer={CountdownRenderer} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8"
        >
          <EventButtons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-x-2"
        >
          <FaChevronDown className="text-2xl text-wedding-gray animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
