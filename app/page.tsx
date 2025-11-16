'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Hero from '@/components/Hero'
import Venue from '@/components/Venue'
import Timeline from '@/components/Timeline'
import DressCode from '@/components/DressCode'
import GiftRegistry from '@/components/GiftRegistry'
import RSVP from '@/components/RSVP'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground'
import ScrollIndicator from '@/components/ScrollIndicator'
import PersonalizedWelcome from '@/components/PersonalizedWelcome'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showPersonalizedWelcome, setShowPersonalizedWelcome] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    
    // Check if there's an invite parameter in the URL
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('invite')) {
      setShowPersonalizedWelcome(true)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      {showPersonalizedWelcome && (
        <PersonalizedWelcome onClose={() => setShowPersonalizedWelcome(false)} />
      )}
      <ParticlesBackground />
      <ScrollIndicator />
      <main className="relative">
        <Hero />
        <Venue />
        <Timeline />
        <DressCode />
        <GiftRegistry />
        <RSVP />
        <Footer />
      </main>
    </>
  )
}
