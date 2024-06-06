import GamesList from "@/app/ui/juegos/GamesList"
import PagePagination from "@/app/ui/PagePagination"
import Search from "@/app/ui/Search"
import { fetchGamesByCategoryCount } from "@/lib/data"
import { Category } from "@/lib/definitions"
import { linkToCategory } from "@/lib/utils"


interface PageProps {
  params: {
    gameCategory: string
  }
  searchParams: {
    query?: string
    pag?: string
  }
}

export default async function Page({ params, searchParams }: PageProps) {
  const category: Category = linkToCategory(params.gameCategory);
  
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.pag) || 1;
  const maxPage = await fetchGamesByCategoryCount(category, query);

  return (
    <div className="p-4 md:p-6">
      <section className="grid grid-cols-1 gap-6 p-4 md:p-6 max-w-screen-sm mx-auto">
        <Search placeholder={`Buscar ${category.toLowerCase()} ...`}/>
        <GamesList query={query} currentPage={currentPage} category={category} />
      </section>
      <PagePagination maxPage={maxPage} />
    </div>
  )
  
}