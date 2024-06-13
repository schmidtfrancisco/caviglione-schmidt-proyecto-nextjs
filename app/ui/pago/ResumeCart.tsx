'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/lib/hooks/useCart";
import Link from "next/link";
import Image from "next/image";
import { cn, formatPrice } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import ResumeCartItem from "@/app/ui/pago/ResumeCartItem";
import { Separator } from "@/components/ui/separator";


export default function ResumeCart() {

  const { cart, dispatch, cartTotal, cartCount } = useCart();

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Resumen del carrito</CardTitle>
        </CardHeader>
        <Separator className="mb-6" />
        <CardContent>
          {(cartCount === 0) ? (
            <div className="flex flex-col items-center justify-between w-full gap-2">
              <Image
                src="/emptycart.png"
                alt="No hay items en el carrito"
                width={300}
                height={300}
              />
              <p className="font-medium">No hay juegos en el carrito</p>
              <Link href="/juegos"
                className={cn(buttonVariants({ size: "lg", variant: "default" }), "m-2 cursor-pointer")}>
                Explorar juegos
              </Link>
            </div>
          ) : (
            <div className="grid gap-4">
              {cart.items.map((item) => (
                <ResumeCartItem key={item.game.id} game={item.game} quantity={item.quantity} />
              ))}
            </div>
          )}
        </CardContent>
        {(cartCount === 0) ? (
          <></>
        ) : (
          <CardFooter className="flex items-center justify-between">
            <div className="font-bold text-lg text-gray-700">Subtotal</div>
            <div className="font-medium text-lg text-slate-700">{formatPrice(cartTotal)}</div>
          </CardFooter>
        )}
      </Card>

    </div>
  )
}