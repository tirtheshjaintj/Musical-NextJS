import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { BackgroundBeams } from '@/components/ui/background-beams';

function HeroSection() {
  return (
    <div className=" pb-20 pt-[100px]">
     <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden"
    >
        <div className="p-4 relative z-10 w-full text-center" >
            
            <h1
            className="mt-20 md:mt-0 text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >TJ Music Art School</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className="mt-4">
                <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className=" bg-white font-bold  dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button>
                </Link>
            </div>
        </div>
        
        </div>
            </div>
  )
}

export default HeroSection