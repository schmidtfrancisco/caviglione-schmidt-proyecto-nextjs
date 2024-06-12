import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import { UpdateOrder, DeleteOrder } from "@/app/ui/admin/orders/options"
import { fetchOrders } from "@/lib/data";
import { OrdersTable } from "@/lib/definitions";

export default async function TableMenu({order}: {order: OrdersTable}) {
	return(
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="icon" variant="ghost">
						<EllipsisHorizontalIcon className="w-6 h-6" />
						<span className="sr-only">Actions</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{
						// TODO: Cambiar todos los items por Links (creo)
					}
					
					<DropdownMenuItem>View order</DropdownMenuItem>
					<DropdownMenuItem><UpdateOrder id={order.id}/></DropdownMenuItem>
					<DropdownMenuItem><DeleteOrder id={order.id}/></DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}