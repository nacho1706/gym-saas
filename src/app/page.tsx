import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BackgroundImage from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/button";
import InfiniteScroll from "@/components/ui/InfiniteScroller";
import ProgramImage from "@/components/ui/ProgramImage";

export default function Home() {
  return (
    <div>
      <section className="relative">
        <BackgroundImage backgroundImage="url('/gym-photo.jpg')" />
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>
        <MaxWidthWrapper className="relative pb-28 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-0 lg:pb-80 xl:gap-x-8 xl:pt-28 z-20">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center">
              <h1 className="relative w-fit tracking-wider max-sm:tracking-wide text-balance mt-10 font-bold !leading-tight text-white text-6xl md:text-8xl lg:text-9xl lg:text-center font-bebas">
                ELEVATE YOUR WORKOUT
              </h1>
              <p className="mt-4 text-xs lg:text-sm lg:pr-10 max-w-prose text-center lg:text-center text-balance md:text-wrap text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis at consequuntur ea, illum voluptatem eos magnam tempora
                porro, veritatis totam nihil voluptate laborum consectetur
                molestias sequi quae,
              </p>
              <section className="sm:flex flex-auto mt-7">
                <div className="sm:pr-7 max-sm:my-3">
                  <Button variant="destructive" className="p-6 max-sm:p-6">
                    BOOK A CLASS
                  </Button>
                </div>
                <div className="max-sm:p-3">
                  <Button
                    variant="ghost"
                    className="h-8 p-6 bg-transparent border border-x-white text-white max-sm:p-5"
                  >
                    BROWSE ALL CLASSES
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="relative w-full bg-black overflow-hidden shadow-[0px_-100px_24px_12px_#0000004d,0px_-60px_30px_0px_#0000004d,0px_100px_24px_12px_#0000004d,0px_60px_30px_0px_#0000004d]">
        <div className="absolute inset-y-0 left-0 w-16 md:w-60 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-30"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-60 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-30"></div>
        <div className="h-36 max-sm:h-24 flex items-center justify-center">
          <InfiniteScroll />
        </div>
      </section>
      <section className="relative pt-16">
        <BackgroundImage backgroundImage="url('/fondo_negro.webp')" />
          <div className="md:flex justify-center md:col-start-2">
            <h1 className="relative w-fit tracking-wider max-sm:tracking-wide text-balance mt-10 font-bold !leading-tight text-white text-4xl md:text-6xl lg:text-7xl lg:text-center font-bebas">
              MEET OUR PROGRAMS
            </h1>
          </div>
        <div className="h-auto grid md:grid-cols-3 sm:grid-rows-2 gap-0 max-sm:gap-12 z-10 md:py-12">
          <div className="md:col-start-2 relative h-160">
            <ProgramImage ImageUrl="/hole-crack.webp"/>
            <div className="flex justify-around align-center">
            <h2 className="text-white text-center text-5xl pt-8 font-bebas tracking-wider">
              BODY BUILDING
            </h2>
            <Button
              variant="ghost"
              className="h-8 mt-8 p-6 bg-transparent border border-x-white text-white max-sm:p-5"
            >
              More information
            </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
