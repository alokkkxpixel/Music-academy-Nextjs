"use client"
import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';
import { WavyBackground } from './ui/wavy-backgroud';

const Contributors = () => {

    const people = [
  {
    id: 1,
    name: "Alokk Pithale",
    designation: "Web developer",
    image:
      "https://avatars.githubusercontent.com/u/132479455?v=4",
  },
  {
    id: 2,
    name: "Brian Carter",
    designation: "Guitar Instructor",
    image:
      "https://images.unsplash.com/photo-1502767089025-6572583495b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Sophia Lee",
    designation: "Piano Teacher",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "David Johnson",
    designation: "Drum Specialist",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Emma Wilson",
    designation: "Music Producer",
    image:
      "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

  return (
    <div className='relative min-h-[50vh] overflow-x-hidden bg--100 flex flex-col items-center justify-center '>
    <WavyBackground className='w-full max-w-7-xl flex items-center justify-center flex-col h-full' >
        <div className=''>

      <h2 className="mt-40 md:mt-0 text-4xl md:text-8xl font-bold 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50 to-neutral-400">Meet Our Instructors</h2>
      <p  className="mt-9 font-normal text-light md:text-2xl 
             text-neutral-100  max-w-3xl mx-auto">Discover the Talented professional who will guide your musical </p>
        </div>




         <div className="flex mt-20 flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip  items={people} />
    </div>
    </WavyBackground>

    </div>
  )
}

export default Contributors