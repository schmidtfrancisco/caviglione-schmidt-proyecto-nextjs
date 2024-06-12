'use client'

import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteOrder } from '@/lib/actions';
import DeleteWarning from '@/app/ui/admin/deleteWarning';
import { useState } from 'react';

export function CreateOrder() {
	return (
		<Link
		href="/admin/create"
		className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
		>
			<span className="hidden md:block">Create Order</span>{' '}
			<PlusIcon className="h-5 md:ml-4" />
		</Link>
	);
}

export function UpdateOrder({ id }: { id: string }) {
	return (
		<Link
			href={'/admin/' + id + '/edit'}
			className="rounded-md border p-2 hover:bg-gray-100 flex items-center w-full"
		>
			<PencilIcon className="w-5 mr-2" />
			<span className="ml-1">Edit</span>
		</Link>
	);
}

export function DeleteOrder({ id }: { id: string }) {
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
					<TrashIcon className="w-5 mr-2" />
					<span className="ml-1">Delete</span>
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
