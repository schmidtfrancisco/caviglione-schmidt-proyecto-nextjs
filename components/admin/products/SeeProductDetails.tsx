import { Game } from "@/lib/definitions/products-definitions";
import { getCategoryLink } from "@/lib/utils";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function SeeProductDetails({ game }: { game: Game }) {
  return (
    <Link
			href={`${getCategoryLink(game.category)}/${game.id}`}
			className="rounded-md border p-2 hover:bg-gray-100 flex items-center w-full cursor-pointer"
		>
			<DocumentTextIcon className="w-5 md:mr-2"/>
			<span className="md:block ml-1 text-sm">Ver</span>
		</Link>
  )
}