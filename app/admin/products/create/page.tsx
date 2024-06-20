
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Component() {
  return (
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
            <div className="flex h-40 items-center justify-center rounded-lg border-2 border-dashed border-muted bg-muted/40 transition-colors hover:border-primary hover:bg-muted">
              <div className="grid gap-2 text-center">
                <UploadIcon className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Drag and drop or click to upload up to 5 images</p>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="ml-auto">
          Create Product
        </Button>
      </CardFooter>
    </Card>
  )
}

function UploadIcon({...props}) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}