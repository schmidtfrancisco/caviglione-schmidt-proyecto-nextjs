"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FileUpload } from "@/components/admin/productos/DragAndDrop"
import { CldUploadButton, CldUploadWidgetProps, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import Breadcrumbs from '@/components/admin/pedidos/breadcrumbs'

export default function Component() {
	const handleSuccess = (results: CloudinaryUploadWidgetResults) => {
		console.log("HOLA HANDLESUCCES" + results);
		if(results.info && typeof results.info !== 'string') {
			console.log('Public ID', results.info.public_id);
		}
  };

  return (
		<div className="p-4">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Productos', href: '/admin/products' },
          {
            label: 'Añadir producto',
            href: `/admin/products/create`,
            active: true,
          },
        ]}
      />
      <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Añadir producto</CardTitle>
        <CardDescription>Completa el formulario para añadir un nuevo producto.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Ingrese el nombre del producto" />
          </div>
					<div className="grid gap-2">
            <Label htmlFor="category">Categoría</Label>
            <RadioGroup defaultValue="mesa">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="mesa" id="opt1" />
								<Label htmlFor="opt1">Juego de mesa</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="videojuego" id="opt2" />
								<Label htmlFor="opt2">Videojuego</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="juguete" id="opt3" />
								<Label htmlFor="opt3">Juguete</Label>
							</div>
						</RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Precio</Label>
            <Input id="price" type="number" placeholder="Ingrese el valor del productor" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea className="resize-none" id="description" placeholder="Ingrese la descripción del producto"/>
          </div>
          <div className="grid gap-2">
            <Label>Product Images</Label>
						<CldUploadButton
							uploadPreset="GameStore"
							options={{
								multiple: true,
								maxFiles: 5
							}}
							onSuccess={(results) => {
								console.log("SUCCESS " + results);
								const info = results.info as CloudinaryUploadWidgetInfo;
								console.log('Public ID', info.public_id);
							}}
						/>
						{/**
						<FileUpload/>
						 */}
						<button type="submit">
							AAAAAAAAAAA
						</button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="ml-auto">
          Create Product
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}