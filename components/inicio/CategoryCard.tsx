'use client'

import Link from "next/link";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { Category } from "@/lib/definitions/products-definitions";
import { getCategoryLink } from "@/lib/utils";

export default function CategoryCard({ category, description, src }: { category: Category, description: string, src: string }) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link href={getCategoryLink(category)} className="absolute inset-0 z-10">
        <span className="sr-only">Explorar</span>
      </Link>
      <div className="h-[200px] relative w-full">
      <Image
        src={src}
        alt={category}
        fill
        objectFit="cover"
        className="group-hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
      />
      </div>
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="font-bold text-xl">{category}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>

  )
}