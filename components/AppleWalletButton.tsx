'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaApple, FaQrcode } from 'react-icons/fa'

export default function AppleWalletButton() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePass = async () => {
    setIsGenerating(true)
    
    // Simulate pass generation - in production, this would call an API endpoint
    // that generates a proper .pkpass file with PassKit
    setTimeout(() => {
      // Create a mock pass data URL
      const passData = {
        eventName: 'Boda Salvador & Valeria',
        date: '2026-01-04T17:00:00',
        location: 'Hacienda Los Robles',
        address: 'Av. Principal 1234, Ciudad',
      }
      
      // In production, this would be a link to download the .pkpass file
      const passUrl = `data:application/vnd.apple.pkpass;base64,${btoa(JSON.stringify(passData))}`
      
      // Create a download link
      const link = document.createElement('a')
      link.href = passUrl
      link.download = 'boda-salvador-valeria.pkpass'
      
      // Show alert for demo purposes
      alert('En producción, esto descargaría tu pase para Apple Wallet con todos los detalles del evento y un código QR.')
      
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={generatePass}
      disabled={isGenerating}
      className={`inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-semibold transition-all ${
        isGenerating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
      }`}
    >
      <FaApple className="text-xl mr-2" />
      <span className="mr-2">
        {isGenerating ? 'Generando...' : 'Agregar a Apple Wallet'}
      </span>
      <FaQrcode className="text-sm opacity-70" />
    </motion.button>
  )
}
