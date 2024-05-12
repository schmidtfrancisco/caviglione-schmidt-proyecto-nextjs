import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
export default function Cart() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-gray-900 hover:bg-gray-800 text-white hover:text-gray-300 rounded-full"
          size="icon"
        >
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="sr-only">Cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Your Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
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
                <p className="font-medium">Another Product</p>
                <p className="text-sm text-gray-500">$29.99</p>
              </div>
            </div>
            <Button size="icon" variant="ghost">
              <XMarkIcon className="h-4 w-4" />
            </Button>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center justify-between">
            <p className="font-medium">Total</p>
            <p className="font-medium">$49.98</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button className="w-full">Checkout</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}