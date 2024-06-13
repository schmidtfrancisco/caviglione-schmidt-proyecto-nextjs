import Header from "@/app/ui/admin/Header"
import OrdersTable from "@/app/ui/admin/OrdersTable"

export default function Component() {
  return (
		<>
			<Header/>
			<div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 rounded-lg bg-gray-50 md:bg-white">
				<OrdersTable/>
			</div>
		</>
  )
}