'use server'

import { z } from 'zod';
import MercadoPagoConfig, { Preference } from 'mercadopago';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { Order } from '@/lib/definitions/orders-definitions';

const FormSchema = z.object({
  id: z.string(),
  total: z.coerce
    .number()
    .gt(0, { message: 'Ingrese un monto mayor a $0.' }),
  status: z.enum(['Aprobado', 'Enviado', 'Entregado', 'Cancelado'], {
    invalid_type_error: 'Por favor seleccione un estado',
  }),
  date: z.string(),
});

const UpdateOrder = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    total?: string[];
    status?: string[];
  };
  message?: string | null;
};


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

const onlyLetters = (value: string) => /^[A-Za-z\s]+$/.test(value);

const PaymentFormSchema = z.object({
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

  const validatedData = PaymentFormSchema.safeParse(Object.fromEntries(formData.entries()));

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
  const client = order.name + " " + order.lastname;
  const amountInCents = Math.trunc(order.total * 100);
  const date = new Date().toISOString().split('T')[0];

  try {
    const result = await sql`
      INSERT INTO gamestore.orders
      (payment_id, client, email, address, addressNumber, zip, total, status, date)
      VALUES
      (${order.payment_id}, ${client}, ${order.email}, ${order.address}, ${order.addressNumber}, ${order.zip}, ${amountInCents}, ${order.status}, ${date})
      ON CONFLICT (payment_id) DO NOTHING
      RETURNING id
    `;

    const orderId = result.rows[0].id;

    await Promise.all(
      order.items.map(async (item) => {
        await sql`
          INSERT INTO gamestore.games_orders
          (order_id, game_id, quantity)
          VALUES
          (${orderId}, ${item.game_id}, ${item.quantity})
          ON CONFLICT (order_id, game_id) DO NOTHING
        `;
      }),
    );

    return orderId;
  } catch (error) {
    console.log(error);
  }
}

export async function updateOrder(id: number, prevState: State, formData: FormData) {
  const validatedFields = UpdateOrder.safeParse({
    total: formData.get('total'),
    status: formData.get('status'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Campos inválidos. Error al actualizar el pedido.',
    };
  }
  const { total, status } = validatedFields.data;
  const totalInCents = total * 100;
  try {
    await sql`
			UPDATE gamestore.orders
			SET total = ${totalInCents}, status = ${status}
			WHERE id = ${id}
		`;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Order.' };
  }
  revalidatePath('/admin');
  redirect('/admin');
}

export async function deleteOrder(id: number) {
  console.log(id, 'borrando');
  try {
    await sql`
      DELETE FROM gamestore.games_orders
      WHERE order_id = ${id}
    `;

    await sql`
      DELETE FROM gamestore.orders 
      WHERE id = ${id}
    `;
    revalidatePath('/admin');
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

export async function deleteProduct(id: string) {
	try {
		await sql`DELETE FROM gamestore.games WHERE id = ${id}`;
	} catch (error) {
		return { message: 'Database Error: Failed to Delete Order.' };
	}
	revalidatePath('/admin');
}