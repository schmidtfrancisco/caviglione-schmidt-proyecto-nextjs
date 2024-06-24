"use client";

import { PaymentContext } from "@/components/pago/PaymentContext";
import { initMercadoPago } from "@mercadopago/sdk-react";
import Wallet from "@mercadopago/sdk-react/bricks/wallet";
import { IWalletBrickCustomization } from "@mercadopago/sdk-react/bricks/wallet/types";
import { useContext } from "react";

export default function WalletBrick() {
  const { preferenceId } = useContext(PaymentContext);

  
  initMercadoPago("TEST-9191c3fa-8ee2-435a-8fc5-69e7bb424d11", {
    locale: "es-AR",
  });
  

  const renderCheckoutButton = (preferenceId: string) => {
    if (preferenceId === "") return null;
    return (
      <Wallet
        initialization={initialization}
        customization={customization}
        onError={onError}
      />
    );
  }

  const initialization = {
    preferenceId: preferenceId,
    redirectMode: "self" as "modal" | "blank" | "self",
  }

  const customization: IWalletBrickCustomization = {
    visual: {
      hideValueProp: false,
      buttonBackground: "default",
      valuePropColor: "grey",
      buttonHeight: "48px",
      borderRadius: "20px",
      verticalPadding: "16px",
      horizontalPadding: "0px",
    },
    checkout: {
      theme: {
        elementsColor: "#4287F5",
        headerColor: "#4287F5",
      },
    },
  }

  const onError = async (error: any) => {
    console.log(error);
  };
  return (
    <div className="h-20">
      {renderCheckoutButton(preferenceId)}
    </div>
  );
}