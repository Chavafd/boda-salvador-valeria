'use client'

import { FaHeart, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-wedding-black text-white py-16">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl mb-4">
              Salvador & Valeria
            </h2>
            <p className="text-gray-400 mb-8">04.01.2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-gray-400 mb-4">¿Tienes preguntas? Contáctanos</p>
            <div className="flex justify-center items-center space-x-6 text-sm">
              <a
                href="tel:+529841046650"
                className="flex items-center hover:text-gray-300 transition-colors"
              >
                <FaPhone className="mr-2" />
                <span>(984) 104-6650</span>
              </a>
              <a
                href="mailto:chavafd@outlook.com"
                className="flex items-center hover:text-gray-300 transition-colors"
              >
                <FaEnvelope className="mr-2" />
                <span>chavafd@outlook.com</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <a
              href="https://www.instagram.com/chavafdz_r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/529841046650"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-500 text-sm flex items-center justify-center">
              Hecho con <FaHeart className="text-red-500 mx-2" /> para nuestro día especial
            </p>
            <p className="text-gray-600 text-xs mt-2">
              © 2026 S & V. Todos los derechos reservados jakaaskaj no se crean.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
