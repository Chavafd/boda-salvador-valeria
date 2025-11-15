'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaUsers, FaQrcode, FaCheckCircle } from 'react-icons/fa'
import { Guest, decodeGuestFromUrl } from '@/lib/guest-data'
import QRCode from 'qrcode'

interface PersonalizedWelcomeProps {
  onClose: () => void;
}

export default function PersonalizedWelcome({ onClose }: PersonalizedWelcomeProps) {
  const [guest, setGuest] = useState<Guest | null>(null)
  const [qrCode, setQrCode] = useState<string>('')
  const [showQR, setShowQR] = useState(false)
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false)

  useEffect(() => {
    // Check URL for invite parameter
    const urlParams = new URLSearchParams(window.location.search)
    const inviteCode = urlParams.get('invite')
    
    if (inviteCode) {
      const guestData = decodeGuestFromUrl(inviteCode)
      if (guestData) {
        setGuest(guestData)
        // Check if they already RSVP'd (from localStorage)
        const rsvpStatus = localStorage.getItem(`rsvp_${guestData.code}`)
        if (rsvpStatus === 'submitted') {
          setRsvpSubmitted(true)
          generateQRCode(guestData)
        }
      }
    }
  }, [])

  const generateQRCode = async (guestData: Guest) => {
    try {
      const qrData = JSON.stringify({
        code: guestData.code,
        name: guestData.name,
        guests: guestData.maxGuests,
        group: guestData.group,
        timestamp: new Date().toISOString()
      })
      
      const qrCodeDataUrl = await QRCode.toDataURL(qrData, {
        width: 300,
        margin: 2,
        color: {
          dark: '#0a0a0a',
          light: '#FFFFFF'
        }
      })
      
      setQrCode(qrCodeDataUrl)
      setShowQR(true)
    } catch (error) {
      console.error('Error generating QR code:', error)
    }
  }

  const handleRSVPComplete = () => {
    if (guest) {
      // Mark as submitted in localStorage
      localStorage.setItem(`rsvp_${guest.code}`, 'submitted')
      setRsvpSubmitted(true)
      generateQRCode(guest)
    }
  }

  if (!guest) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 15 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        <div className="text-center">
          {/* Personalized Greeting */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl text-wedding-black mb-2">
              ¡Bienvenido{guest.name.includes('y') ? 's' : ''}, {guest.name}!
            </h2>
            <p className="text-wedding-gray mb-6">
              Estamos muy felices de que seas parte de nuestro día especial
            </p>
          </motion.div>

          {/* Guest Information */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-lg p-4 mb-6"
          >
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FaUser className="text-wedding-black" />
                <span className="text-gray-600">Código: {guest.code}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-wedding-black" />
                <span className="text-gray-600">
                  {guest.maxGuests} {guest.maxGuests === 1 ? 'invitado' : 'invitados'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* QR Code Section */}
          {showQR && qrCode && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="mb-6"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                <h3 className="font-playfair text-xl mb-3 text-wedding-black">
                  Tu Código QR Personal
                </h3>
                <div className="bg-white p-4 rounded-lg inline-block shadow-lg">
                  <img src={qrCode} alt="QR Code" className="w-48 h-48 mx-auto" />
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Guarda este código, lo necesitarás para ingresar al evento
                </p>
                <button
                  onClick={() => {
                    const link = document.createElement('a')
                    link.download = `invitacion-${guest.code}.png`
                    link.href = qrCode
                    link.click()
                  }}
                  className="mt-4 bg-wedding-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Descargar QR
                </button>
              </div>
            </motion.div>
          )}

          {/* RSVP Status */}
          {rsvpSubmitted ? (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-green-50 border border-green-200 rounded-lg p-4"
            >
              <div className="flex items-center justify-center gap-2 text-green-700">
                <FaCheckCircle />
                <span className="font-medium">¡Confirmación Recibida!</span>
              </div>
              <p className="text-sm text-green-600 mt-2">
                Tu asistencia ha sido confirmada. No olvides traer tu código QR el día del evento.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-wedding-gray mb-4">
                Por favor confirma tu asistencia llenando el formulario a continuación
              </p>
              <button
                onClick={handleRSVPComplete}
                className="bg-wedding-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Confirmar Asistencia
              </button>
              <p className="text-xs text-gray-500 mt-2">
                (Después de llenar el formulario, haz clic aquí para generar tu QR)
              </p>
            </motion.div>
          )}

          {/* Personal Message if exists */}
          {guest.personalMessage && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg"
            >
              <p className="text-sm text-amber-800 italic">
                "{guest.personalMessage}"
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
