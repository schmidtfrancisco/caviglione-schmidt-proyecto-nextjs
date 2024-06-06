'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { HomeIcon, PuzzlePieceIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { TbHorseToy } from "react-icons/tb";
import { Gamepad2Icon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";


const links = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Juegos",
    href: "/juegos",
  }
]

const subLinks = [
  {
    name: "Juegos de mesa",
    href: "/juegos/juegos-de-mesa",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Videojuegos",
    href: "/juegos/videojuegos",
    icon: Gamepad2Icon,
  },
  {
    name: "Juguetes",
    href: "/juegos/juguetes",
    icon: TbHorseToy,
  }
]

export default function NavLinks({ isForSidebar = false }: { isForSidebar?: boolean }) {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn('text-sm flex align-middle items-center gap-2 rounded-lg p-2 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
              {
                'bg-gray-700 text-sky-400 hover:text-gray-300': pathname === link.href,
              }
            )}>
            <p className="px-4 md:block">{link.name}</p>
          </Link>
        );
      })}
      {(!isForSidebar) ? (
        <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <button
              className="text-sm flex align-middle items-center gap-2 rounded-lg p-2 px-4 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Categorías
              <ChevronDownIcon className={cn(dropdownOpen ? "rotate-180" : "", "h-4 w-4 transition-all")} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-50">
            {subLinks.map((link) => {
              const LinkIcon = link.icon;
              return (
                <DropdownMenuItem key={link.name} asChild>
                  <Link
                    href={link.href}
                    className={
                      cn('text-sm flex align-middle items-center gap-2 w-full my-1 rounded-lg p-2 cursor-pointer hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
                      {
                        'bg-gray-700 text-sky-400 hover:text-gray-300': pathname === link.href,
                      }
                    )}>
                    <LinkIcon strokeWidth={1.5} className="h-6 w-6" />
                    <p className="px-4 md:block">{link.name}</p>
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>


      ) : (
        <DropdownMenu></DropdownMenu>
      )
      }
    </>
  );
}
