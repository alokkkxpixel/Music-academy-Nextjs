"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-card";
import { div } from "motion/react-client";
import { cn } from "@/lib/utils";
 
const InfinityScrollPage = () => {
    const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
  return (
    <div className="relative bg-amber-300 h-[50rem] w-full flex flex-col items-center justify-center gap-10 dark:bg-black">
             <h2 className="text-4xl  mb-10  bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50 to-neutral-400">Music school Testimonial</h2>
   
   <div     className={cn(
          "absolute  inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
      
    </div>

    <div className="w-full bg--700 flex items-center justify-center">

<InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
   
    </div>


  )
}

export default InfinityScrollPage