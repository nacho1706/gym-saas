import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BackgroundImage from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <section className="relative h-screen w-full">
        <BackgroundImage backgroundImage="url('/fondo-landing.png')" />
        <MaxWidthWrapper className="relative pb-28 pt-10 sm:pb-32 lg:gap-x-0 lg:pb-96 xl:gap-x-8 xl:pt-14 z-10">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto lg:text-left flex flex-col items-center">
              <h1 className="relative w-fit max-sm:tracking-wide text-pretty text-center mt-10 font-bold !leading-tight text-4xl md:text-6xl lg:text-7xl lg:text-clip font-sans">
                Tu Pedido en{" "}
                <span className="text-white bg-green-500">WhatsApp</span>:
                Rápido, Fácil y Económico
              </h1>
              <p className="mt-4 text-md lg:text-pretty lg:pr-10 max-w-prose text-center max-sm:text-sm max-sm:my-10">
                Transforma la experiencia de tus clientes con nuestro innovador
                servicio de menú online para restaurantes. Por un precio
                accesible, ofrecemos una solución que facilita la gestión de
                pedidos de manera eficiente y moderna.
              </p>
              <section className="sm:flex flex-auto justify-center mt-7">
                <div className="max-sm:my-1">
                  <Button variant="default" className="p-6 max-sm:p-5 bg-orange-500 text-white">
                    MAS INFORMACION
                  </Button>
                </div>
                <div className="md:ml-10">
                  <Button
                    variant="ghost"
                    className="h-8 p-6 border-x-white text-white bg-orange-700 max-sm:p-5"
                  >
                    
                    CONTACTO
                  </Button>
                  </div>
              </section>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* <section className="relative w-full bg-black overflow-hidden shadow-[0px_-100px_24px_12px_#0000004d,0px_-60px_30px_0px_#0000004d,0px_100px_24px_12px_#0000004d,0px_60px_30px_0px_#0000004d]">
        <div className="absolute inset-y-0 left-0 w-16 md:w-60 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-30"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-60 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-30"></div>
        <div className="h-36 max-sm:h-24 flex items-center justify-center">
          <InfiniteScroll />
        </div>
      </section> */}
      {/* <section className="relative pt-16">
        <BackgroundImage backgroundImage="url('/fondo_negro.webp')" />
        <div className="md:flex justify-center md:col-start-2">
          <h1 className="relative w-fit tracking-wider max-sm:tracking-wide text-balance mt-10 font-bold !leading-tight text-white text-4xl md:text-6xl lg:text-7xl lg:text-center font-bebas">
            MEET OUR PROGRAMS
          </h1>
        </div>
        <div className="h-auto grid md:grid-cols-3 sm:grid-rows-2 gap-0 max-sm:gap-12 z-10 md:py-12">
          <div className="md:col-start-1 relative h-160 md:mt-44">
            <div className="flex justify-around align-center">
              <h2 className="text-white text-center text-5xl pt-8 font-bebas tracking-wider">
                CALISTHENICS
              </h2>
              <Button
                variant="ghost"
                className="h-8 mt-8 p-6 bg-transparent border border-x-white text-white max-sm:p-5"
              >
                More information
              </Button>
            </div>
          </div>
          <div className="md:col-start-2 relative h-160">
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
          <div className="md:col-start-3 relative h-160 md:mt-44">
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
      </section> */}
    </div>
  );
}
