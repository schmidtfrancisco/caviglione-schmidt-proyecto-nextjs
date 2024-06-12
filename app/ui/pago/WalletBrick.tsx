'use client'

import { initMercadoPago } from "@mercadopago/sdk-react";
import Wallet from "@mercadopago/sdk-react/bricks/wallet";
import { useContext, useEffect, useState } from "react";
import { PaymentContext } from "./PaymentContext";
import { IWalletBrickCustomization } from "@mercadopago/sdk-react/bricks/wallet/types";

export default function WalletBrick() {
  const { preferenceId } = useContext(PaymentContext);

  useEffect(() => {
    initMercadoPago('TEST-833b8760-ddbf-4ff0-8e5d-2b272d62ffa9', {
      locale: 'es-AR',
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
      buttonBackground: 'default', // default, black, blue, white
      valuePropColor: 'grey', // grey, white
      buttonHeight: '48px', // min 48px - max free
      borderRadius: '20px',
      verticalPadding: '16px', // min 16px - max free
      horizontalPadding: '0px', // min 0px - max free
    },
    checkout: {
      theme: {
        elementsColor: '#4287F5', // color hex code
        headerColor: '#4287F5', // color hex code
      },
    },
  }

  const onError = async (error: any) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
  };
  return (
    <div className="h-20">
      {renderCheckoutButton(preferenceId)}
    </div>
  );
}