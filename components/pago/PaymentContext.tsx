import React, { createContext } from 'react';

const defaultValue = {
  activeStep: 1,
  setActiveStep: () => {},
  preferenceId: "",
  setPreferenceId: () => {},
};

const PaymentContext = createContext<{
  activeStep: number,
  setActiveStep: React.Dispatch<React.SetStateAction<number>>,
  preferenceId: string,
  setPreferenceId: React.Dispatch<React.SetStateAction<string>>
  }>(defaultValue);

export { PaymentContext };