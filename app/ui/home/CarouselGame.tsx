import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image"
import { Game } from '@/lib/definitions'
import { cn } from "@/lib/utils";


export default function CarouselGame({game}: {game: Game}) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <Card>
        <Image
          alt={game.name}
          className="w-full h-48 object-cover"
          height={250}
          width={400}
          src={game.img}
          style={{
            aspectRatio: "400/250",
            objectFit: "cover",
          }}
        />
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold truncate">{game.name}</h3>
            <Badge className={cn('text-white px-2 py-1 rounded-full text-xs',
              { 'bg-green-800': game.category === 'Juego de mesa' },
              { 'bg-blue-600': game.category === 'Videojuego' },
              { 'bg-orange-600': game.category === 'Juguete' },
            )}>
              {game.category}
            </Badge>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-3">{game.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-800 font-bold">${game.price}</p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                Agregar al carrito
              </Button>
              <Button size="sm">Comprar</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}