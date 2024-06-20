'use client'

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { cn, formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/hooks/useCart";
import ResumeCartItem from "@/components/pago/ResumeCartItem";
import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function ResumeCart() {

  const { cart, dispatch, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Resumen del carrito</CardTitle>
        </CardHeader>
        <Separator className="mb-6" />
        <CardContent>
          <div className="flex flex-col items-center justify-between w-full gap-2">
            <CldImage
              src="GameStore/emptycart"
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
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-center">Resumen del carrito</CardTitle>
          <Button
            className="m-2 cursor-pointer"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Vaciar carrito
          </Button>
        </CardHeader>
        <Separator className="mb-6" />
        <CardContent>
          <div className="grid gap-4">
            {cart.items.map((item) => (
              <ResumeCartItem key={item.game.id} game={item.game} quantity={item.quantity} />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="font-bold text-lg text-gray-700">Subtotal</div>
          <div className="font-medium text-lg text-slate-700">{formatPrice(cartTotal)}</div>
        </CardFooter>
      </Card>
    </div>
  )
}