'use client'

import { useState } from "react";
import { PaymentContext } from "@/components/pago/PaymentContext";
import PaymentSection from "@/components/pago/PaymentSection";
import ResumeCart from "@/components/pago/ResumeCart";

export default function Page() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [preferenceId, setPreferenceId] = useState<string>("");

  return (
    <PaymentContext.Provider value={
      {
        activeStep, setActiveStep,
        preferenceId, setPreferenceId
      }}
    >
      <div className='grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6'>
        <ResumeCart />
        <PaymentSection />
      </div>
    </PaymentContext.Provider>
  );
}

