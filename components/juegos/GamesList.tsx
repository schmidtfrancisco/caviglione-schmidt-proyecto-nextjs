import GameCard from "@/components/juegos/GameCard";
import { fetchFilteredGames, fetchFilteredGamesByCategory } from "@/lib/data/products-data";
import { Category, Game } from "@/lib/definitions/products-definitions";

export default async function GamesList(
  { query, currentPage, category }: { query: string, currentPage: number, category?: Category },
) {
  let games: Game[];
  if (category) {
    games = await fetchFilteredGamesByCategory(category, query, currentPage);
  } else {
    games = await fetchFilteredGames(query, currentPage);
  }
  return (
    <>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  )
}

