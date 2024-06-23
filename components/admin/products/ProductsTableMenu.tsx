import { DeleteProduct, EditProduct } from "@/components/admin/products/ProductOptions";
import { SeeProductDetails } from "@/components/admin/products/SeeProductDetails";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Game } from "@/lib/definitions/products-definitions";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

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
				<DropdownMenuItem asChild><SeeProductDetails game={game}/></DropdownMenuItem>
				<DropdownMenuItem asChild><EditProduct id={game.id}/></DropdownMenuItem>
				<DropdownMenuItem asChild><DeleteProduct id={game.id}/></DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}