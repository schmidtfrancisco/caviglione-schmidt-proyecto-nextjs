
import SuccessPayment from "@/app/ui/pago/finalizado/SuccessPayment";
import { createOrder } from "@/lib/actions";
import { existsOrderWithPaymentId } from "@/lib/data/orders-data";
import { Order } from "@/lib/definitions/orders-definitions";
import { mapToOrderItems } from "@/lib/utils";
import { MercadoPagoConfig, Payment } from "mercadopago";
import Image from "next/image";
import Link from "next/link";
import PaymentOrderItem from "@/app/ui/pago/finalizado/PaymentOrderItem";
import { CircleCheckIcon } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { OrderItem } from "@/lib/definitions/orders-definitions";
import { useCart } from "@/lib/hooks/useCart";



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


  const client = new MercadoPagoConfig({ accessToken: "TEST-8968989067718937-060722-adfaca3b8c9a39eda01ba86f17a1c264-686744806" });

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
      <SuccessPayment orderId={orderId} orderItems={orderItems} orderTotal={amount} />
    )

  } catch (error) {
    return (
      <h1> ERROR</h1>
    )
  }
}