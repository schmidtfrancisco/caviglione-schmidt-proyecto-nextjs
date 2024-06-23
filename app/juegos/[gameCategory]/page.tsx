import { outfit } from "@/components/fonts";
import FiltersSection from "@/components/juegos/FiltersSection";
import GameCldImage from "@/components/juegos/GameCldImage";
import GamesList from "@/components/juegos/GamesList";
import PagePagination from "@/components/pagination-search/PagePagination";
import Search from "@/components/pagination-search/Search";
import { GameListSkeleton } from "@/components/skeletons";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { fetchCategoryGamesMaxPrice, fetchGamesByCategoryCountPrice } from "@/lib/data/products-category-data";
import { Category } from "@/lib/definitions/products-definitions";
import { cn, linkToCategory } from "@/lib/utils";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface PageProps {
  params: {
    gameCategory: string
  }
  searchParams: {
    query?: string;
    pag?: string;
    sort?: string;
    min?: string;
    max?: string;
  }
}

export const metadata: Metadata = {
  title: 'Juegos',
}

export default async function Page({ params, searchParams }: PageProps) {
  const category: Category | null = linkToCategory(params.gameCategory);
  if (!category) {
    notFound();
  }
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.pag) || 1;
  const sort = searchParams?.sort || 'none';
  const maxPrice = await fetchCategoryGamesMaxPrice(category, query);
  const min = Number(searchParams?.min) || 0;
  const max = Number(searchParams?.max) || maxPrice;
  const maxPage = await fetchGamesByCategoryCountPrice(category, query, min, max);
  return (
    <div className="flex flex-col p-1 md:px-6">
      <div className="flex flex-col lg:w-5/6 md:flex-row justify-between md:items-end">
        <h1 className={cn(outfit.className,
          "md:text-7xl font-bold text-center md:text-left text-gray-700 flex items-center justify-center md:ml-10",
          category === Category.VIDEOJUEGOS ? "text-4xl" : "text-5xl",
        )}
        >
          {category}
          <CategoryLogoImage category={category} />
        </h1>
        <Search
          placeholder={`Buscar ${category.toLowerCase()} ...`}
          className="hidden xl:flex ml-auto min-w-[300px]"
          inputClassName="bg-gray-100"
        />
      </div>
      <section className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 xl:w-1/3 md:grow-0 p-4">
          <div className="flex md:flex-col items-center mb-2 gap-2">
            <Search
              placeholder={`Buscar ${category.toLowerCase()} ...`}
              className="xl:hidden"
              inputClassName="bg-gray-100"
            />
            <div className="hidden md:block">
              <FiltersSection maxPrice={maxPrice} />
            </div>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <FunnelIcon className="w-5 md:mr-2" />
                    <span className=" ml-1 text-sm">
                      Filtros
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="max-h-[65svh] w-[300px]">
                  <FiltersSection maxPrice={maxPrice} />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:p-6 xl:w-3/5">
          <Suspense fallback={<GameListSkeleton />}>
            <GamesList query={query} currentPage={currentPage} category={category} sort={sort} min={min} max={max} />
          </Suspense>
        </div>
      </section>
      <PagePagination maxPage={maxPage} />
    </div>
  )
}

function CategoryLogoImage({ category }: { category: Category }) {
  switch (category) {
    case Category.JUEGOS_DE_MESA:
      return (
        <GameCldImage
          src="GameStore/dados"
          alt={category}
          width={450}
          height={450}
          className="w-24 h-auto mr-2 md:ml-6 my-4"
        />
      )
    case Category.JUGUETES:
      return (
        <GameCldImage
          src="GameStore/oso"
          alt={category}
          width={480}
          height={480}
          className="w-32 h-auto"
        />
      )
    case Category.VIDEOJUEGOS:
      return (
        <GameCldImage
          src="GameStore/joystick"
          alt={category}
          width={512}
          height={512}
          className="w-24 h-auto ml-6 my-4"
        />
      )
  }
}
