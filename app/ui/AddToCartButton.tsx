'use client';

import { Game } from '@/lib/definitions'
import { useCart } from "@/lib/hooks/useCart";
import { Button, ButtonProps } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import { cn } from '@/lib/utils';

export default function AddToCartButton(
  { game, quantityOption = false, className, ...props }:
    { game: Game, quantityOption?: boolean, className?: string } & Pick<ButtonProps, "size">
) {
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
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
    dispatch({ type: "ADD_TO_CART", game, quantity })
    setIsAdded(true)
    setQuantity(1)
  }

  return (
    <div className='flex items-center gap-2'>
      <Button
        onClick={handleAddToCart}
        size={props.size}
        variant="outline"
        className={cn(className, 'min-w-56',)}
      >
        {isAdded ? (
          <div className="flex items-center gap-2" >
            <CheckIcon className="h-4 w-4 text-green-700" />
            Agregado con éxito
          </div>
        ) :
          "Agregar al carrito"
        }
      </Button>
      {quantityOption ? (
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setQuantity(quantity - 1)}
            variant="outline"
            className='rounded-full px-3'
            disabled={quantity === 1}
          >
            <MinusIcon className="h-4 w-4" />
          </Button>
          <span className="text-sm font-semibold text-center w-3">{quantity}</span>
          <Button
            onClick={() => setQuantity(quantity + 1)}
            variant="outline"
            className='rounded-full px-3'
          >
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      ) : null}


      
    </div>
  )

}