import PaymentOrderItem from "@/components/pago/finalizado/PaymentOrderItem";
import SuccessPayment from "@/components/pago/finalizado/SuccessPayment";
import { createOrder } from "@/lib/actions";
import { existsOrderWithPaymentId } from "@/lib/data/orders-data";
import { Order } from "@/lib/definitions/orders-definitions";
import { formatPrice, mapToOrderItems } from "@/lib/utils";
import { MercadoPagoConfig, Payment } from "mercadopago";
import Link from "next/link";

//paymentid 1324031525

interface SearchParams {
  collection_id: string;
  collection_status: string;
  payment_id: string;
  status: string;
  external_reference: string;
  payment_type: string;
  merchant_order_id: string;
  preference_id: string;
}

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const paymentId = searchParams.payment_id;
  const existPayment = await existsOrderWithPaymentId(paymentId);
  if (existPayment) {
    return (
      <h1> EXISTEEE</h1>
    )
  }
  const client = new MercadoPagoConfig({
		accessToken: "TEST-8968989067718937-060722-adfaca3b8c9a39eda01ba86f17a1c264-686744806"
	});
  try {
    const payment = await new Payment(client).get({ id: paymentId });
    const amount = payment.transaction_amount!!;
    const payerMp = payment.payer!!;
    const addittionalInfo = payment.additional_info!!;
    const payer = addittionalInfo.payer!!;
    const address = payer.address!!;
    const orderItems = mapToOrderItems(addittionalInfo.items!!);
    const order: Order = {
      payment_id: paymentId,
      name: payer.first_name!!,
      lastname: payer.last_name!!,
      email: payerMp.email!!,
      address: address.street_name!!,
      zip: address.zip_code!!,
      addressNumber: Number(address.street_number!!),
      items: orderItems,
      status: "Aprobado",
      total: amount,
    };
    const orderId = await createOrder(order);
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="">
            <SuccessPayment/>
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
                        <PaymentOrderItem key={item.game_id} gameId={item.game_id} quantity={item.quantity}/>
                      ))}
                    </div>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Total (incl. envio)</span>
                  <span className="text-medium">{formatPrice((order.total + 1000) * 100)}</span>
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
  } catch (error) {
    return (
      <h1> ERROR</h1>
    )
  }
}