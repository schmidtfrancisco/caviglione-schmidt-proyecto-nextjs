"use client";

import GameCategoryBadge from "@/components/inicio/GameCategoryBadge";
import GameCldImage from "@/components/juegos/GameCldImage";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { updateProduct } from "@/lib/actions";
import { Category, Game } from "@/lib/definitions/products-definitions";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function EditProductForm({ game }: { game: Game }) {
	const initialState = { message: "", errors: {} };
  const updateGameWithId = updateProduct.bind(null, game.id);
  const [state, dispatch] = useFormState(updateGameWithId, initialState);
	const [urlStates, setUrlStates] = useState<string[]>([]);
	const addNewUrl = (newUrl: string) => {
    setUrlStates(prevStates => [...prevStates, newUrl]);
  };
  return (
		<form action={dispatch}>
			<div className="bg-white">
				<div className="mx-auto max-w-2xl px-4 py-10 sm:px-6  lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
					<div className="lg:col-span-2">
						<div className="mt-10">
							<Input
								id="name"
								name="name"
								defaultValue={game.name}
								placeholder="Ingrese el nombre del producto"
								className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
							/>
						</div>
						<section className="mt-4">
							<div className="flex items-center">
								<div className="flex flex-col">
									<div className="relative">
										<Input
											className="font-medium text-gray-900 max-w-32 peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
											id="price"
											name="price"
											step="0.01"
											type="number"
											defaultValue={game.price/100}
											placeholder='Precio'
											min="0"
											aria-describedby="amount-error"
										/>
										<CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
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
								<div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
									<RadioGroup
										id="category"
										name="category"
										defaultValue={game.category}
										className="grid-flow-col flex flex-col md:flex-row"
									>
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
											<RadioGroupItem value={Category.JUGUETES} id="opt3" />
											<GameCategoryBadge
												category={Category.JUGUETES}
												className="text-white px-2 py-1 rounded-full text-xs"
											/>
										</div>
									</RadioGroup>
								</div>
							</div>
							<div className="mt-4 space-y-6">
								<Textarea
									id="description"
									name="description"
									defaultValue={game.description}
									placeholder="Ingrese la descripción del producto"
									className="resize-none"
								/>
							</div>
							<div className="mt-4 space-y-6">
								{game.images_url.map((imgUrl, index) => (
									<div key={index} className="flex items-center space-x-2">
										<Checkbox
											id={`delete-${index}`}
											name="images"
											value={imgUrl}
											defaultChecked
										/>
										<label
											htmlFor={`delete-${index}`}
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											¿Mantener imagen {index + 1} / {game.images_url.length}?
										</label>
									</div>
								))}
							</div>
						</section>
					</div>
					<div className="mt-10 lg:col-start-3 lg:row-span-2 lg:mt-0 lg:self-center">
						<div className="aspect-w-3 aspect-h-4 rounded-lg">
							<Carousel className="rounded-lg overflow-hidden">
								<CarouselContent>
									{game.images_url.map((image, index) => (
										<CarouselItem key={image} className="text-center">
											<GameCldImage src={image} />
											<span className="text-sm text-gray-500">{index + 1} / {game.images_url.length}</span>
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-white/50 hover:bg-white rounded-xl p-2 cursor-pointer">
									<ChevronLeftIcon className="h-6 w-6"/>
								</CarouselPrevious>
								<CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white/50 hover:bg-white rounded-xl p-2 cursor-pointer">
									<ChevronRightIcon className="h-6 w-6"/>
								</CarouselNext>
							</Carousel>
						</div>
						<CldUploadWidget
							uploadPreset="GameStore"
							signatureEndpoint="/api/sign-cloudinary-params"
							onSuccess={(results) => { 
								const info = (results.info) as CloudinaryUploadWidgetInfo
								addNewUrl(info.public_id)
							}}
						>
							{({ open }) => {
								return (
									<>
										<Button type="button" onClick={() => open()}>
											Añadir imágenes
										</Button>
									</>
								);
							}}
						</CldUploadWidget>
					</div>
				</div>
				<div className="mt-6 flex items-center">
					<Button className="w-full" type="submit" name="added" value={urlStates}>
						Confirmar
					</Button>
				</div>
			</div>
		</form>
  );
}
