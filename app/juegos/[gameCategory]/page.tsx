
import { CldImage } from "next-cloudinary"
import Image from "next/image"
import { notFound } from "next/navigation"
import { outfit } from "@/components/fonts"
import { cn, linkToCategory } from "@/lib/utils"
import { Category } from "@/lib/definitions/products-definitions"
import { fetchGamesByCategoryCount } from "@/lib/data/products-data"
import GamesList from "@/components/juegos/GamesList"
import Search from "@/components/pagination-search/Search"
import PagePagination from "@/components/pagination-search/PagePagination"

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
  const category: Category | null = linkToCategory(params.gameCategory);

  if (!category) {
    notFound();
  }

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.pag) || 1;
  const maxPage = await fetchGamesByCategoryCount(category, query);

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
        <div className="w-full md:w-1/2 lg:w-1/4 md:grow-0 p-4">
          <div className="flex md:flex-col items-center mb-6">
            <Search
              placeholder={`Buscar ${category.toLowerCase()} ...`}
              className="xl:hidden"
              inputClassName="bg-gray-100"
            />
            FILTROS
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 md:gap-4 md:p-6 lg:w-3/5">
          <GamesList query={query} currentPage={currentPage} category={category} />
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
        <Image
          src="/dados.webp"
          alt={category}
          width={450}
          height={450}
          className="w-24 h-auto mr-2 md:ml-6 my-4"
        />
      )
    case Category.JUGUETES:
      return (
        <Image
          src="/oso.webp"
          alt={category}
          width={480}
          height={480}
          className="w-32 h-auto"
        />
      )
    case Category.VIDEOJUEGOS:
      return (
        <Image
          src="/joystick.png"
          alt={category}
          width={512}
          height={512}
          className="w-24 h-auto ml-6 my-4"
        />
      )
  }
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