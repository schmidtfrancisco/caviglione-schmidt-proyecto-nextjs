'use client'

import { initMercadoPago } from "@mercadopago/sdk-react";
import Wallet from "@mercadopago/sdk-react/bricks/wallet";

import { useEffect, useState } from "react";
import { IBrandCustomization } from "@mercadopago/sdk-react/bricks/brand/types";






export default function WalletBrick({ preferenceId }: { preferenceId: string }) {

  useEffect(() => {
    initMercadoPago('TEST-833b8760-ddbf-4ff0-8e5d-2b272d62ffa9', {
      locale: 'es-AR',
    });

  }, []);


  const initialization = {
    preferenceId: preferenceId,
    redirectMode: "modal" as "modal" | "blank" | "self",
  }


  
  const customization: IBrandCustomization = {
    text: {
      valueProp: 'payment_methods',
      align: 'left',
      useCustomFont: false,
      size: 'small',
      fontWeight: 'semibold',
      color: 'secondary',
    },
    paymentMethods: {
      excludedPaymentMethods: [],
      excludedPaymentTypes: [],
      maxInstallments: 12,
      interestFreeInstallments: false,
    },
    visual: {
      backgroundColor: 'white', 
      hideMercadoPagoLogo: false,
      border: false,
      borderColor: 'dark',
      contentAlign: 'center',
      borderWidth: '1px',
      borderRadius: '0px',
      verticalPadding: '8px',
      horizontalPadding: '16px',
    },
  }

  const onSubmit = async () => {
    // callback llamado al hacer clic en Wallet Brick
    // esto es posible porque Brick es un botón 

  };

  const onError = async (error: any) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
  };

  const onReady = async () => {
    // Callback llamado cuando Brick esté listo.
    // Aquí puedes ocultar loadings en tu sitio, por ejemplo.  
  };
  return (
    <>
      
      <Wallet
        initialization={initialization}
        

        onReady={onReady}
        onError={onError}
      />
    </>


  );
}