"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
 
 
const StickyScrollPage = () => {


     const content = [
  {
    title: "Guitar Fundamentals",
    description:
      "Master the basics of guitar playing, from chords to strumming patterns. Build a solid foundation that prepares you for advanced techniques.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--amber-500),var(--orange-600))] text-white">
        Guitar Fundamentals
      </div>
    ),
  },
  {
    title: "Piano for Beginners",
    description:
      "Learn to read sheet music and play your favorite melodies on the piano. Step-by-step lessons designed for absolute beginners.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-600))] text-white">
        Piano for Beginners
      </div>
    ),
  },
  {
    title: "Vocal Training",
    description:
      "Improve your vocal range, tone, and breathing techniques with our guided vocal exercises and professional coaching.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--rose-600))] text-white">
        Vocal Training
      </div>
    ),
  },
  {
    title: "Piano for Beginners",
    description:
      "Learn to read sheet music and play your favorite melodies on the piano. Step-by-step lessons designed for absolute beginners.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-600))] text-white">
        Piano for Beginners
      </div>
    ),
  },
  {
    title: "Vocal Training",
    description:
      "Improve your vocal range, tone, and breathing techniques with our guided vocal exercises and professional coaching.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--rose-600))] text-white">
        Vocal Training
      </div>
    ),
  },
  {
    title: "Music Production",
    description:
      "Explore the world of digital music production. Learn to compose, mix, and master tracks using industry-standard software.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-600))] text-white">
        Music Production
      </div>
    ),
  },
  {
    title: "Music Production",
    description:
      "Explore the world of digital music production. Learn to compose, mix, and master tracks using industry-standard software.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--emerald-500),var(--teal-600))] text-white">
        Music Production
      </div>
    ),
  },
];



  return (
    <div className="w-full bg--400 h-[80vh] flex items-center justify-center py-50] my-10">


        <StickyScroll  content={content} />
    </div>
  )
}

export default StickyScrollPage