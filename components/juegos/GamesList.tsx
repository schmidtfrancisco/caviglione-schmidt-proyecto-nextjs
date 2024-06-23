import GameCard from "@/components/juegos/GameCard";
import { fetchFilteredGamesSorted} from "@/lib/data/products-data";
import { fetchFilteredGamesByCategorySorted } from "@/lib/data/products-category-data";
import { Category, Game } from "@/lib/definitions/products-definitions";
import { notFound } from "next/navigation";

export default async function GamesList(
  { query, currentPage, category, sort, min, max }: 
  { query: string, currentPage: number, category?: Category, sort: string, min: number, max: number },
) {

  let games: Game[] | undefined = [];

  if (category) {
    games = await fetchFilteredGamesByCategorySorted(category, query, currentPage, sort, min, max);
  } else {
    games = await fetchFilteredGamesSorted(query, currentPage, sort, min, max);
  }
 
  if (games === undefined) {
    notFound();
  }

  return (
    <>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  )
}

