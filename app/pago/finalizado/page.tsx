import { createOrder } from "@/lib/actions";
import { Order } from "@/lib/definitions/orders-definitions";
import { mapToOrderItems } from "@/lib/utils";
import { MercadoPagoConfig, Payment } from "mercadopago";


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

export default async function Page( {searchParams} : {searchParams: SearchParams}) {
  const client = new MercadoPagoConfig({ accessToken: "TEST-8968989067718937-060722-adfaca3b8c9a39eda01ba86f17a1c264-686744806" });
 
  const paymentId = searchParams.payment_id;

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
  
  console.log(order);

  await createOrder(order);
  return (
    <div>
      <h1>Gracias por tu compra</h1>
    </div>
  );
}