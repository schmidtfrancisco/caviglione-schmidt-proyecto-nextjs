import GameCard from "@/components/juegos/GameCard";
import { fetchFilteredGamesByCategory, fetchFilteredGamesSort } from "@/lib/data/products-data";
import { Category, Game } from "@/lib/definitions/products-definitions";

export default async function GamesList(
  { query, currentPage, category, sort }: { query: string, currentPage: number, category?: Category, sort: string },
) {
  let games: Game[];
  if (category) {
    games = await fetchFilteredGamesByCategory(category, query, currentPage);
  } else {
    games = await fetchFilteredGamesSort(query, sort, currentPage);
  }
  return (
    <>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  )
}

