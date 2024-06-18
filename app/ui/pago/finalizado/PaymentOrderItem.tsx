import { fetchGameById } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default async function PaymentOrderItem({gameId, quantity}: {gameId: string, quantity: number}) {
  const game = await fetchGameById(gameId);

  return (
    <div className="flex justify-between gap-2" key={gameId}>
      <span>{game.name} x{quantity}</span>
      <span>{formatPrice(game.price)}</span>
    </div>
  )
}