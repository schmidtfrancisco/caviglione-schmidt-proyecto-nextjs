import { OrderStatus } from '@/lib/definitions';
import { CheckIcon, ArrowRightCircleIcon, CreditCardIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function Status({ status }: { status: OrderStatus }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'Aprobado',
          'bg-red-500 text-white': status === 'Rechazado',
          'bg-orange-500 text-white': status === 'Enviado',
          'bg-green-500 text-white': status === 'Entregado',
        },
      )}
    >
      {status === 'Enviado' ? (
        <>
          Enviado
          <ArrowRightCircleIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'Entregado' ? (
        <>
          Entregado
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'Rechazado' ? (
        <>
          Rechazado
          <XMarkIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'Aprobado' ? (
        <>
          Aprobado
          <CreditCardIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}