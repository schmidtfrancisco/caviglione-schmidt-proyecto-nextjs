import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import MoveHorizontalIcon from "@/app/ui/admin/MoveHorizontalIcon"

export default function TableMenu() {
	return(
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="icon" variant="ghost">
						<MoveHorizontalIcon className="w-4 h-4" />
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