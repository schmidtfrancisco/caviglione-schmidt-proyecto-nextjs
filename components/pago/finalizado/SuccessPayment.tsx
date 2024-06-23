"use client";

import GameCldImage from "@/components/juegos/GameCldImage";
import { useCart } from "@/lib/hooks/useCart";
import { CircleCheckIcon } from "lucide-react";
import { useEffect } from "react";

export default function SuccessPayment() {
  const { dispatch } = useCart();
  useEffect(() => {
    const clearCart = async () => {
      dispatch({ type: "CLEAR_CART" });
    };
    clearCart();
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-between w-full bg-sky-700 pl-2 pr-6">
        <GameCldImage
          src="GameStore/oso"
          alt="oso"
          width={100}
          height={100}
        />
        <h1 className="text-3xl font-bold mb-2 text-white">¡Gracias por tu compra!</h1>
        <GameCldImage
          src="GameStore/auto"
          alt="auto"
          width={100}
          height={100}
          className="hidden sm:block"
        />
      </div>
      <div className="flex items-center gap-2 my-4">
        <CircleCheckIcon className="text-green-500 h-4 w-4" />
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Tu pago ha sido aprobado.
        </p>
      </div>
    </div>
  );
}