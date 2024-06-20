import { fetchOrdersCount, fetchOrdersCountByState } from "@/lib/data/orders-data"
import Header from "@/components/admin/Header"
import PagePagination from "@/components/pagination-search/PagePagination"
import OrdersTable from "@/components/admin/pedidos/OrdersTable"

export default async function Component({searchParams} : {
	searchParams: {
		pag?: string
		query?: string
		state?: string
	}
}) {
	const query = searchParams?.query || '';
	const state = searchParams?.state || '';
  const currentPage = Number(searchParams?.pag) || 1;
	let maxPage;
	if (state === '') {
		maxPage = await fetchOrdersCount(query);
	}	
	else {
		maxPage = await fetchOrdersCountByState(query, state);
	}
	
  return (
		<>
			<Header/>
			<div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 rounded-lg bg-gray-50 md:bg-white">
				<OrdersTable query={query} state={state} currentPage={currentPage}/>
				<PagePagination maxPage={maxPage}/>
			</div>
		</>
  )
}