import { outfit } from "@/app/ui/fonts"
import GamesList from "@/app/ui/juegos/GamesList"
import PagePagination from "@/app/ui/PagePagination"
import Search from "@/app/ui/Search"
import { fetchGamesByCategoryCount } from "@/lib/data/products-data"
import { Category } from "@/lib/definitions"
import { cn, linkToCategory } from "@/lib/utils"
import { CldImage } from "next-cloudinary"


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
    <div className="flex flex-col p-1 md:px-6">
      <div className="flex flex-col w-5/6 md:flex-row justify-between md:items-end">
        <h1 className={cn(outfit.className,
          "text-5xl md:text-7xl font-bold md:text-left text-gray-700 flex items-center")}
        >
          {category}
          <CldImage
            src="GameStore/oso"
            alt={category}
            width={80}
            height={80}
            className="w-32 h-32"
          />
        </h1>
        <Search placeholder={`Buscar ${category.toLowerCase()} ...`} className="hidden lg:flex ml-auto" />
      </div>
      <section className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/4 md:grow-0 p-4">
          <div className="flex items-center mb-6">
            FILTROS
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:p-6 md:w-3/5">
          <GamesList query={query} currentPage={currentPage} category={category} />
        </div>
      </section>
      <PagePagination maxPage={maxPage} />
    </div>
  )

}

/*

  <section className="flex flex-col md:flex-row justify-center">
        <div className="md:basis-1/3 md:grow-0">
          <div className="flex items-center mb-6">
            <h1 className={cn(outfit.className,
              "text-5xl md:text-7xl font-bold text-center md:text-left text-gray-700 flex items-center mx-auto")}
            >
              <span>{category}</span>
              <CldImage
              src="GameStore/oso"
              alt={category}
              width={80}
              height={80}
              className="w-32 h-32"
            />
            </h1>
            
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:p-6 md:w-3/4">
          <Search placeholder={`Buscar ${category.toLowerCase()} ...`} />
          <GamesList query={query} currentPage={currentPage} category={category} />
        </div>
      </section>


*/