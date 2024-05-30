import GameCarouselItem from "@/app/ui/home/GameCarouselItem";
import { Game } from '@/lib/definitions'
import { fetchGamesByCategory } from "@/lib/data";
import { CarouselContent } from "@/components/ui/carousel";


interface GameCarouselContentProps {
  category?: 'Juegos de mesa' | 'Videojuegos' | 'Juguetes',
  recommended?: boolean
}

export default async function GameCarouselContent(
  {category, recommended = false}: GameCarouselContentProps,
) {

  let games: Game[] = [];

  if (recommended) {
    games = await fetchGamesByCategory(category || 'Juegos de mesa');
  } else if (category) {
    games = await fetchGamesByCategory(category);
  } 

  return (
    <CarouselContent>
      {games.map((game) => (
          <GameCarouselItem key={game.id} game={game} />
      ))}
    </CarouselContent>
  );
}