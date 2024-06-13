import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FormState, generatePreference } from "@/lib/actions";
import { mapToMPItems } from "@/lib/utils";
import { useContext, useEffect, useState } from "react";
import { PaymentContext } from "./PaymentContext";
import { useCart } from "@/lib/hooks/useCart";

export default function PaymentDataForm() {
  const { cart } = useCart();
  const { setActiveStep, setPreferenceId } = useContext(PaymentContext);
  const initialState = { message: null, errors: {} };
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  async function continuePayment(formData: FormData) {
    setIsLoading(true);
    const mpItems = mapToMPItems(cart.items);
    const response = await generatePreference(formData, mpItems);
    if (response.formState) {
      setFormState(response.formState)
    }
    if (response.preferenceId) {
      console.log("preferenceId", response.preferenceId)
      setPreferenceId(response.preferenceId);
      setActiveStep(3);
    }
    setIsLoading(false);
  }

  return (
    <form action={continuePayment}>

      <fieldset className="flex flex-col gap-1">
        <legend className="mb-2 block text-base text-gray-700 font-medium">
          Datos personales
        </legend>
        <div className="flex flex-col mx-2">
          <div className="mb-4">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Ingrese su nombre..."
              required
              className="mt-1"
              aria-describedby="name-error"
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {formState.errors?.name &&
                formState.errors.name.map((error: string) => (
                  <p className="mt-2 ml-4 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>


          <div className="mb-4">
            <Label htmlFor="lastname">Apellido</Label>
            <Input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Ingrese su apellido..."
              required
              className="mt-1"
              aria-describedby="lastname-error"
            />
            <div id="lastname-error" aria-live="polite" aria-atomic="true">
              {formState.errors?.lastname &&
                formState.errors.lastname.map((error: string) => (
                  <p className="mt-2 ml-4 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

        </div>
        <Separator className="mb-4" />
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-2 block text-base text-gray-700 font-medium">
          Dirección de envío
        </legend>
        <div className="flex flex-col mx-2">
          <div className="mb-4">
            <Label htmlFor="address">Calle</Label>
            <Input
              id="address"
              type="text"
              name="address"
              placeholder="Estomba"
              required
              className="mt-1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="adressNumber">Número</Label>
              <Input
                id="adressNumber"
                type="number"
                name="addressNumber"
                placeholder="123"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="zip">Código Postal</Label>
              <Input
                id="zip"
                type="text"
                name="zip"
                placeholder="7540"
                required
                className="mt-1"
              />
            </div>
          </div>
        </div>
        <div id="missing-fields" aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500" key={`mesasa`}>
            {formState.message}
          </p>
        </div>
      </fieldset>
      <div className="flex justify-between mx-6 mt-4">
        <Button variant="outline" onClick={() => setActiveStep(1)}>
          Volver
        </Button>
        <Button type="submit" className="md:min-w-[200px]" disabled={isLoading}>
          {isLoading ? <span className="loading loading-dots loading-sm"></span> : "Continuar"}
        </Button>
      </div>
    </form>
  )
}