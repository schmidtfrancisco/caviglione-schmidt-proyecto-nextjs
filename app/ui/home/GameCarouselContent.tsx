import GameCarouselItem from "@/app/ui/home/GameCarouselItem";
import { Category, Game } from '@/lib/definitions'
import { fetchGamesByCategoryWithLimit } from "@/lib/data/products-data";
import { CarouselContent } from "@/components/ui/carousel";


export default async function GameCarouselContent(
  {category }: {category: Category},
) {
  const GAMES_PER_CAROUSEL = 10;
  const games = await fetchGamesByCategoryWithLimit(category, GAMES_PER_CAROUSEL);
   
  return (
    <CarouselContent>
      {games.map((game) => (
          <GameCarouselItem key={game.id} game={game} />
      ))}
    </CarouselContent>
  );
}