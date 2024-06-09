import { Order } from "@/lib/definitions";
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

export default async function Page( {searchParams} : {searchParams: any}) {
  const client = new MercadoPagoConfig({ accessToken: "TEST-8968989067718937-060722-adfaca3b8c9a39eda01ba86f17a1c264-686744806" });
  console.log(searchParams);

  const preferenceId = searchParams.preference_id;
  console.log(preferenceId);
  const paymentId = searchParams.payment_id;
  console.log(paymentId);

  const payment = await new Payment(client).get({ id: paymentId });
  console.log(payment);

  const amount = payment.transaction_amount!!;
  const payerMp = payment.payer!!;


  const addittionalInfo = payment.additional_info!!;
  const payer = addittionalInfo.payer!!;
  const address = payer.address!!;

  const order: Order = {
    id: paymentId,
    name: payer.first_name!!,
    lastname: payer.last_name!!,
    email: payerMp.email!!,
    address: address.street_name!!,
    zip: address.zip_code!!,
    addressNumber: address.street_number!!,
    items: [],
    total: amount,
    date: new Date().toISOString(),
  };
  
  return (
    <div>
      <h1>Gracias por tu compra</h1>
    </div>
  );
}