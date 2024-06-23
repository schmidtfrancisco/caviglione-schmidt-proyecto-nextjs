
import { Category, Game } from "@/lib/definitions/products-definitions";
import { fetchFilteredGames, fetchFilteredGamesAsc, fetchFilteredGamesByCategory, fetchFilteredGamesDesc, fetchFilteredGamesNone } from "@/lib/data/products-data";
import GameCard from "@/components/juegos/GameCard";
import { revalidatePath } from "next/cache";

export default async function GamesList(
  { query, currentPage, category, sort }: { query: string, currentPage: number, category?: Category, sort: string },
) {
  let games: Game[];
  if (category) {
    games = await fetchFilteredGamesByCategory(category, query, currentPage);
  } else {

    games = await fetchFilteredGamesAsc(query, "name", currentPage);

  }
console.log(games);

return (
  <>
    {games.map((game) => (
      <GameCard key={game.id} game={game} />
    ))}
  </>
)
}

