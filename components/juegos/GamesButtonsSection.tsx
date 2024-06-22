'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { Game } from "@/lib/definitions/products-definitions";
import { useCart } from "@/lib/hooks/useCart";
import { Button, buttonVariants } from "@/components/ui/button";
import { CheckIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function GamesButtonsSection({ game }: { game: Game }) {
  const [quantity, setQuantity] = useState<number>(1);
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
    dispatch({ type: "ADD_TO_CART", game, quantity })
    setIsAdded(true)
    setQuantity(1)
  }

  const handleBuy = () => {
    dispatch({ type: "CLEAR_CART" })
    dispatch({ type: "ADD_TO_CART", game, quantity })
    setIsAdded(true)
    setQuantity(1)
  }

  return (
    <>
      <div className='flex items-center gap-2'>
        <Button
          onClick={handleAddToCart}
          size="lg"
          variant="outline"
          className='min-w-[182px] w-full lg:w-auto'
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

      </div>
      <Link href='/pago' className={buttonVariants({ size: "lg" }) + " lg:max-w-[310px] lg:w-76"} onClick={handleBuy}>Comprar</Link>
    </>
  )
}


