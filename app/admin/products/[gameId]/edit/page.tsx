
import { notFound } from "next/navigation";
import { formatPrice } from "@/lib/utils";
import { Category, Game } from "@/lib/definitions/products-definitions";
import { fetchGameById } from "@/lib/data/products-data";
import GameCategoryBadge from "@/components/inicio/GameCategoryBadge";
import GameCldImage from "@/components/juegos/GameCldImage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PageProps {
  params: {
    gameId: string
  }
}

export default async function Page({ params }: PageProps) {
	const id = params.gameId;
  const game: Game | null = await fetchGameById(id);
  if (!game) {
    notFound();
  }
	return(
		<div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="lg:col-span-2">

          <div className="mt-10">
						<Input
							id="name"
							placeholder={game.name}
							className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
						/>
          </div>
          <section className="mt-4">
            <div className="flex items-center">
						<Input className="font-medium text-gray-900 max-w-32" id="price" type="number" placeholder={formatPrice(game.price)} />
              <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
							<RadioGroup defaultValue={game.category} className="grid-flow-col">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value={Category.JUEGOS_DE_MESA} id="opt1" />
								<GameCategoryBadge category={Category.JUEGOS_DE_MESA} className="text-white px-2 py-1 rounded-full text-xs"/>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="videojuego" id="opt2" />
								<GameCategoryBadge category={Category.VIDEOJUEGOS} className="text-white px-2 py-1 rounded-full text-xs"/>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="juguete" id="opt3" />
								<GameCategoryBadge category={Category.JUGUETES} className="text-white px-2 py-1 rounded-full text-xs"/>
							</div>
						</RadioGroup>
              </div>
            </div>
            <div className="mt-4 space-y-6">
						<Textarea className="resize-none" id="description" placeholder={game.description}/>
            </div>

            <div className="mt-6 flex items-center">

            </div>
          </section>
        </div>

        <div className="mt-10 lg:col-start-3 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-w-3 aspect-h-4 rounded-lg">
            <Carousel className="rounded-lg overflow-hidden">
              <CarouselContent>
                {game.images_url.map((image) => (
                  <CarouselItem key={image}>
                    <GameCldImage src={image} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-white/50 hover:bg-white rounded-xl p-2 cursor-pointer">
                <ChevronLeftIcon className="h-6 w-6" />
              </CarouselPrevious>
              <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white/50 hover:bg-white rounded-xl p-2 cursor-pointer">
                <ChevronRightIcon className="h-6 w-6" />
              </CarouselNext>
            </Carousel>
						<Button className="mt-5">
							Eliminar imagen
						</Button>
						<Button className="mt-5">
							Eliminar todas las imágenes
						</Button>
						<Button className="mt-5">
							Añadir nuevas imágenes
						</Button>
          </div>
        </div>
      </div>
    </div>
	)
}