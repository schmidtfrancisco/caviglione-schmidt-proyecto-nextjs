

import Search from "@/app/ui/Search";
import GameCardList from "@/app/ui/juegos/GameCardList";
import PagePagination from "../ui/PagePagination";
import { fetchGamesCount } from "@/lib/data";


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
    <div className="p-4 md:p-6">
      <section className="grid grid-cols-1 gap-6 p-4 md:p-6 max-w-screen-sm mx-auto">
        <Search />
        <GameCardList query={query} currentPage={currentPage} />
      </section>
      <PagePagination maxPage={maxPage} />
    </div>
  )
}