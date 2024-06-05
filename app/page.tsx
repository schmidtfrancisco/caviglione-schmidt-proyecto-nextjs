import GameCarouselContent from "@/app/ui/home/GameCarouselContent";
import { Carousel, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Suspense } from "react";
import { CarouselGameSkeleton } from "./ui/skeletons";
import Category from "./ui/home/Category";
import Link from "next/link";
import Image from "next/image";
import homeImage from '../public/home.png'
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { buttonVariants } from "@/components/ui/button";


export default async function Home() {

  return (
    <div className="">

      <section className="w-full">
        <div className="container grid items-center justify-center px-4 md:px-6 md:grid-cols-2 lg:gap-2">
          <div className="flex flex-col items-center text-center gap-4 p-4 md:pl-6 md:items-start md:text-start">
            <h1 className="text-4xl font-bold tracking-tighter mt-4 md:text-5xl md:mb-14 lg:text-7xl ">
              Game<span className="text-sky-800 dark:text-gray-50">Store</span>
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore nuesta amplia selección de juegos de mesa, videojuegos y juguetes para todas las edades. Encuentre el regalo perfecto o
              su juego preferido.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/juegos"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Explorar juegos
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#categorias"
                className={buttonVariants({
                  variant: "outline",
                })}
              >
                Ver categorías
                <ArrowDownIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <Image
            src={homeImage}
            alt="Home Image"
          />
        </div>
      </section>

      <section className="mb-12 mx-12 px-4 pt-6 border-t border-gray-100">
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

      <section id="categorias" className="w-full py-10 md:py-14 lg:py-18 bg-gray-100 dark:bg-gray-800">
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

      <section className="w-full py-10 md:py-14 lg:py-18 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-800 px-3 py-1 text-sm text-white dark:bg-gray-800">
                Juegos de mesa
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sumérgete en Nuestra Colección Exclusiva</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Descubre una amplia variedad de juegos de mesa
              </p>
            </div>
          </div>
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

        </div>
      </section>

      <section className="w-full py-10 border-t border-gray-100 md:py-14 lg:py-18 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white dark:bg-gray-800">
                Videojuegos
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Adéntrate en el Mundo de los Videojuegos</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explora nuestra colección de videojuegos para todas las plataformas
              </p>
            </div>
          </div>
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

        </div>
      </section>

      <section className="w-full py-10 border-t border-gray-100 md:py-14 lg:py-18 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-orange-600 px-3 py-1 text-sm text-white dark:bg-gray-800">
                Juguetes
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Descubre Nuestros Juguetes Únicos</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Encuentra el juguete perfecto para cada ocasión y edad
              </p>
            </div>
          </div>
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

        </div>
      </section>
    </div>
  );
}
