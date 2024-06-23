import { outfit } from "@/components/fonts";
import GameCldImage from "@/components/juegos/GameCldImage";
import GamesList from "@/components/juegos/GamesList";
import PagePagination from "@/components/pagination-search/PagePagination";
import Search from "@/components/pagination-search/Search";
import { GameListSkeleton } from "@/components/skeletons";
import { fetchGamesCount } from "@/lib/data/products-data";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

export default async function Page(
  { searchParams }: {
    searchParams: {
      query?: string;
      pag?: string
    }
  }
) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.pag) || 1;
  const maxPage = await fetchGamesCount(query);
  return (
    <div className="p-1 md:p-6">
      <section className="flex flex-col md:flex-row justify-center">
        <div className="md:basis-1/3 md:grow-0">
          <h1 className={cn(outfit.className,
            "md:text-7xl font-bold text-center md:text-left text-gray-700 flex items-center justify-center")}
          >
            Juegos
            <GameCldImage
              src="GameStore/juegos"
              alt="Juegos"
              width={100}
              height={100}
            />
          </h1>
          Filtos
        </div>
        <div className="grid grid-cols-1 gap-2 md:p-6 md:w-3/4">
          <Search 
            placeholder="Buscar juegos ..." 
            inputClassName="bg-gray-100" 
            className="flex ml-auto min-w-[300px]"
            />
          <Suspense fallback={<GameListSkeleton/>}>
            <GamesList query={query} currentPage={currentPage} />
          </Suspense>
        </div>
      </section>
      <PagePagination maxPage={maxPage} />
    </div>
  )
}