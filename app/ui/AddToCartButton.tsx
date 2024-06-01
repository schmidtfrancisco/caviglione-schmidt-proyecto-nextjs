'use client';

import { Game } from '@/lib/definitions'
import { useCart } from "@/lib/hooks/useCart";
import { Button, ButtonProps } from "@/components/ui/button";

export default function AddToCartButton( { game, className, ...props }: { game: Game, className?: string} & Pick<ButtonProps, "size"> ) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", game })

  }

  return (
    <Button onClick={handleAddToCart} size={props.size} variant="outline" className={className}>
      Agregar al carrito
    </Button>
  )

}