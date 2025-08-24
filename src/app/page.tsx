import FeaturesCourses from '@/components/FeaturesCourses'
import HeroSection from '@/components/HeroSection'
import InfinityScrollPage from '@/components/InfinityScrollPage'
import StickyScrollPage from '@/components/StickyScrollPage'
import StickyScroll from '@/components/StickyScrollPage'
import UpcomingWeb from '@/components/UpcomingWeb'
import { main } from 'motion/react-client'
import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen p-3 bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
      <HeroSection />
      <FeaturesCourses />
      <StickyScrollPage />
      <InfinityScrollPage />
      <UpcomingWeb />
    </main>
  )
}

export default Home