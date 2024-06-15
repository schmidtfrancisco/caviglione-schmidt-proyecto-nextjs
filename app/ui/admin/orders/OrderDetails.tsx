import { Separator } from "@/components/ui/separator";
import { fetchOrderById, fetchOrderItems } from "@/lib/data/orders-data";
import Status from "./status";
import { formatPrice } from "@/lib/utils";
import OrderItem from "./OrderItem";

export default async function OrderDetails({ id }: { id: string }) {
  const order = await fetchOrderById(id);
  const orderItems = await fetchOrderItems(id);

  const ENVIO = 1000;
  const total = order.total + (ENVIO * 100);

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <div className="grid gap-1">
          <div className="flex flex-col md:flex-row">
            <div className="md:text-lg font-medium">Pedido #{id}</div>
            <div className="md:text-lg font-medium">{order.client}</div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Realizado el {order.date.toLocaleDateString()}</div>
        </div>
        <Status status={order.status} />
      </div>
      <div className="grid gap-4">
        <div className="grid gap-3">
          <div className="font-medium">Juegos</div>
          {orderItems?.map((item) => (
            <OrderItem key={item.game_id} gameId={item.game_id} quantity={item.quantity}
            />
          ))}

        </div>
        <Separator />
        <div className="grid gap-3">
          <div className="font-medium">Resumen del pedido</div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="text-gray-500 dark:text-gray-400">Subtotal</div>
              <div>{formatPrice(order.total)}</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-500 dark:text-gray-400">Envío</div>
              <div>{formatPrice(ENVIO * 100)}</div>
            </div>
            <Separator />
            <div className="flex items-center justify-between font-medium">
              <div>Total</div>
              <div>{formatPrice(total)}</div>
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="font-medium">Información del cliente</div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="text-gray-500 dark:text-gray-400">Email</div>
              <div>
                <p className="text-blue-600 underline">
                  {" "}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-500 dark:text-gray-400">Dirección de envio</div>
              <div>
                {order.address}
                <br />
                {order.addressNumber}
                <br />
                CP: {order.zip}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

