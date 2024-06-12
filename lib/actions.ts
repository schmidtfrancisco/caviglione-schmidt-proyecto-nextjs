'use server'

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { MPItem, Order } from '@/lib/definitions';
import MercadoPagoConfig, { Preference } from 'mercadopago';
import { sql } from '@vercel/postgres';
import { z } from 'zod';

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

export type FormState = {
  errors?: {
    name?: string[];
    lastname?: string[];
  };
  message?: string | null;
}

export type PreferenceResponse = {
  formState?: FormState
  preferenceId?: string
}

const onlyLetters = (value: string) => /^[A-Za-z]+$/.test(value);

const FormSchema = z.object({
  name: z.string().refine(onlyLetters, {
    message: 'El nombre debe contener solo letras'
  }),
  lastname: z.string()
    .refine(onlyLetters, {
      message: 'El apellido debe contener solo letras'
    }),
  address: z.string(),
  addressNumber: z.coerce.number(),
  zip: z.string(),
});

const client = new MercadoPagoConfig({ accessToken: "TEST-8968989067718937-060722-adfaca3b8c9a39eda01ba86f17a1c264-686744806" });

export async function generatePreference(
  formData: FormData,
  mpItems: any
): Promise<PreferenceResponse> {

  const validatedData = FormSchema.safeParse(Object.fromEntries(formData.entries()));

  console.log(mpItems);

  if (!validatedData.success) {
    return {
      formState: {
        errors: validatedData.error.flatten().fieldErrors,
        message: "Datos incorrectos. Verifique y vuelva a intentar."
      }
    };
  }

  try {
    const body = {
      items: mpItems,
      payer: {
        name: validatedData.data.name,
        surname: validatedData.data.lastname,
        address: {
          zip_code: validatedData.data.zip,
          street_name: validatedData.data.address,
          street_number: validatedData.data.addressNumber,
        },
      },
      back_urls: {
        success: 'https://caviglione-schmidt-proyecto-nextjs.vercel.app//pago/finalizado',
        failure: 'https://www.your-site.com/failure',
        pending: 'https://www.your-site.com/pending'
      },
      auto_return: 'approved',
      shipments: {
        cost: 1000,
        mode: "not_specified",
      }
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });

    return {
      preferenceId: result.id
    };

  } catch (error) {
    console.log(error);

    return {
      formState: {
        message: "Ocurrio un error. Intente de nuevo."
      }
    };
  }
}

export async function createOrder(
  order: Order
) {
  const client = order.name + order.lastname;
  const amountInCents = Math.trunc(order.total * 100);

  try {
    const result = await sql`
      INSERT INTO gamestore.orders
      (payment_id, client, email, address, addressNumber, zip, total)
      VALUES
      (${order.payment_id}, ${client}, ${order.email}, ${order.address}, ${order.addressNumber}, ${order.zip}, ${amountInCents})
      ON CONFLICT (id) DO NOTHING
      RETURNING id
    `;

    const orderId = result.rows[0].id;

    await Promise.all(
      order.items.map(async (item) => {
        await sql`
          INSERT INTO gamestore.games_orders
          (order_id, game_id, quantity)
          VALUES
          (${orderId}, ${item.id}, ${item.quantity})
          ON CONFLICT (order_id, game_id) DO NOTHING
        `;
      }),
    );
  } catch (error) {
    console.log(error);
  }
}