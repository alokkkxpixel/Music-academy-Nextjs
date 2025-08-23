import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem]  w-full flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

   <div className="p-4 relative mt-30 bg--200   w-full text-center">
   <Spotlight
        className="top-10  left-30 md:-top-10 md:left-1/3"
        fill="white"
      />
    <h1 className="mt-40 md:mt-0 text-4xl md:text-8xl font-bold 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50 to-neutral-400">Master the Art of Music</h1>
    <p  className="mt-4 font-normal text-base md:text-lg 
             text-neutral-300/70 max-w-lg mx-auto">Dive into our compreshress music Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit ratione laborum vel optio!</p>

    <div className="mt-4">
         <Link href={"/courses"}>
          <Button>
     Explore More
          </Button>
         </Link>
    </div>
   </div>

    </div>
  )
}

export default HeroSection