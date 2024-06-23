"use client";

import GameCldImage from "@/components/juegos/GameCldImage";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Game } from "@/lib/definitions/products-definitions";
import { useCart } from "@/lib/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { MinusIcon, PlusIcon } from "lucide-react";

export default function ResumeCartItem({ game, quantity }: { game: Game, quantity: number }) {
  const { cart, dispatch, isCartConfirmed } = useCart();
  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id })
    console.log(cart)
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", id, quantity })
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-row gap-2">
          <GameCldImage
            src={game.images_url[0]}
            alt="Product Image"
            width={80}
            height={80}
            className="rounded-md"
          />
          <div>
            <h3 className="font-medium text-lg pl-2">{game.name}</h3>
            <div className="flex items-center gap-1">
              {!isCartConfirmed ? (
                <>
									<Button
										onClick={() => handleUpdateQuantity(game.id, quantity - 1)}
										variant="ghost"
										size="icon"
										className="p-0 m-0"
										disabled={quantity === 1}
									>
										<MinusIcon className="h-4 w-4"/>
									</Button>
									<span className="text-sm text-center">{quantity} un.</span>
									<Button
										onClick={() => handleUpdateQuantity(game.id, quantity + 1)}
										variant="ghost"
										size="icon"
									>
										<PlusIcon className="h-4 w-4"/>
									</Button>
									<Button
										onClick={() => handleRemoveFromCart(game.id)}
										variant="ghost"
										size="sm"
									>
										<TrashIcon className="h-4 w-4 mr-1"/>
										Eliminar
									</Button>
								</>
              ) : (
                <p className="text-sm pl-3 pt-1">Cantidad: {quantity}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end md:justify-self-end">
          <p className="font-medium text-right">{formatPrice(game.price)}</p>
        </div>
      </div>
      <Separator className="my-2"/>
    </>
  );
}