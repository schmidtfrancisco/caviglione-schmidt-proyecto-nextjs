import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import TableMenu from "@/app/ui/admin/TableMenu"
import { fetchOrders } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default async function OrdersTable() {
	const orders = await fetchOrders();

	return(
		<div className="border shadow-sm rounded-lg p-2">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Pedido</TableHead>
						<TableHead className="hidden md:table-cell">Fecha</TableHead>
						<TableHead className="hidden md:table-cell">Cliente</TableHead>
						<TableHead className="text-right">Total</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{orders.map((order) => (
						<TableRow key={order.id}>
							<TableCell className="font-medium">{order.id}</TableCell>
							<TableCell className="hidden md:table-cell">{order.date.toLocaleDateString()}</TableCell>
							<TableCell className="hidden md:table-cell">{order.client}</TableCell>
							<TableCell className="text-right">{formatPrice(order.total)}</TableCell>
							<TableCell className="text-right">
								<TableMenu order={order}/>
							</TableCell>
						</TableRow>
					))
					}
				</TableBody>
			</Table>
		</div>
	)
}