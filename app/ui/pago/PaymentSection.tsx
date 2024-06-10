'use client'

import WallletBrick from "@/app/ui/pago/WalletBrick";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generatePreference } from "@/lib/actions";
import { useCart } from "@/lib/hooks/useCart";
import { mapToMPItems } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function PaymentSection() {
  const { cart, cartTotal, cartCount } = useCart();
  const [preferenceId, setPreferenceId] = useState<string>("");

  async function continuePayment(formData: FormData) {
    const mpItems = mapToMPItems(cart.items);
    const preferenceId = await generatePreference(formData, mpItems);
    setPreferenceId(preferenceId ?? "");
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Información del pago</CardTitle>
        </CardHeader>
        <CardContent>

          <form action={continuePayment}>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              type="name"
              name="name"
            />

            <Label htmlFor="lastname">Apellido</Label>
            <Input
              id="lastname"
              type="lastname"
              name="lastname"
            />

            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
            />

            <Label htmlFor="address">Calle</Label>
            <Input
              id="address"
              type="address"
              name="address"
            />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="adressNumber">Número</Label>
                <Input
                  id="adressNumber"
                  type="adressNumber"

                  name="addressNumber"
                />
              </div>
              <div>
                <Label htmlFor="zip">Código Postal</Label>
                <Input
                  id="zip"
                  type="zip"
                  name="zip"
                />
              </div>
            </div>


            <Button
              type="submit"
            >
              Continuar
            </Button>

          </form>

        </CardContent>
        
        {preferenceId !== "" && <WallletBrick preferenceId={preferenceId} />}
      </Card>

      

    </div>
  )
} 