'use client';

import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import CartItem from "./CartItem"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCart } from "@/lib/hooks/useCart";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Cart() {

  const { cart, dispatch } = useCart();

  const cartTotal = cart.items.reduce((total, item) => total + item.game.price, 0);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-gray-900 hover:bg-gray-800 text-white hover:text-gray-300 rounded-full"
          size="icon"
        >
          <ShoppingCartIcon className="h-6 w-6" />
          <div className="relative">
            <Badge className={cn("absolute -top-5 -right-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white",
              { 'hidden': cart.cartCount === 0 })
            }>
              {cart.cartCount}
            </Badge>
          </div>
          <span className="sr-only">Cart</span>
        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Tu carrito ({cart.cartCount})</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <ScrollArea className="h-[400px]">
          {cart.items.map((item) => (
            <CartItem key={item.game.id} game={item.game} />
          ))}
        </ScrollArea>


        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center justify-between w-full">
            <p className="font-medium">Total</p>
            <p className="font-medium">${cartTotal}</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button className="w-full">Ir a pagar</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>

    </DropdownMenu>
  )
}