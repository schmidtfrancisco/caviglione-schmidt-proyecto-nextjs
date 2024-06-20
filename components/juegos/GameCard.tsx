
import Link from "next/link";
import { formatPrice, getCategoryLink } from "@/lib/utils";
import { Game } from "@/lib/definitions/products-definitions";
import AddToCartButton from "@/components/cart/AddToCartButton";
import GameCldImage from "@/components/juegos/GameCldImage";

export default function GameCard({ game }: { game: Game }) {

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
      <div className="flex items-center gap-2">
        <Link href={`${getCategoryLink(game.category)}/${game.id}`}>
          <GameCldImage
            alt="Product Image"
            className="rounded-lg p-2"
            height={150}
            src={game.images_url[0]}
            width={150}
          />
        </Link>
        <div className="flex-1 pt-4 pb-2 pr-2 md:pl-4">
          <Link href={`${getCategoryLink(game.category)}/${game.id}`}>
            <h3 className="font-semibold text-lg md:text-xl truncate">{game.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 md:line-clamp-4 md:text-sm">{game.description}</p>
            <h4 className="font-semibold text-base md:text-lg mt-1 text-gray-700">{formatPrice(game.price)}</h4>
          </Link>
          <div className="flex gap-2 mt-2 justify-end">
            <AddToCartButton game={game} buttonClassName="min-w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  )
}