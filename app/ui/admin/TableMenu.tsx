import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"

export default function TableMenu() {
	return(
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="icon" variant="ghost">
						<EllipsisHorizontalIcon className="w-6 h-6" />
						<span className="sr-only">Actions</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{
						// TODO: Cambiar todos los items por Links (creo)
					}
					<DropdownMenuItem>View order</DropdownMenuItem>
					<DropdownMenuItem>Edit order</DropdownMenuItem>
					<DropdownMenuItem>Remove order</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}