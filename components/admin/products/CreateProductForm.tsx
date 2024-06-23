"use client";

import GameCategoryBadge from "@/components/inicio/GameCategoryBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { createProduct } from "@/lib/actions";
import { Category } from "@/lib/definitions/products-definitions";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function CreateProductForm() {
	const initialState = { message: "", errors: {} };
	const [state, dispatch] = useFormState(createProduct, initialState);
	const [urlStates, setUrlStates] = useState<string[]>([]);
	const addNewUrl = (newUrl: string) => {
    setUrlStates(prevStates => [...prevStates, newUrl]);
  };
	return (
		<form action={dispatch}>
      <Card className="w-full max-w-2xl">
				<CardHeader>
					<CardTitle>Añadir producto</CardTitle>
					<CardDescription>Completa el formulario para añadir un nuevo producto.</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-6">
						<div className="grid gap-2">
							<Label htmlFor="name">Nombre</Label>
							<Input
								id="name"
								placeholder="Ingrese el nombre del producto"
								name="name"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="category">Categoría</Label>
							<RadioGroup defaultValue={Category.JUEGOS_DE_MESA} name="category" id="category">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value={Category.JUEGOS_DE_MESA} id="opt1"/>
									<GameCategoryBadge
										category={Category.JUEGOS_DE_MESA}
										className="text-white px-2 py-1 rounded-full text-xs"
									/>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value={Category.VIDEOJUEGOS} id="opt2"/>
									<GameCategoryBadge
										category={Category.VIDEOJUEGOS}
										className="text-white px-2 py-1 rounded-full text-xs"
									/>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value={Category.JUGUETES} id="opt3"/>
									<GameCategoryBadge
										category={Category.JUGUETES}
										className="text-white px-2 py-1 rounded-full text-xs"
									/>
								</div>
							</RadioGroup>
						</div>
						<div className="flex flex-col">
							<div className="grid gap-2">
								<Label htmlFor="price">Precio</Label>
								<div className="relative">
									<Input
										id="price"
										name="price"
										type="number"
										placeholder="Ingrese el valor del productor"
										aria-describedby="amount-error"
										className="peer block py-2 pl-10"
									/>
									<CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
								</div>
							</div>
							<div id="amount-error" aria-live="polite" aria-atomic="true">
								{state.errors?.price &&
									state.errors.price.map((error: string) => (
										<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="description">Descripción</Label>
							<Textarea
								className="resize-none"
								id="description"
								name="description"
								placeholder="Ingrese la descripción del producto"
								required
							/>
						</div>
						<div className="flex flex-col">
							<div className="grid gap-2">
								<Label>Product Images</Label>
								<CldUploadWidget
									uploadPreset='GameStore'
									signatureEndpoint='/api/sign-cloudinary-params'
									onSuccess={(results) => { 
										const info = (results.info) as CloudinaryUploadWidgetInfo
										addNewUrl(info.public_id)
									}}
								>
									{({ open }) => {
										return (
											<>
												<Button type="button" onClick={() => open()}>
													Seleccionar archivos
												</Button>
											</>
										);
									}}
								</CldUploadWidget>
							</div>
							<div id="image-error" aria-live="polite" aria-atomic="true">
								{state.errors?.images &&
									state.errors.images.map((error: string) => (
										<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
							</div>
						</div>
					</div>
				</CardContent>
				<CardFooter>
					<Button type="submit" className="ml-auto" name='images' value={urlStates}>
						Create Product
					</Button>
				</CardFooter>
			</Card>
		</form>
	)
}