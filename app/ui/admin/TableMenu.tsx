import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import { UpdateOrder, DeleteOrder } from "@/app/ui/admin/orders/options"
import { SeeOrderDetails } from "@/app/ui/admin/orders/SeeOrderDetails"
import { OrdersTable } from "@/lib/definitions/orders-definitions";

export default function TableMenu({ order }: { order: OrdersTable }) {

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