import { outfit } from "@/components/fonts";
import { cn } from "@/lib/utils";
import { fetchGamesCount } from "@/lib/data/products-data";
import GamesList from "@/components/juegos/GamesList";
import Search from "@/components/pagination-search/Search";
import PagePagination from "@/components/pagination-search/PagePagination";


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
            "text-7xl font-bold text-center md:text-left mb-6 text-gray-700")}
          >
            Juegos
          </h1>
          Filtos
        </div>
        <div className="grid grid-cols-1 gap-2 md:p-6 md:w-3/4">
          <Search placeholder="Buscar juegos ..." />
          <GamesList query={query} currentPage={currentPage} />
        </div>
      </section>
      <PagePagination maxPage={maxPage} />
    </div>
  )
}