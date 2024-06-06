import { Category } from "@/lib/definitions";
import { getCategoryLink } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ category, src }: { category: Category, src: string }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link href={getCategoryLink(category)} className="absolute inset-0 z-10">
        <span className="sr-only">Explorar</span>
      </Link>
      <Image
        src={src}
        alt="Basketball"
        width={400}
        height={300}
        className="object-cover w-full aspect-[4/3]"
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="font-bold text-xl">{category}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Styles made for your game.</p>
      </div>
    </div>

  )
}