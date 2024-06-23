"use client";	

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
} from "@/components/ui/alert-dialog";
import { deleteProduct } from "@/lib/actions";
import { ExclamationCircleIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function EditProduct({ id }: { id: string }) {
	return (
		<Link
			href={"/admin/products/" + id + "/edit"}
			className="rounded-md border p-2 hover:bg-gray-100 flex items-center w-full"
		>
			<PencilIcon className="w-5 md:mr-2"/>
			<span className="md:block ml-1 text-sm">Editar</span>
		</Link>
	);
}

export function DeleteProduct({ id }: { id: string }) {
	const deleteProductWithId = () => {
		deleteProduct(id);
	};
	return (
		<AlertDialog>
			<AlertDialogTrigger className="rounded-md border p-2 hover:bg-gray-100 flex items-center w-full">
				<TrashIcon className="w-5 md:mr-2"/>
				<span className="md:block ml-1 text-sm">Eliminar</span>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className="flex items-center">
						<ExclamationCircleIcon className="w-8 h-8 mr-2 text-red-600" />
						Eliminar producto
					</AlertDialogTitle>
					<AlertDialogDescription>
						¿Seguro que quieres eliminar este producto?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel >Cancelar</AlertDialogCancel>
					<AlertDialogAction
						onClick={deleteProductWithId}
						className="bg-red-500 hover:bg-red-600 text-white"
					>
						Eliminar
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

export function CreateProduct() {
  return (
    <Link href="/admin/products/create" className="flex items-center justify-center w-full">
			<PlusIcon className="w-5 md:mr-2"/>
			<span className="md:block ml-1 text-sm">Crear</span>
		</Link>
  );
}