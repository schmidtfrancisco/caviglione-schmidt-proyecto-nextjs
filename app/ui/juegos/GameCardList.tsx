import GameCard from "@/app/ui/juegos/GameCard";
import { Button } from "@/components/ui/button";
import { fetchFilteredGames, fetchGames } from "@/lib/data";

import { Game } from "@/lib/definitions";

export default async function GameCardList(
  { query, currentPage }: { query: string, currentPage: number }
) {
  const games: Game[] = await fetchFilteredGames(query, currentPage);

  return (
    <>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  )
}

