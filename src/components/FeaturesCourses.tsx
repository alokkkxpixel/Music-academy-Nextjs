"Use client"


import React from 'react'
import courseData from "../data/music_cousers.json"
import Link from 'next/link'
import { div } from 'motion/react-client'
import { BackgroundGradient } from './ui/background-gradient'


interface Course{
   id: number,
      title: string,
      slug: string,
      description:string,
      price: number,
      instructor: string,
      isFeatured: boolean,
}



const FeaturesCourses = () => {

 const  featuredCourse =   courseData.courses.filter((course:Course)=> course.isFeatured)

 

  return (
    <div className='py-12 flex   flex-col gap-5 bg-black'>

      <div>
        <div className="text-center">
            <h2 className='text-xl text-center text-cyan-500 font-medium'>FEATURED COURSES</h2>
            <p className='text-3xl md:text-5xl md:mt-5 font-semibold tracking-tight leading-8'>Learn with the Best</p>
        </div>
        </div>   
      <div className='mt-10'>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 justify-center">
       {featuredCourse.map((course:Course)=> (
         <div key={course.id} className="flex justify-center">
          <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 
                    overflow-hidden h-full max-w-sm">
            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
        
        {/* Course Title */}
        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {course.title}
        </p>
        
        {/* Course Description */}
        <p className="text-neutral-600 dark:text-neutral-400">
          {course.description}
        </p>
        
        {/* Learn More Button */}
        <Link 
          href={`/courses/${course.slug}`} 
          className="mt-4 inline-block text-sm font-medium 
                     text-blue-600 hover:underline dark:text-blue-400"
        >
          Learn More
        </Link>
      </div>
          </BackgroundGradient>
         </div>
            
       ))}
       

        </div>
        
        </div>   
      <div className='text-center mt-10'>
        <Link  href={"/courses"}  className='text-black  font-light bg-white px-10 py-2 rounded-lg'>
         View All courses
        </Link>
        </div>   
   
    </div>
  )
}

export default FeaturesCourses