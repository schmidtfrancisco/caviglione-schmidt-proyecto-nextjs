'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { HomeIcon, PuzzlePieceIcon, ChevronDownIcon, TagIcon } from "@heroicons/react/24/outline"
import { TbHorseToy } from "react-icons/tb";
import { Gamepad2Icon, Joystick } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SheetClose } from "@/components/ui/sheet";


const links = [
  {
    name: "Inicio",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Juegos",
    href: "/juegos",
    icon: Joystick,
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


  if (!isForSidebar) {
    return (
      <>
        <CommonLinks pathname={pathname} />
        <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
          <DropdownMenuTrigger asChild>
            <button
              className="text-sm flex align-middle items-center gap-2 rounded-lg p-2 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <TagIcon strokeWidth={1.5} className="h-6 w-6" />
              Categorías
              <ChevronDownIcon className={cn(dropdownOpen ? "rotate-180" : "", "h-4 w-4 transition-all")} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-50">
            <CommonSubLinks pathname={pathname} />
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    )
  } else {
    return (
      <>
        <SheetLinks pathname={pathname} />
        <div className="flex gap-2 items-center px-2">
          <TagIcon strokeWidth={1.5} className="h-6 w-6" />
          <p className="text-sm font-bold m-2">Categorías</p>
        </div>
        <SheetSubLinks pathname={pathname} />
      </>
    )
  }
}

export function SheetLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <SheetClose asChild key={link.name}>
            <Link
              href={link.href}
              className={cn('text-sm flex align-middle items-center gap-2 rounded-lg p-2 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
                {
                  'bg-gray-700 text-sky-400 hover:text-gray-300': pathname === link.href,
                }
              )}>
              <LinkIcon strokeWidth={1.5} className="h-6 w-6" />
              <p className="md:block">{link.name}</p>
            </Link>
          </SheetClose>
        );
      })}
    </>
  )
}

export function CommonLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn('text-sm flex align-middle items-center gap-2 rounded-lg p-2 hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
              {
                'bg-gray-700 text-sky-400 hover:text-gray-300': pathname === link.href,
              }
            )}>
            <LinkIcon strokeWidth={1.5} className="h-6 w-6" />
            <p className="md:block">{link.name}</p>
          </Link>
        );

      })}
    </>
  )
}

export function SheetSubLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {subLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <SheetClose asChild key={link.name}>
            <Link
              href={link.href}
              className={
                cn('text-sm flex align-middle items-center gap-2 w-full my-1 rounded-lg py-2 px-10 cursor-pointer hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
                  {
                    'bg-gray-700 text-sky-400 hover:text-gray-300': pathname === link.href,
                  }
                )}>
              <LinkIcon strokeWidth={1.5} className="h-6 w-6" />
              <p className="md:block">{link.name}</p>
            </Link>
          </SheetClose>
        );
      })}
    </>
  )
}

export function CommonSubLinks({ pathname }: { pathname: string }) {
  return (
    <>
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
    </>
  )
}