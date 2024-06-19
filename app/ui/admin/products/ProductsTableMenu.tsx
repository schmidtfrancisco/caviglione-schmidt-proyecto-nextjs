import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"
import { Game } from "@/lib/definitions";
import { SeeProductDetails } from "@/app/ui/admin/products/SeeProductDetails";
import { EditProduct, DeleteProduct } from "@/app/ui/admin/products/ProductOptions";

export default function ProductsTableMenu({ game }: { game: Game }) {

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" variant="ghost">
					<EllipsisHorizontalIcon className="w-6 h-6" />
					<span className="sr-only">Actions</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="flex flex-col gap-1">
				<DropdownMenuItem asChild><SeeProductDetails game= {game}/></DropdownMenuItem>
				<DropdownMenuItem asChild><EditProduct id={game.id} /></DropdownMenuItem>
				<DropdownMenuItem asChild><DeleteProduct id={game.id} /></DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}