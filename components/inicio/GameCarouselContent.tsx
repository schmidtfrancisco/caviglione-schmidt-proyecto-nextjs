import GameCarouselItem from "@/components/inicio/GameCarouselItem";
import { CarouselContent } from "@/components/ui/carousel";
import { fetchGamesByCategoryWithLimit } from "@/lib/data/products-data";
import { Category, Game } from "@/lib/definitions/products-definitions";

export default async function GameCarouselContent(
  {category }: {category: Category},
) {
  const GAMES_PER_CAROUSEL = 10;
  const games: Game[] = await fetchGamesByCategoryWithLimit(category, GAMES_PER_CAROUSEL);
  return (
    <CarouselContent>
      {games.map((game) => (
          <GameCarouselItem key={game.id} game={game} />
      ))}
    </CarouselContent>
  );
}