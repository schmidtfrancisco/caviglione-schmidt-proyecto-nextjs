'use client'

import { initMercadoPago } from "@mercadopago/sdk-react";
import Wallet from "@mercadopago/sdk-react/bricks/wallet";
import { useEffect, useState } from "react";

export default function WalletBrick({ preferenceId }: { preferenceId: string }) {

  useEffect(() => {
    initMercadoPago('TEST-833b8760-ddbf-4ff0-8e5d-2b272d62ffa9', {
      locale: 'es-AR',
    });

  }, []);


  const initialization = {
    preferenceId: preferenceId,
    redirectMode: "modal",
  }


  const customization = {
    texts: {
      action: 'pay',
      actionComplement: 'amount',
    },
    visual: {
      hideValueProp: false,
      buttonBackground: 'default', // default, black, blue, white
      valuePropColor: 'grey', // grey, white
      buttonHeight: '48px', // min 48px - max free
      borderRadius: '17px',
      verticalPadding: '16px', // min 16px - max free
      horizontalPadding: '0px', // min 0px - max free
    },
  };

  const onSubmit = async (formData) => {
    // callback llamado al hacer clic en Wallet Brick
    // esto es posible porque Brick es un botón 

  };

  const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
  };

  const onReady = async () => {
    // Callback llamado cuando Brick esté listo.
    // Aquí puedes ocultar loadings en tu sitio, por ejemplo.  
  };
  return (

    
      <Wallet
        initialization={initialization}
        customization={customization}
        onSubmit={() => {
          console.log();
        }}
        onReady={onReady}
        onError={onError}
      />
    

  );
}