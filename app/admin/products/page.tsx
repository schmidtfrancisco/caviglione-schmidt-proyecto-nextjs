import Header from "@/app/ui/admin/Header"
import ProductsTable from "@/app/ui/admin/ProductsTable"

export default function Component() {
  return (
		<>
			<Header/>
			<main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
				<ProductsTable/>
			</main>
		</>
  )
}