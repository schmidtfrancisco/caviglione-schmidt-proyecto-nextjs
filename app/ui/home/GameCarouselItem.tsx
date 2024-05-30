'use client';

import Image from "next/image"
import Link from "next/link"
import { Game } from '@/lib/definitions'
import { useCart } from "@/lib/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import GameCategoryBadge from "./GameCategoryBadge";

export default function GameCarouselItem({ game }: { game: Game }) {
  const { dispatch } = useCart();
  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", game })
  }

  return (
    <CarouselItem className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <Card>
        <Link href={`/game/${game.id}`}>
          <Image
            alt={game.name}
            className="w-full h-48 object-cover rounded-t-md"
            height={250}
            width={400}
            src={game.images_url[0]}
            style={{
              aspectRatio: "400/250",
              objectFit: "cover",
            }}
          />
        </Link>
        <CardContent className="p-4">
          <div className="flex flex-col gap-3">
            <Link href={`/game/${game.id}`}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold truncate">{game.name}</h3>
                    <GameCategoryBadge category={game.category} className="text-white px-2 py-1 rounded-full text-xs font-medium"/>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 md:line-clamp-3">{game.description}</p>
                <p className="text-sm text-gray-800 font-bold">${game.price}</p>
              </div>
            </Link>
            <div className="flex flex-col sm:flex-row gap-2 w-full justify-end">
              <Button onClick={handleAddToCart} size="sm" variant="outline" className="text-xs block">
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