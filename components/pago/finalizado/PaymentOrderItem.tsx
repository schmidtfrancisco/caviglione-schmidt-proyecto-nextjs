
import { formatPrice } from "@/lib/utils";
import { Game } from "@/lib/definitions/products-definitions";
import { fetchGameById } from "@/lib/data/products-data";

export default async function PaymentOrderItem({gameId, quantity}: {gameId: string, quantity: number}) {
  const game: Game | null = await fetchGameById(gameId);

  if (!game) {
    return null;
  }

  return (
    <div className="flex justify-between gap-2" key={gameId}>
      <span>{game.name} x{quantity}</span>
      <span>{formatPrice(game.price)}</span>
    </div>
  )
}