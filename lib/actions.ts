"use server";

import { signIn } from "@/auth";
import { Order } from "@/lib/definitions/orders-definitions";
import { Category } from "@/lib/definitions/products-definitions";
import { sql } from "@vercel/postgres";
import MercadoPagoConfig, { Preference } from "mercadopago";
import { AuthError, CredentialsSignin } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    const formDataObject = Object.fromEntries(formData.entries());
    await signIn("credentials", {
      ...formDataObject,
      redirectTo: "/admin",
    }
    );
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CallbackRouteError":
          if (error.cause?.err instanceof CredentialsSignin) {
            return "El email y/o la contraseña ingresados no son correctos.";
          }
          return "Ocurrio un error inesperado.";
        case "CredentialsSignin":
          return "El email y/o la contraseña ingresados no son correctos.";
        default:
          return "Ocurrio un error inesperado.";
      }
    }
    throw error;
  }
}

const OrderFormSchema = z.object({
  id: z.string(),
  total: z.coerce
    .number()
    .gt(0, { message: 'Ingrese un monto mayor a $0.' }),
  status: z.enum(['Aprobado', 'Enviado', 'Entregado', 'Cancelado'], {
    invalid_type_error: 'Por favor seleccione un estado',
  }),
  date: z.string(),
});

const ProductFormSchema = z.object({
  id: z.string(),
	name: z.string(),
	description: z.string(),
	images: z.string().refine(val => val.trim().length > 0, {
		message: "Debe seleccionar al menos una imagen."
	}),
  category: z.enum([Category.JUEGOS_DE_MESA, Category.VIDEOJUEGOS, Category.JUGUETES], {
    invalid_type_error: "Por favor seleccione una categoría."
  }),
	price: z.coerce
    .number()
    .gt(0, { message: "Ingrese un monto mayor a $0." }),
});

const UpdateOrder = OrderFormSchema.omit({ id: true, date: true });
const UpdateProduct = ProductFormSchema.omit({ id: true, images: true });
const CreateProduct = ProductFormSchema.omit({ id: true })

export type State = {
  errors?: {
    total?: string[];
    status?: string[];
  };
  message?: string | null;
};

export type ProductState = {
  errors?: {
		name?: string[];
		description?: string[];
		images?: string[];
		category?: string[];
		price?: string[];
  };
  message?: string | null;
};


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
    message: "El nombre debe contener solo letras"
  }),
  lastname: z.string()
    .refine(onlyLetters, {
      message: "El apellido debe contener solo letras"
    }),
  address: z.string(),
  addressNumber: z.coerce.number(),
  zip: z.string(),
});

const client = new MercadoPagoConfig({
	accessToken: "APP_USR-5677161765353145-062318-f4b899bd3217451f89ca231d322a75f9-686744806",
});

export async function generatePreference(
  formData: FormData,
  mpItems: any
): Promise<PreferenceResponse> {
  const validatedData = PaymentFormSchema.safeParse(Object.fromEntries(formData.entries()));
  
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
        success: "https://caviglione-schmidt-proyecto-nextjs.vercel.app/pago/finalizado",
        failure: "https://caviglione-schmidt-proyecto-nextjs.vercel.app/pago",
        pending: "https://caviglione-schmidt-proyecto-nextjs.vercel.app/pago"
      },
      auto_return: "approved",
      shipments: {
        cost: 1000,
        mode: "not_specified",
      }
    };
    const preference = new Preference(client);
    const result = await preference.create({ body });

    console.log(result);

    console.log(result.id);

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
    total: formData.get("total"),
    status: formData.get("status"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Campos inválidos. Error al actualizar el pedido.",
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
    return { message: "Database Error: Failed to Update Order." };
  }
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deleteOrder(id: number) {
  try {
    await sql`
      DELETE FROM gamestore.games_orders
      WHERE order_id = ${id}
    `;
    await sql`
      DELETE FROM gamestore.orders 
      WHERE id = ${id}
    `;
    revalidatePath("/admin");
  } catch (error) {
    return { message: "Database Error: Failed to Delete Invoice." };
  }
}

export async function deleteProduct(id: string) {
  try {
    await sql`DELETE FROM gamestore.games WHERE id = ${id}`;
  } catch (error) {
    return { message: "Database Error: Failed to Delete Order." };
  }
  revalidatePath("/admin");
}

export async function updateProduct(id: string, prevState: ProductState, formData: FormData) {
  const validatedFields = UpdateProduct.safeParse({
		name: formData.get("name"),
		description: formData.get("description"),
		category: formData.get("category"),
    price: formData.get("price"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Campos inválidos. Error al actualizar el producto.",
    };
  }
  const imagesUrl = formData.getAll("images");
	const extraImages = formData.get("added")
	let finalImagesArray = imagesUrl
	if(extraImages) {
		const extraImagesToStringArray = extraImages.toString().split(',')
		const extraImagesAsEntryValues: FormDataEntryValue[] = 
			extraImagesToStringArray.map(value => value.replace(/^"|"$/g, ''))
		finalImagesArray = imagesUrl.concat(extraImagesAsEntryValues)
	}
  const { name, description, category, price } = validatedFields.data;
  const totalInCents = price * 100;
  try {
    await sql`
			UPDATE gamestore.games
			SET name = ${name}, description = ${description}, category = ${category}, price = ${totalInCents}, images_url = ARRAY[${toJSON(finalImagesArray)}]
			WHERE id = ${id}
		`;
  } catch (error) {
    return { message: "Database Error: Failed to Update Product." };
  }
  revalidatePath("/admin/products");
  redirect("/admin/products");
}

function toJSON(arr: any[]) {
  return JSON.stringify(arr);
}

export async function createProduct(prevState: ProductState, formData: FormData) {
  const validatedFields = CreateProduct.safeParse({
		name: formData.get("name"),
		description: formData.get("description"),
		images: formData.get("images"),
		category: formData.get("category"),
    price: formData.get("price"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Campos inválidos. Error al actualizar el producto.",
    };
  }
	const { name, description, images, category, price } = validatedFields.data;
	const imagesToStringArray = images.split(',')
	const imagesToEntryValues: FormDataEntryValue[] =
		imagesToStringArray.map(value => value.replace(/^"|"$/g, ''))
  const totalInCents = price * 100;
  try {
    await sql`
				INSERT INTO gamestore.games
				(name, description, images_url, category, price)
				VALUES
				(${name}, ${description}, ARRAY[${toJSON(imagesToEntryValues)}], ${category}, ${totalInCents})
				ON CONFLICT DO NOTHING;
			`;
  } catch (error) {
    return { message: "Database Error: Failed to Update Product." };
  }
  revalidatePath("/admin/products");
  redirect("/admin/products");
}