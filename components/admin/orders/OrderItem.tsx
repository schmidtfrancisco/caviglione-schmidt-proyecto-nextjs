import GameCldImage from "@/components/juegos/GameCldImage";
import { fetchGameById } from "@/lib/data/products-data";
import { Game } from "@/lib/definitions/products-definitions";
import { formatPrice } from "@/lib/utils";

export default async function OrderItem({ gameId, quantity }: { gameId: string, quantity: number }) {
  const game: Game | null = await fetchGameById(gameId);
  if (!game) {
    return null;
  }
  return (
    <div className="grid gap-4 md:px-8">
      <div className="flex items-center gap-4">
        <GameCldImage 
          alt="Product Image" 
          width={48} 
          height={48}
          src={game.images_url[0]}
        />
        <div className="flex-1">
          <div className="text-sm sm:text-base font-medium">
						{game.name}
					</div>
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
						Cantidad: {quantity}
					</div>
        </div>
        <div className="text-right font-medium text-xs">
					{formatPrice(game.price)}
				</div>
      </div>
    </div>
  )
}