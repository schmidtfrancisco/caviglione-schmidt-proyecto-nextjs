import { createPreference } from "@/lib/payments";
import PaymentSection from "@/app/ui/pago/PaymentSection";
import ResumeCart from "@/app/ui/pago/ResumeCart";


export default async function Page() {
  return (

    <div className='grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6'>
      <ResumeCart />
      <PaymentSection />
    </div>
  );
}

