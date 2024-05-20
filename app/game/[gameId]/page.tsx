import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Game } from "@/lib/definitions";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PageProps {
  params: {
    gameId: string
  }
}

export default function Page({ params }: PageProps) {
  const game: Game = {
    id: '1',
    name: 'AjeChess',
    description: 'Classic strategy game for 2 players.',
    img: 'https://t.ly/Ia7tG',
    category: 'Juego de mesa',
    price: 777
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-8 px-4">
      <div className="grid gap-6">
        <Carousel className="rounded-lg overflow-hidden">
          <CarouselContent>
            <CarouselItem>
              <img
                alt="Product Image 1"
                className="aspect-square object-cover"
                height={600}
                src={game.img}
                width={600}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Product Image 2"
                className="aspect-square object-cover"
                height={600}
                src={game.img}
                width={600}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Product Image 3"
                className="aspect-square object-cover"
                height={600}
                src={game.img}
                width={600}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-white/50 hover:bg-white rounded-full p-2 cursor-pointer">
            <ChevronLeftIcon className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white/50 hover:bg-white rounded-full p-2 cursor-pointer">
            <ChevronRightIcon className="h-6 w-6" />
          </CarouselNext>
        </Carousel>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold">{game.name}</h1>
          <Badge className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" variant="secondary">
            {game.category}
          </Badge>
        </div>

        <p className="text-lg text-gray-500">
          {game.description}
        </p>
        <div className="flex items-center gap-4">
          <span className="text-4xl font-bold">${game.price}</span>
          <div className="flex gap-2">
            <Button className="flex-1" size="lg" variant="outline">
              Add to Cart
            </Button>
            <Button className="flex-1" size="lg">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}