import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import TableMenu from "@/app/ui/admin/TableMenu"
import { fetchFilteredGames } from "@/lib/data";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import GameCldImage from "../juegos/GameCldImage";

export default async function ProductsTable(
	{ query, currentPage }: { query: string, currentPage: number },
) {

	const games = await fetchFilteredGames(query, currentPage);

	return (
		<div className="border shadow-sm rounded-lg p-2">

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[80px]"></TableHead>
						<TableHead className="">Nombre</TableHead>
						<TableHead className="hidden md:table-cell">Categoría</TableHead>
						<TableHead className="hidden md:table-cell">Precio</TableHead>
						<TableHead className="text-right">Acciones</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{games.map((game) => (
						<TableRow key={game.id}>
							<TableCell className="font-medium">
								<GameCldImage alt={game.name}
									className="rounded-md"
									height={80}
									src={game.images_url[0]}
									width={80}
								/>
							</TableCell>
							<TableCell className="">{game.name}</TableCell>
							<TableCell className="hidden md:table-cell">{game.category}</TableCell>
							<TableCell className="hidden md:table-cell">{formatPrice(game.price)}</TableCell>
							<TableCell className="text-right">
								{//<TableMenu />
								}
							</TableCell>
						</TableRow>
					))
					}
				</TableBody>
			</Table>
		</div>
	)
}