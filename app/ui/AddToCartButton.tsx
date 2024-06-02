'use client';

import { Game } from '@/lib/definitions'
import { useCart } from "@/lib/hooks/useCart";
import { Button, ButtonProps } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

export default function AddToCartButton({ game, className, ...props }: { game: Game, className?: string } & Pick<ButtonProps, "size">) {
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
    dispatch({ type: "ADD_TO_CART", game })
    setIsAdded(true)
  }

  return (
    <Button
      onClick={handleAddToCart}
      size={props.size}
      variant="outline"
      className={className}
    >
      {isAdded ? (
        <div className="flex items-center gap-2" >
          <CheckIcon className="h-4 w-4" />
          Agregado con éxito
        </div>
      ) :
        "Agregar al carrito"
      }
    </Button>
  )

}