import GameCarouselContent from "@/app/ui/home/GameCarouselContent";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import  GameCarouselItem  from "@/app/ui/home/GameCarouselItem";
import { Game } from '@/lib/definitions'
import { Suspense } from "react";
import { CarouselGameSkeleton } from "./ui/skeletons";


export default async function Home() {

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-950">JuegoLandia</h1>
      <section className="mb-12 mx-12 pt-6 border-t border-gray-100">
        <h2 className="text-2xl font-bold mb-4">Juegos recomendados</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="horizontal"
        >
          
          <Suspense fallback={<CarouselGameSkeleton />}> 
            <GameCarouselContent category="Juegos de mesa" />
          </Suspense>
          
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="mb-12 mx-12 pt-6 border-t border-gray-100">
        <h2 className="text-2xl font-bold mb-4">Juegos de mesa</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="horizontal"
        >
          <Suspense fallback={<CarouselGameSkeleton />}> 
            <GameCarouselContent category="Juegos de mesa" />
          </Suspense>
          
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="mb-12 mx-12 pt-6 border-t border-gray-100">
        <h2 className="text-2xl font-bold mb-4">Videojuegos</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="horizontal"
        >
          <Suspense fallback={<CarouselGameSkeleton />}> 
            <GameCarouselContent category="Videojuegos" />
          </Suspense>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="mb-12 mx-12 pt-6 border-t border-gray-100">
        <h2 className="text-2xl font-bold mb-4">Juguetes</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="horizontal"
        >
          <Suspense fallback={<CarouselGameSkeleton />}> 
            <GameCarouselContent category="Juguetes" />
          </Suspense>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>

  );
}
