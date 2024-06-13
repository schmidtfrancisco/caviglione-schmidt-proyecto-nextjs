'use client';

import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Game } from "@/lib/definitions";
import { useCart } from "@/lib/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import Image from "next/image";
import GameCldImage from "./juegos/GameCldImage";


export default function CartItem({ game, quantity }: { game: Game, quantity: number }) {

  const { cart, dispatch, isCartConfirmed } = useCart();

  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id })
    console.log(cart)
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", id, quantity })
  };

  const preventClousure = (event: Event) => event.preventDefault();

  return (
    <DropdownMenuItem onSelect={preventClousure} className="hover:none">
      <div className="flex items-center justify-between w-full gap-2">
        <div className="flex items-center gap-2">
          <GameCldImage
            alt="Product Image"
            className="rounded-md"
            height={40}
            src={game.images_url[0]}
            width={40}
          />
          <div>
            <p className="text-sm font-medium pl-2">{game.name}</p>
            <div className="flex items-center gap-1">
              {!isCartConfirmed ? (
                <>
                  {(quantity === 1) ? (
                    <Button onClick={() => handleRemoveFromCart(game.id)} size="icon" variant="ghost" className="hover:bg-gray-200" >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleUpdateQuantity(game.id, quantity - 1)}
                      variant="ghost"
                      size="icon"
                      className="p-0 m-0">
                      <MinusIcon className="h-4 w-4" />
                    </Button>
                  )}
                  <span className="text-sm">{quantity} u.</span>
                  <Button
                    onClick={() => handleUpdateQuantity(game.id, quantity + 1)}
                    variant="ghost"
                    size="icon"
                  >
                    <PlusIcon className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <p className="text-xs pl-3">Cant.: {quantity}</p>
              )}

            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">{formatPrice(game.price)}</p>

      </div>
    </DropdownMenuItem>

  )
}
