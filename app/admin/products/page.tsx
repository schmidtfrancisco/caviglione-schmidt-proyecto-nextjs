import Header from "@/app/ui/admin/Header"
import ProductsTable from "@/app/ui/admin/products/ProductsTable"
import PagePagination from "@/app/ui/PagePagination";
import { fetchGamesCount } from "@/lib/data/products-data";

export default async function Component({ searchParams }: { 
	searchParams: { 
		query?: string;
		pag?: string
	} 
}) 
{
	const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.pag) || 1;
  const maxPage = await fetchGamesCount(query);

  return (
		<>
			<Header/>
			<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
				<ProductsTable query={query} currentPage={currentPage}/>
				<PagePagination maxPage={maxPage}/>
			</main>
		</>
  )
}