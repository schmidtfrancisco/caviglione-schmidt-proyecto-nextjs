
import Link from "next/link";
import { Category } from "@/lib/definitions/products-definitions";
import HomeImage from '@/components/inicio/HomeImage'
import CategoryCard from "@/components/inicio/CategoryCard";
import CategoryGamesSection from "@/components/inicio/CategoryGamesSection";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

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
            <div className="flex flex-col gap-2 min-[500px]:flex-row">
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
          <HomeImage/>
        </div>
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
            <CategoryCard category={Category.JUEGOS_DE_MESA} description="Para todas las edades" src="/juegos-de-mesa.png "/>
            <CategoryCard category={Category.VIDEOJUEGOS} description="Para todas las plataformas" src="/videojuegos.png" />
            <CategoryCard category={Category.JUGUETES} description="Para los más pequeños" src="/juguetes.png" />
          </div>
        </div>
      </section>

      <CategoryGamesSection
        category={Category.JUEGOS_DE_MESA}
        title="Sumérgete en Nuestra Colección Exclusiva"
        subtitle="Descubre una amplia variedad de juegos de mesa"
        isFirst
      />

      <CategoryGamesSection
        category={Category.VIDEOJUEGOS}
        title="Adéntrate en el Mundo de los Videojuegos"
        subtitle="Explora nuestra colección de videojuegos para todas las plataformas"
      />

      <CategoryGamesSection
        category={Category.JUGUETES}
        title="Descubre Nuestros Juguetes Únicos"
        subtitle="Encuentra el juguete perfecto para cada ocasión y edad"
      />
    </div>
  );
}
