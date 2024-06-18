'use client'

import Image from "next/image";
import Link from "next/link";
import PaymentOrderItem from "@/app/ui/pago/finalizado/PaymentOrderItem";
import { CircleCheckIcon } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { OrderItem } from "@/lib/definitions/orders-definitions";
import { useCart } from "@/lib/hooks/useCart";

export default function SuccessPayment(
  { orderId, orderItems, orderTotal} :
  { orderId: string, orderItems: OrderItem[], orderTotal: number }
) {

  const { dispatch } = useCart();

  dispatch({ type: "CLEAR_CART" });

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-between w-full bg-sky-700 pl-2 pr-6">
              <Image
                src="/oso.webp"
                alt="oso"
                width={100}
                height={100}
              />
              <h1 className="text-3xl font-bold mb-2 text-white">¡Gracias por tu compra!</h1>
              <Image
                src="/auto.webp"
                alt="auto"
                width={100}
                height={100}
                className="hidden sm:block"
              />
            </div>
            <div className="flex items-center gap-2 my-4">
              <CircleCheckIcon className="text-green-500 h-4 w-4" />
              <p className="text-gray-500 dark:text-gray-400 font-medium">
                Tu pago ha sido aprobado.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-6 px-4">
            <h2 className="text-lg font-medium mb-4">Detalles de tu pedido</h2>
            <div className="grid gap-4 md:px-4">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Pedido #</span>
                <span>{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Compraste...</span>
                <span>
                  <div className="grid gap-1">
                    {orderItems.map((item) => (
                      <PaymentOrderItem key={item.game_id} gameId={item.game_id} quantity={item.quantity} />
                    ))}
                  </div>
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Total (incl. envio)</span>
                <span className="text-medium">{formatPrice((orderTotal + 1000) * 100)}</span>
              </div>
              <div className="flex justify-center text-center">
                <span className="italic">Recibiras un email cuando tu pedido este en camino.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 flex justify-end">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}