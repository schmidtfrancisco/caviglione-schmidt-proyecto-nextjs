'use client'

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  console.log(searchParams);
  
  return (
    <div>
      <h1>Gracias por tu compra</h1>
    </div>
  );
}