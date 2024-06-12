'use client';

import Image from "next/image"
import Link from "next/link"
import { Game } from '@/lib/definitions'
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import GameCategoryBadge from "./GameCategoryBadge";
import AddToCartButton from "@/app/ui/AddToCartButton";
import { formatPrice, getCategoryLink } from "@/lib/utils";
import GameCldImage from "../juegos/GameCldImage";

export default function GameCarouselItem({ game }: { game: Game }) {

  return (
    <CarouselItem className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <Card>
        <Link href={`${getCategoryLink(game.category)}/${game.id}`}>
          <GameCldImage
            alt={game.name}
            className="rounded-t-md"
            height={250}
            width={400}
            src={game.images_url[0]}
          />
        </Link>
        <CardContent className="p-4">
          <div className="flex flex-col gap-3">
            <Link href={`${getCategoryLink(game.category)}/${game.id}`}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold truncate">{game.name}</h3>
                    <GameCategoryBadge category={game.category} className="text-white px-2 py-1 rounded-full text-xs font-medium"/>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 md:line-clamp-3">{game.description}</p>
                <p className="text-sm text-gray-800 font-bold">{formatPrice(game.price)}</p>
              </div>
            </Link>
            <div className="flex flex-col sm:flex-row gap-2 w-full justify-end">
              <AddToCartButton game={game} size={"sm"} buttonClassName="text-xs block min-w-[130px]"/>
            </div>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
}