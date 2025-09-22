'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Hero from '@/components/Hero'
import Venue from '@/components/Venue'
import Timeline from '@/components/Timeline'
import GiftRegistry from '@/components/GiftRegistry'
import RSVP from '@/components/RSVP'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground'
import ScrollIndicator from '@/components/ScrollIndicator'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <ParticlesBackground />
      <ScrollIndicator />
      <main className="relative">
        <Hero />
        <Venue />
        <Timeline />
        <GiftRegistry />
        <RSVP />
        <Gallery />
        <Footer />
      </main>
    </>
  )
}
