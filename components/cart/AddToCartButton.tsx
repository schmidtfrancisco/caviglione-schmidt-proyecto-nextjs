"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Game } from "@/lib/definitions/products-definitions";
import { useCart } from "@/lib/hooks/useCart";
import { Button, ButtonProps } from "@/components/ui/button";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function AddToCartButton(
  { game, buttonClassName, ...props }: { game: Game, buttonClassName?: string } & Pick<ButtonProps, "size">
) {
  const { dispatch } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAdded(false)
    }, 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [isAdded])

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", game, quantity: 1 })
    setIsAdded(true)
  }

  return (
    <Button
      onClick={handleAddToCart}
      size={props.size}
      variant="outline"
      className={cn(buttonClassName, 'w-full lg:w-auto')}
    >
      {isAdded ? (
        <div className="flex items-center justify-center gap-2" >
          <CheckIcon className="h-4 w-4 text-green-700" />
          ¡Agregado!
        </div>
      ) :
        "Agregar al carrito"
      }
    </Button>
  );
}