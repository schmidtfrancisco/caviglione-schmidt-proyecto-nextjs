'use client';

import { cn } from "@/lib/utils"
import { HomeIcon, PuzzlePieceIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,

  },
  {
    name: "Juegos de mesa",
    href: "/table-games",
    icon: PuzzlePieceIcon,
  }
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn('text-sm flex align-middle items-center gap-2 rounded-lg p-2 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
              {
                'bg-gray-700 text-blue-400': pathname === link.href,
              }
            )}>
            <LinkIcon className="h-6 w-6" />
            <p className="md:block">{link.name}</p>
          </Link>
        );

      })}
    </>
  );
}