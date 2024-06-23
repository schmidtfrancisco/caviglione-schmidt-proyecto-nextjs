import { outfit } from "@/components/fonts";
import FiltersSection from "@/components/juegos/FiltersSection";
import GameCldImage from "@/components/juegos/GameCldImage";
import GamesList from "@/components/juegos/GamesList";
import PagePagination from "@/components/pagination-search/PagePagination";
import Search from "@/components/pagination-search/Search";
import { GameListSkeleton } from "@/components/skeletons";
import { Button } from "@/components/ui/button";
import { fetchGamesCountPrice, fetchGamesMaxPrice } from "@/lib/data/products-data";
import { cn } from "@/lib/utils";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Juegos',
}
export default async function Page(
  { searchParams }: {
    searchParams: {
      query?: string;
      pag?: string;
      sort?: string;
      min?: string;
      max?: string;
    }
  }
) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.pag) || 1;
  const sort = searchParams?.sort || 'none';
  const maxPrice = await fetchGamesMaxPrice(query);
  const min = Number(searchParams?.min) || 0;
  const max = Number(searchParams?.max) || maxPrice;
  const maxPage = await fetchGamesCountPrice(query, min, max);
  
  return (
    <div className="p-1 md:p-6">
      <section className="flex flex-col md:flex-row justify-center">
        <div className="md:basis-1/3 md:grow-0">
          <h1 className={cn(outfit.className,
            "text-5xl lg:text-7xl font-bold text-center md:text-left text-gray-700 flex items-center justify-center")}
          >
            Juegos
            <GameCldImage
              src="GameStore/juegos"
              alt="Juegos"
              width={100}
              height={100}
            />
          </h1>
          <div className="hidden md:block">
          <FiltersSection maxPrice={maxPrice}/>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:p-6 md:w-3/4">
          <div className="flex items-center m-2 md:m-0">
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
          <Search
            placeholder="Buscar juegos ..."
            inputClassName="bg-gray-100"
            className="flex ml-auto md:min-w-[300px]"
          />
          </div>
          <Suspense fallback={<GameListSkeleton />}>
            <GamesList query={query} currentPage={currentPage} sort={sort} min={min} max={max}/>
          </Suspense>
        </div>
      </section>
      <PagePagination maxPage={maxPage} />
    </div>
  )
}