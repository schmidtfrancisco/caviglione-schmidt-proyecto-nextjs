'use client';

import { OrderForm, OrderStatus } from '@/lib/definitions';
import {
  CheckIcon,
  CurrencyDollarIcon,
  ArrowRightCircleIcon, CreditCardIcon, XMarkIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { updateOrder } from '@/lib/actions';
import { useFormState } from 'react-dom';
import { Input } from '@/components/ui/input';


export default function EditInvoiceForm({ order }: { order: OrderForm }) {
	const initialState = { message: "", errors: {} };
  const updateOrderWithId = updateOrder.bind(null, order.id);
  const [state, dispatch] = useFormState(updateOrderWithId, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Monto
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <Input
                id="total"
                name="total"
                type="number"
                step="0.01"
                defaultValue={order.total/100}
                placeholder="Ingrese el monto..."
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
								aria-describedby="amount-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
						<div id="amount-error" aria-live="polite" aria-atomic="true">
							{state.errors?.total &&
								state.errors.total.map((error: string) => (
									<p className="mt-2 text-sm text-red-500" key={error}>
										{error}
									</p>
								))}
						</div>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Estado del pedido
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex flex-col justify-center md:flex-row gap-4">
              <div className="flex items-center">
                <Input
                  id="approved"
                  name="status"
                  type="radio"
                  value='Aprobado'
                  defaultChecked={order.status === 'Aprobado'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="approved"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Aprobado <CreditCardIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <Input
                  id="sent"
                  name="status"
                  type="radio"
                  value="Enviado"
                  defaultChecked={order.status === 'Enviado'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="sent"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Enviado <ArrowRightCircleIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <Input
                  id="delivered"
                  name="status"
                  type="radio"
                  value="Entregado"
                  defaultChecked={order.status === 'Entregado'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="delivered"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Entregado <CheckIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <Input
                  id="canceled"
                  name="status"
                  type="radio"
                  value="Cancelado"
                  defaultChecked={order.status === 'Cancelado'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="canceled"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Cancelado <XMarkIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/admin"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Editar Pedido</Button>
      </div>
    </form>
  );
}
