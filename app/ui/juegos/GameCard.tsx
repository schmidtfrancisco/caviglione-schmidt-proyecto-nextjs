import { Button } from "@/components/ui/button";
import { Game } from "@/lib/definitions";
import AddToCartButton from "@/app/ui/AddToCartButton";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";


export default function GameCard({ game }: { game: Game }) {

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
        <div className="flex items-center gap-4">
          <Image
            alt="Product Image"
            className="w-[100px] md:w-[150px] aspect-square object-cover rounded-lg m-1"
            height={250}
            src={game.images_url[0]}
            width={250}
          />
          <div className="flex-1 pt-4 pb-2">
            <h3 className="font-semibold text-lg md:text-xl">{game.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{game.description}</p>
            <h4 className="font-semibold text-base md:text-lg">{formatPrice(game.price)}</h4>
            <div className="flex gap-2 mt-4 mr-4 justify-end">
              <AddToCartButton game={game} />
            </div>
          </div>
        </div>
      </div>

  )
}