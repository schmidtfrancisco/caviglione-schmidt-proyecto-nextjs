"use client";

import { PaymentContext } from "@/components/pago/PaymentContext";
import { initMercadoPago } from "@mercadopago/sdk-react";
import Wallet from "@mercadopago/sdk-react/bricks/wallet";
import { IWalletBrickCustomization } from "@mercadopago/sdk-react/bricks/wallet/types";
import { useContext, useEffect } from "react";

export default function WalletBrick() {
  const { preferenceId } = useContext(PaymentContext);

  useEffect(() => {
    initMercadoPago("TEST-833b8760-ddbf-4ff0-8e5d-2b272d62ffa9", {
      locale: "es-AR",
    });
  }, []);

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
    redirectMode: "modal" as "modal" | "blank" | "self",
  }

  const customization: IWalletBrickCustomization = {
    visual: {
      hideValueProp: false,
      buttonBackground: 'default',
      valuePropColor: 'grey',
      buttonHeight: '48px',
      borderRadius: '20px',
      verticalPadding: '16px',
      horizontalPadding: '0px',
    },
    checkout: {
      theme: {
        elementsColor: '#4287F5',
        headerColor: '#4287F5',
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