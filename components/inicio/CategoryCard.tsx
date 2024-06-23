import { CategoryCldImage } from "@/components/juegos/GameCldImage";
import { Category } from "@/lib/definitions/products-definitions";
import { getCategoryLink } from "@/lib/utils";
import Link from "next/link";

export default function CategoryCard({ category, description, src }: { category: Category, description: string, src: string }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link href={getCategoryLink(category)} className="absolute inset-0 z-10">
        <span className="sr-only">Explorar</span>
      </Link>
      <div className="relative w-full h-48 sm:h-40 md:h-50 lg:h-60 xl:h-70">
        <CategoryCldImage
          src={src}
          alt={category}
          className="group-hover:scale-105 transition-transform duration-300 ease-in-out object-cover w-full h-full"
        />
      </div>
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="font-bold text-lg md:text-xl">{category}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}