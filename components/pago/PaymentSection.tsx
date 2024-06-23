"use client";

import { PaymentContext } from "@/components/pago/PaymentContext";
import PaymentDataForm from "@/components/pago/PaymentDataForm";
import WallletBrick from "@/components/pago/WalletBrick";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/hooks/useCart";
import { formatPrice } from "@/lib/utils";
import { DicesIcon } from "lucide-react";
import { useContext, useEffect } from "react";

export default function PaymentSection() {
  const { cartTotal, cartCount, isCartConfirmed, setIsCartConfirmed } = useCart();
  const { activeStep, setActiveStep, setPreferenceId } = useContext(PaymentContext);


  const handleContinue = () => {
    setIsCartConfirmed(true)
    setActiveStep(2)
  }

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1)
    setPreferenceId("")
  }

  useEffect(() => {
    if (cartCount === 0) {
      setActiveStep(0);
    }
  }, [cartCount, setActiveStep]);

  const ENVIO = 1000;
  const total = cartTotal + (ENVIO*100);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Información del pago</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent>
          <Accordion type="single" value={`step-${activeStep}`} collapsible>

            <AccordionItem value="step-1" disabled={activeStep !== 1}>
              <AccordionTrigger>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-700">1. Confirmar selección</div>
                  {activeStep === 1 && (
                    <Badge variant="outline" className="ml-4 bg-sky-700 text-white font-normal">
                      Actual
                    </Badge>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row gap-1 items-center">
                    <DicesIcon className="w-6 h-6" />
                    <p>Seleccionaste {cartCount} {cartCount === 1 ? "juego" : "juegos"} para el subtotal de {formatPrice(cartTotal)}</p>
                  </div>
                  <h3 className="font-bold underline">Detalle</h3>
                  <div className="flex flex-col gap-1 mx-auto w-full md:w-4/5">
                    <div className="flex flex-row justify-between">
                      <p>Subtotal</p>
                      <p>{formatPrice(cartTotal)}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p>Envio</p>
                      <p>{formatPrice(ENVIO*100)}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                      <p className="font-bold">Total</p>
                      <p className="font-bold">{formatPrice(total)}</p>
                    </div>
                  </div>
                  {isCartConfirmed ? (
                    <div className="flex flex-row gap-1 w-full">
                    <Button className="w-full" variant="outline" onClick={() => setIsCartConfirmed(false)}>
                      Editar carrito
                    </Button>
                    <Button className="w-full" onClick={handleContinue}>
                      Continuar
                    </Button>
                  </div>
                  ) : (
                    <Button className="w-full mx-auto md:w-4/5" onClick={handleContinue}>
                      Confirmar selección
                    </Button>
                  )}

                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-2" disabled={activeStep !== 2}>
              <AccordionTrigger>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-700">2. Datos personales y envío</div>
                  {activeStep === 2 && (
                    <Badge variant="outline" className="ml-4 bg-sky-700 text-white font-normal">
                      Actual
                    </Badge>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <PaymentDataForm />
                </div>
              </AccordionContent>

            </AccordionItem>
            <AccordionItem value="step-3" disabled={activeStep !== 3}>
              <AccordionTrigger>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-700">3. Pagar</div>
                  {activeStep === 3 && (
                    <Badge variant="outline" className="ml-4">
                      Actual
                    </Badge>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-gray-700">Vas a pagar {formatPrice(total)}</h3>
                  <WallletBrick />
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handleBack} className="ml-auto">
                      Volver
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
} 