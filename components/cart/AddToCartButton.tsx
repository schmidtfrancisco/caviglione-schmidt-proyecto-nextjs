'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Game } from '@/lib/definitions/products-definitions'
import { useCart } from "@/lib/hooks/useCart";
import { Button, ButtonProps } from "@/components/ui/button";
import { CheckIcon } from '@heroicons/react/24/outline';
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"

export default function AddToCartButton(
  { game, quantityOption = false, buttonClassName, ...props }:
    { game: Game, quantityOption?: boolean, buttonClassName?: string } & Pick<ButtonProps, "size">
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
    <div className={cn({'flex items-center gap-2': quantityOption})}>
      <Button
        onClick={handleAddToCart}
        size={props.size}
        variant="outline"
        className={cn(buttonClassName, 'w-full lg:w-auto')}
      >
        {isAdded ? (
          <div className="flex items-center justify-center gap-2" >
            <CheckIcon className="h-4 w-4 text-green-700" />
            Agregado!
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
          <span className="text-sm font-semibold text-center w-4">{quantity}</span>
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