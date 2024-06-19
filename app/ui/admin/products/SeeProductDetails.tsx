import Link from "next/link"
import { getCategoryLink } from "@/lib/utils";
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { Game } from "@/lib/definitions";

export function SeeProductDetails({ game }: { game: Game }) {
  return (
    <Link href={`${getCategoryLink(game.category)}/${game.id}`}>
			<DocumentTextIcon className="w-5 md:mr-2" />
			<span className="hidden md:block ml-1 text-sm">Ver</span>
		</Link>
  )
}