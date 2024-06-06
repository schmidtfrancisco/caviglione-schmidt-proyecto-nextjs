import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import TableMenu from "@/app/ui/admin/TableMenu"

// TODO: Importar datos de la db
export default function ProductsTable(//{//products: {data: products}}
	) {
	return(
		<div className="border shadow-sm rounded-lg p-2">
			{
				// TODO: Cambiar todas las rows hardcodeadas por órdenes reales
			}
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]"></TableHead>
						<TableHead className="hidden md:table-cell">Nombre</TableHead>
						<TableHead className="hidden md:table-cell">Categoría</TableHead>
						<TableHead className="text-right">Precio</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{ /**
					<TableRow>
						<TableCell className="font-medium">#7777</TableCell>
						<TableCell className="hidden md:table-cell">February 20, 2022</TableCell>
						<TableCell className="text-right">$42.25</TableCell>
						<TableCell className="text-right">
							<TableMenu/>
						</TableCell>
					</TableRow>
					*/}
				</TableBody>
			</Table>
		</div>
	)
}