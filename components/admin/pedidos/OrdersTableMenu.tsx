
import { OrdersTable } from "@/lib/definitions/orders-definitions"
import { UpdateOrder, DeleteOrder } from "@/components/admin/pedidos/options"
import { SeeOrderDetails } from "@/components/admin/pedidos/SeeOrderDetails"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"

export default function OrdersTableMenu({ order }: { order: OrdersTable }) {

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" variant="ghost">
					<EllipsisHorizontalIcon className="w-6 h-6" />
					<span className="sr-only">Actions</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="flex flex-col gap-1">
				<DropdownMenuItem asChild><SeeOrderDetails id={order.id} /></DropdownMenuItem>
				<DropdownMenuItem asChild><UpdateOrder id={order.id} /></DropdownMenuItem>
				<DropdownMenuItem asChild><DeleteOrder id={order.id} /></DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}