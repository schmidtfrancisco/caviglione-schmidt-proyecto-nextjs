"use client";

import CartItem from "@/components/cart/CartItem";
import GameCldImage from "@/components/juegos/GameCldImage";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/lib/hooks/useCart";
import { cn, formatPrice } from "@/lib/utils";
import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cart() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { cart, dispatch, cartTotal, cartCount } = useCart();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-white text-black hover:bg-gray-700 hover:text-gray-300"
          size="icon"
        >
          <ShoppingCartIcon className="h-6 w-6" />
          <div className="relative">
            <Badge className={cn("absolute -top-5 -right-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white",
              { 'hidden': cartCount === 0 && isClient })
            }>
              {isClient ? cartCount : 0}
            </Badge>
          </div>
          <span className="sr-only">Cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          Tu carrito ({cartCount})
          <Button
            variant="ghost"
            size="icon"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            <TrashIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        {(cartCount === 0) ? (
          <div className="flex flex-col items-center justify-between w-full gap-2">
            <GameCldImage
              src="GameStore/emptycart"
              alt="No hay items en el carrito"
              width={200}
              height={200}
            />
            <p className="font-medium">No hay juegos en el carrito</p>
            <DropdownMenuItem asChild>
              <Link href="/juegos"
                className={cn(buttonVariants({ size: "sm", variant: "default" }), "m-2 cursor-pointer")}>
                Explorar juegos
              </Link>
            </DropdownMenuItem>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[400px]">
              {cart.items.map((item) => (
                <CartItem key={item.game.id} game={item.game} quantity={item.quantity} />
              ))}
            </ScrollArea>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
              <div className="flex items-center justify-between w-full">
                <p className="font-medium">Total</p>
                <p className="font-medium">{formatPrice(cartTotal)}</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem asChild>
              <Link href="/pago"
                className={cn(buttonVariants({ size: "sm", variant: "default" }), "cursor-pointer w-full")}>
                Ir a pagar
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu >
  )
}