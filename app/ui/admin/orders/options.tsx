'use client'

import { PencilIcon, ExclamationCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteOrder } from '@/lib/actions';
import DeleteWarning from '@/app/ui/admin/deleteWarning';
import { useState } from 'react';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function UpdateOrder({ id }: { id: string }) {
	return (
		<Link
			href={'/admin/' + id + '/edit'}
			className="rounded-md border p-2 hover:bg-gray-100 flex items-center w-full"
		>
			<PencilIcon className="w-5 mr-2" />
			<span className="ml-1 text-sm">Editar</span>
		</Link>
	);
}

export function DeleteOrder({ id }: { id: string }) {
	const deleteOrderWithId = () => {
		deleteOrder(id);
	};

	return (
		<AlertDialog >
			<AlertDialogTrigger className='rounded-md border p-2 hover:bg-gray-100 flex items-center w-full'>
				<TrashIcon className="w-5 md:mr-2" />
				<span className="hidden md:block ml-1 text-sm">Eliminar</span>
			</AlertDialogTrigger>

			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className='flex items-center'>
						<ExclamationCircleIcon className="w-8 h-8 mr-2 text-red-600" />
						Eliminar pedido
					</AlertDialogTitle>
					<AlertDialogDescription>
						¿Seguro que quieres eliminar este pedido?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel >Cancelar</AlertDialogCancel>
					<AlertDialogAction
						onClick={deleteOrderWithId}
						className="bg-red-500 hover:bg-red-600 text-white"
					>
						Eliminar
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

export function DeletesOrder({ id }: { id: string }) {
	const deleteOrderWithId = deleteOrder.bind(null, id);

	const [showAlert, setShowAlert] = useState(false);

	const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		event.preventDefault();
		setShowAlert(true);
	};

	const handleCloseAlert = () => {
		setShowAlert(false);
	};
	return (
		<>
			<form action={deleteOrderWithId} className={"w-full"}>
				<button
					className="rounded-md border p-2 hover:bg-gray-100 flex items-center w-full"
					onClick={handleButtonClick}
				>
					<TrashIcon className="w-5 md:mr-2" />
					<span className="hidden md:inline ml-1">Eliminar</span>
				</button>
			</form>
			{showAlert && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
					<div className="bg-white p-4 rounded-md">
						<DeleteWarning onClose={handleCloseAlert} />
					</div>
				</div>
			)}
		</>
	);
}
