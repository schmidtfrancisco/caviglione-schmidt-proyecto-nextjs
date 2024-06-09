'use client';

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Game } from "@/lib/definitions";
import { useCart } from "@/lib/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

export default function ResumeCartItem({ game, quantity }: { game: Game, quantity: number }) {

  const { cart, dispatch } = useCart();
  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id })
    console.log(cart)
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", id, quantity })
  };

  return (
    <>
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-2">
          <Image
            src={game.images_url[0]}
            alt="Product Image"
            width={80}
            height={80}
            className="rounded-md object-cover"
          />
          <div>
            <h3 className="font-medium text-lg pl-2">{game.name}</h3>
            <div className="flex items-center gap-1">

              <Button
                onClick={() => handleUpdateQuantity(game.id, quantity - 1)}
                variant="ghost"
                size="icon"
                className="p-0 m-0"
                disabled={quantity === 1}
              >
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span className="text-sm">{quantity} un.</span>
              <Button
                onClick={() => handleUpdateQuantity(game.id, quantity + 1)}
                variant="ghost"
                size="icon"
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => handleRemoveFromCart(game.id)}
                variant="ghost"
                size="sm"
              >
                <TrashIcon className="h-4 w-4 mr-1" />
                Eliminar
              </Button>
            </div>

          </div>
        </div>
        <div className="flex items-center gap-2 justify-self-end">
          <p className="font-medium text-right">{formatPrice(game.price)}</p>
        </div>
      </div>
      <Separator className="my-2" />
    </>
  )

}

