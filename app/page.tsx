import GameCarouselContent from "@/app/ui/home/GameCarouselContent";
import { Carousel, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Suspense } from "react";
import { CarouselGameSkeleton } from "./ui/skeletons";
import Category from "./ui/home/Category";


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

      <section className="w-full py-10 md:py-14 lg:py-18 bg-gray-100 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-400 px-3 py-1 text-sm text-white dark:bg-gray-800">
                Compra por Categoría
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Descubre Nuevos Favoritos</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explora nuestra amplia selección de juegos a través de varias categorías
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Category category="Juegos de mesa" src="/juegos-de-mesa.png" />
            <Category category="Videojuegos" src="/videojuegos.png" />
            <Category category="Juguetes" src="/juguetes.png" />
          </div>
        </div>
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
