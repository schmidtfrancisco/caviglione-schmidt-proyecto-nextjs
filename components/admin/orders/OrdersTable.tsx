import { DeleteOrder, UpdateOrder } from "@/components/admin/orders/Options";
import OrdersTableMenu from "@/components/admin/orders/OrdersTableMenu";
import { SeeOrderDetails } from "@/components/admin/orders/SeeOrderDetails";
import Status from "@/components/admin/orders/Status";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { fetchFilteredOrders, fetchFilteredOrdersByState } from "@/lib/data/orders-data";
import { formatPrice } from "@/lib/utils";

export default async function OrdersTable(
	{ query, state, currentPage }: { query: string, state: string, currentPage: number },
) {
	let orders;
	if (state === '') {
		orders = await fetchFilteredOrders(query, currentPage);
	}
	else {
		orders = await fetchFilteredOrdersByState(query, state, currentPage);
	}
	return (
		<>
			<div className="md:hidden">
				{orders?.length === 0 && (
					<div className="w-full rounded-md bg-white p-4 text-center">
						<p className="text-sm italic">No hay pedidos</p>
					</div>
				)}
				{orders?.map((order) => (
					<div
						key={order.id}
						className="mb-2 w-full rounded-md bg-white p-4"
					>
						<div className="flex items-center justify-between border-b pb-4">
							<div>
								<div className="mb-2 flex items-center">
									<p className="text-lg font-medium">#{order.id} {order.client}</p>
								</div>
								<p className="text-sm text-gray-500">Destino: {order.zip}</p>
							</div>
							<Status status={order.status}/>
						</div>
						<div className="flex w-full items-center justify-between pt-4">
							<div>
								<p className="text-lg font-medium">
									{formatPrice(order.total)}
								</p>
								<p>{order.date.toLocaleDateString('es-AR')}</p>
							</div>
							<div className="flex justify-end gap-2">
								<SeeOrderDetails id={order.id}/>
								<UpdateOrder id={order.id}/>
								<DeleteOrder id={order.id}/>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="hidden border shadow-sm rounded-lg p-2 md:block">
				<Table>
					{orders?.length === 0 && (
						<TableCaption>No hay pedidos</TableCaption>
					)}
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
								<TableCell className="hidden md:table-cell">
									{order.date.toLocaleDateString('es-AR')}
								</TableCell>
								<TableCell className="hidden md:table-cell">{order.client}</TableCell>
								<TableCell className="text-center"><Status status={order.status} /></TableCell>
								<TableCell className="text-right">{formatPrice(order.total)}</TableCell>
								<TableCell className="text-right">
									<OrdersTableMenu order={order}/>
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