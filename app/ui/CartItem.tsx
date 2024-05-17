import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Game } from "@/lib/definitions";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline"


export default function CartItem({ game }: { game: Game }) {

  return (
    <DropdownMenuItem>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            alt="Product Image"
            className="rounded-md"
            height={40}
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width={40}
          />
          <div>
            <p className="font-medium">Product Name</p>
            <p className="text-sm text-gray-500">$19.99</p>
          </div>
        </div>
        <Button size="icon" variant="ghost">
          <XMarkIcon className="h-4 w-4" />
        </Button>
      </div>
    </DropdownMenuItem>

  )
}