'use client'

import { motion } from 'framer-motion'
import { FaCalendarAlt, FaCamera, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export default function EventButtons() {
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  const downloadCalendarEvent = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//S&V Wedding//Event//ES
BEGIN:VEVENT
UID:${Date.now()}@bodasyv.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}
DTSTART:20260104T170000
DTEND:20260104T230000
SUMMARY:Boda Salvador & Valeria
DESCRIPTION:¡Nos casamos! Acompáñanos en nuestro día especial.\n\nCronograma:\n5:00 PM - Cóctel de Bienvenida\n5:15 PM - Ingreso de Invitados\n5:30 PM - Entrada de Novios\n5:35 PM - Banquete\n7:35 PM - Pista de Baile\n11:00 PM - Cierre
LOCATION:Quinta los Agapantos
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:¡Mañana es la boda de Salvador & Valeria!
END:VALARM
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = 'boda-salvador-valeria.ics'
    link.click()
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      {/* Calendar Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={downloadCalendarEvent}
        onMouseEnter={() => setShowTooltip('calendar')}
        onMouseLeave={() => setShowTooltip(null)}
        className="relative bg-wedding-black text-white py-3 px-6 rounded-lg magnetic-hover tracking-wider inline-flex items-center min-w-[200px] justify-center hover:bg-gray-800 transition-colors"
      >
        <FaCalendarAlt className="mr-3" />
        <span>Agregar al Calendario</span>
        {showTooltip === 'calendar' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-2 px-3 rounded whitespace-nowrap"
          >
            Compatible con todos los calendarios
          </motion.div>
        )}
      </motion.button>

      {/* Photos Button */}
      <motion.a
        href="https://photos.app.goo.gl/5t88jjmWh3nptMaV9" // Replace with actual Google Photos link
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip('photos')}
        onMouseLeave={() => setShowTooltip(null)}
        className="relative bg-wedding-black text-white py-3 px-6 rounded-lg magnetic-hover tracking-wider inline-flex items-center min-w-[200px] justify-center hover:bg-gray-800 transition-colors"
      >
        <FaCamera className="mr-3" />
        <span>Compartir Fotos</span>
        {showTooltip === 'photos' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-2 px-3 rounded whitespace-nowrap"
          >
            Comparte tus fotos de nuestra boda
          </motion.div>
        )}
      </motion.a>

      {/* WhatsApp Group Button */}
      <motion.a
        href="https://chat.whatsapp.com/E56wzWaNIfgJXofF97FnRM?mode=ems_copy_t" // Replace with actual WhatsApp group link
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip('whatsapp')}
        onMouseLeave={() => setShowTooltip(null)}
        className="relative bg-wedding-black text-white py-3 px-6 rounded-lg magnetic-hover tracking-wider inline-flex items-center min-w-[200px] justify-center hover:bg-gray-800 transition-colors"
      >
        <FaWhatsapp className="mr-3" />
        <span>Grupo del Evento</span>
        {showTooltip === 'whatsapp' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-2 px-3 rounded whitespace-nowrap"
          >
            Únete a nuestro grupo de WhatsApp
          </motion.div>
        )}
      </motion.a>
    </div>
  )
}
