'use client'

import { MercadoPagoConfig, Payment } from "mercadopago";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const client = new MercadoPagoConfig({ accessToken: "TEST-8968989067718937-060722-adfaca3b8c9a39eda01ba86f17a1c264-686744806" });
  const searchParams = useSearchParams();
  console.log(searchParams);

  const preferenceId = searchParams.get('preference_id');
  console.log(preferenceId);
  const paymentId = searchParams.get('payment_id') as string;
  console.log(paymentId);

  const payment = new Payment(client).get({ id: paymentId });
  console.log(payment);
  
  return (
    <div>
      <h1>Gracias por tu compra</h1>
    </div>
  );
}