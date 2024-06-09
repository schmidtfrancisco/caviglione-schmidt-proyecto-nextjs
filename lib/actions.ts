'use server'

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { MPItem } from '@/lib/definitions';
import MercadoPagoConfig, { Preference } from 'mercadopago';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

const client = new MercadoPagoConfig({ accessToken: "TEST-8968989067718937-060722-adfaca3b8c9a39eda01ba86f17a1c264-686744806" });

export async function generatePreference(
  formData: FormData,
  mpItems: any
) {

  console.log(mpItems);
  try {
    const body = {
      items: mpItems,	
      payer: {
        name: formData.get('name')?.toString() || 'Test',
        surname: formData.get('lastname')?.toString() || 'User',
        email: formData.get('email')?.toString() || 'your_test_email@example.com',
        address: {
          zip_code: formData.get('zip')?.toString() || '06233200',
          street_name: formData.get('address')?.toString() || 'Street',
          street_number: Number(formData.get('number')),
        },
      },
      back_urls: {
        success: 'https://caviglione-schmidt-proyecto-nextjs.vercel.app/pago/finalizado',
        failure: 'https://www.your-site.com/failure',
        pending: 'https://www.your-site.com/pending'
      },
      auto_return: 'approved',
    };

    const preference = new Preference(client);

  

    const result = await preference.create({ body });

    return (result.id);

  } catch (error) {
    console.log(error);
  }
}