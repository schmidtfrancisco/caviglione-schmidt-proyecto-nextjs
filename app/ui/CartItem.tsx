'use client';

import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Game } from "@/lib/definitions";
import { useCart } from "@/lib/hooks/useCart";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline"


export default function CartItem({ game }: { game: Game }) {

  const { cart, dispatch } = useCart();

  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id })
    console.log(cart)
  };

  return (
    <DropdownMenuItem>
      <div className="flex items-center justify-between w-full gap-2">
        <div className="flex items-center gap-2">
          <img
            alt="Product Image"
            className="rounded-md"
            height={40}
            src={game.images_url[0]}
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width={40}
          />
          <div>
            <p className="font-medium">{game.name}</p>
            <p className="text-sm text-gray-500">${game.price}</p>
          </div>
        </div>
        <Button onClick={() => handleRemoveFromCart(game.id)} size="icon" variant="ghost" className="hover:bg-gray-200" >
          <XMarkIcon className="h-4 w-4" />
        </Button>
      </div>
    </DropdownMenuItem>

  )
}