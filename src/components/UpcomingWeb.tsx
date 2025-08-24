"use client"

import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';


const UpcomingWeb = () => {

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn how to craft meaningful lyrics and melodies that resonate with your audience.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Guitar Techniques",
    description:
      "Improve your guitar playing with advanced strumming, picking, and soloing techniques.",
    slug: "mastering-guitar-techniques",
    isFeatured: false,
  },
  {
    title: "Vocal Training Essentials",
    description:
      "Strengthen your voice, improve pitch accuracy, and expand your vocal range with expert guidance.",
    slug: "vocal-training-essentials",
    isFeatured: true,
  },
  {
    title: "Music Production Basics",
    description:
      "Discover how to compose, record, and produce tracks using industry-standard software.",
    slug: "music-production-basics",
    isFeatured: false,
  },
  {
    title: "Stage Performance Skills",
    description:
      "Gain confidence and learn how to engage your audience with powerful live performances.",
    slug: "stage-performance-skills",
    isFeatured: true,
  },
];

    
  return (
    <div className='p-12 bg-black'>
      
      <div className="max-w-7xl mx-auto px-4  sm:px-6">
        <div className="text-center">
             <h2 className='text-xl text-center text-cyan-500 font-medium'>FEATURED WEBINARS</h2>
            <p className='text-3xl md:text-5xl md:mt-5 font-semibold tracking-tight leading-8'>Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
            <HoverEffect items={featuredWebinars.map((webinar)=> (
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: `/webinars/${webinar.slug}`
                }
            ))}/>
        </div>
       <div className='text-center mt-10'>
               <Link  href={"/courses"}  className='text-black  font-light bg-white px-10 py-2 rounded-lg'>
                View All Webinars
               </Link>
               </div>   
      </div>

    </div>
  )
}

export default UpcomingWeb