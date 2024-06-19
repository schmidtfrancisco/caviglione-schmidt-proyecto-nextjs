import { Separator } from "@/components/ui/separator";
import { fetchOrderById, fetchOrderItems } from "@/lib/data/orders-data";
import Status from "./status";
import { formatPrice } from "@/lib/utils";
import OrderItem from "./OrderItem";
import { Joystick } from "lucide-react";
import { ListBulletIcon, UserCircleIcon, EnvelopeIcon, CalendarDaysIcon, TruckIcon } from "@heroicons/react/24/outline";

export default async function OrderDetails({ id }: { id: number }) {
  const order = await fetchOrderById(id);
  const orderItems = await fetchOrderItems(id);

  const ENVIO = 1000;
  const total = order.total + (ENVIO * 100);

  return (
    <div className="grid gap-6 md:px-8">
      <div className="flex items-center justify-between">
        <div className="grid gap-1">
          <div className="flex flex-col gap-2 md:flex-row">
            <div className="md:text-lg font-medium">Pedido #{id}</div>
            <div className="md:text-lg font-medium">{order.client}</div>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <CalendarDaysIcon className="w-4 h-4" />
            Realizado el {order.date.toLocaleDateString()}
          </div>
        </div>
        <Status status={order.status} />
      </div>
      <div className="grid gap-4">
        <div className="grid gap-3">
          <div className="flex items-center gap-1 font-medium">
            <Joystick className="w-4 h-4" />
            Juegos
          </div>
          {orderItems?.map((item) => (
            <OrderItem key={item.game_id} gameId={item.game_id} quantity={item.quantity}
            />
          ))}
        </div>
        <Separator />
        <div className="grid gap-3">
          <div className="flex items-center gap-1 font-medium">
            <ListBulletIcon className="w-4 h-4" />
            Resumen del pedido
          </div>
          <div className="grid gap-2 md:px-4">
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-500 dark:text-gray-400">Subtotal</div>
              <div>{formatPrice(order.total)}</div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-500 dark:text-gray-400">Envío</div>
              <div>{formatPrice(ENVIO * 100)}</div>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-medium text-sm md:text-base">
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </div>
            <div className="flex items-center gap-4 text-xs md:text-sm text-gray-500">
              <div>Id de pago</div>
              <div>{order.payment_id}</div>
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="flex items-center gap-1 font-medium">
            <UserCircleIcon className="w-4 h-4" />
            Información del cliente
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between text-xs md:text-sm">
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <EnvelopeIcon className="w-4 h-4" />
                Email
              </div>
              <div>
                <p className="text-blue-600 underline">
                  {order.email}
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <TruckIcon className="w-4 h-4" />
                Dirección de envio
              </div>
              <div className="flex flex-col ml-auto mr-6">
                <div className="flex items-center gap-4 justify-between text-sm">
                  <div className="text-gray-500 dark:text-gray-400">Calle:</div>
                  <div>{order.address}</div>
                </div>
                <div className="flex items-center gap-4 justify-between text-sm">
                  <div className="text-gray-500 dark:text-gray-400">Altura:</div>
                  <div>{order.addressnumber}</div>
                </div>
                <div className="flex items-center gap-4 justify-between text-sm">
                  <div className="text-gray-500 dark:text-gray-400">Cod. Postal:</div>
                  <div>{order.zip}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

