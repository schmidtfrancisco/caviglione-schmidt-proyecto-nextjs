'use server'

import { z } from 'zod';
import MercadoPagoConfig, { Preference } from 'mercadopago';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'
import { signIn } from '../auth';
import { AuthError } from 'next-auth';
import { Order } from '@/lib/definitions/orders-definitions';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData, {
      redirectTo: '/admin',
    });
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