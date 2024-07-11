import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import InfiniteScroll from "@/components/ui/InfiniteScroller";


export default function Home() {
  return (
    <div>
      <section className="relative">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/gym-photo.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>
        <MaxWidthWrapper className="relative pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-0 lg:pb-52 xl:gap-x-8 xl:pt-32 z-20">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center">
              <h1 className="relative w-fit tracking-tight text-balance mt-10 font-bold !leading-tight text-white text-6xl lg:text-8xl lg:text-center !font-extrabold">
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
      <section className="relative w-full bg-black overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-16 md:w-60 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-30"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-60 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-30"></div>
        <div className="h-40 flex items-center justify-center">
          <InfiniteScroll/>
        </div>
      </section>
    </div>
  );
}
