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

export default function Page( {searchParams} : {searchParams: any}) {
  const client = new MercadoPagoConfig({ accessToken: "TEST-8968989067718937-060722-adfaca3b8c9a39eda01ba86f17a1c264-686744806" });
  console.log(searchParams);

  const preferenceId = searchParams.preference_id;
  console.log(preferenceId);
  const paymentId = searchParams.payment_id;
  console.log(paymentId);

  const payment = new Payment(client).get({ id: paymentId });
  console.log(payment);
  
  return (
    <div>
      <h1>Gracias por tu compra</h1>
    </div>
  );
}