import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import TableMenu from "@/app/ui/admin/TableMenu"

export default function OrdersTable() {
	return(
		<div className="border shadow-sm rounded-lg p-2">
			{
				// TODO: Cambiar todas las rows hardcodeadas por órdenes reales
			}
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Order</TableHead>
						<TableHead className="hidden md:table-cell">Date</TableHead>
						<TableHead className="text-right">Total</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">#3210</TableCell>
						<TableCell className="hidden md:table-cell">February 20, 2022</TableCell>
						<TableCell className="text-right">$42.25</TableCell>
						<TableCell className="text-right">
							<TableMenu/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">#3209</TableCell>
						<TableCell className="hidden md:table-cell">January 5, 2022</TableCell>
						<TableCell className="text-right">$74.99</TableCell>
						<TableCell className="text-right">
							<TableMenu/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">#3204</TableCell>
						<TableCell className="hidden md:table-cell">August 3, 2021</TableCell>
						<TableCell className="text-right">$64.75</TableCell>
						<TableCell className="text-right">
							<TableMenu/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">#3203</TableCell>
						<TableCell className="hidden md:table-cell">July 15, 2021</TableCell>
						<TableCell className="text-right">$34.50</TableCell>
						<TableCell className="text-right">
							<TableMenu/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">#3202</TableCell>
						<TableCell className="hidden md:table-cell">June 5, 2021</TableCell>
						<TableCell className="text-right">$89.99</TableCell>
						<TableCell className="text-right">
							<TableMenu/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">#3201</TableCell>
						<TableCell className="hidden md:table-cell">May 20, 2021</TableCell>
						<TableCell className="text-right">$24.99</TableCell>
						<TableCell className="text-right">
							<TableMenu/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">#3207</TableCell>
						<TableCell className="hidden md:table-cell">November 2, 2021</TableCell>
						<TableCell className="text-right">$99.99</TableCell>
						<TableCell className="text-right">
							<TableMenu/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">#3206</TableCell>
						<TableCell className="hidden md:table-cell">October 7, 2021</TableCell>
						<TableCell className="text-right">$67.50</TableCell>
						<TableCell className="text-right">
							<TableMenu/>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	)
}