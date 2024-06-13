import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import TableMenu from "@/app/ui/admin/TableMenu"
import { fetchOrders } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import Status from "./orders/status";
import { DeleteOrder, UpdateOrder } from "./orders/options";

export default async function OrdersTable() {
	const orders = await fetchOrders();

	return (
		<>
			<div className="md:hidden">
				{orders?.map((order) => (
					<div
						key={order.id}
						className="mb-2 w-full rounded-md bg-white p-4"
					>
						<div className="flex items-center justify-between border-b pb-4">
							<div>
								<div className="mb-2 flex items-center">
									<p className="text-lg font-medium">#{order.id} {order.client} </p>
								</div>
								<p className="text-sm text-gray-500">Destino: {order.zip}</p>
							</div>
							<Status status={order.status} />
						</div>
						<div className="flex w-full items-center justify-between pt-4">
							<div>
								<p className="text-lg font-medium">
									{formatPrice(order.total)}
								</p>
								<p>{order.date.toLocaleDateString()}</p>
							</div>
							<div className="flex justify-end gap-2">
								<UpdateOrder id={order.id} />
								<DeleteOrder id={order.id}  />
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="hidden border shadow-sm rounded-lg p-2 md:block">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Pedido</TableHead>
						<TableHead className="hidden md:table-cell">Fecha</TableHead>
						<TableHead className="hidden md:table-cell">Cliente</TableHead>
						<TableHead className="text-center">Estado</TableHead>
						<TableHead className="text-right">Total</TableHead>
						<TableHead className="text-right">Acciones</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{orders.map((order) => (
						<TableRow key={order.id}>
							<TableCell className="font-medium"># {order.id}</TableCell>
							<TableCell className="hidden md:table-cell">{order.date.toLocaleDateString()}</TableCell>
							<TableCell className="hidden md:table-cell">{order.client}</TableCell>
							<TableCell className="text-center"><Status status={order.status} /></TableCell>
							<TableCell className="text-right">{formatPrice(order.total)}</TableCell>
							<TableCell className="text-right">
								<TableMenu order={order} />
							</TableCell>
						</TableRow>
					))
					}
				</TableBody>
			</Table>
			</div>
		</>
	)
}