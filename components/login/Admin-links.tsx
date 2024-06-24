"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ArrowRightEndOnRectangleIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SheetLogInLink() {
  const pathname = usePathname();
  return (
    <SheetClose asChild>
      <Link href="/login" className={cn(
        "text-sm flex align-middle items-center gap-2 rounded-lg p-2 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
        {
          'bg-gray-700 text-blue-400': pathname === "/login",
        }
      )}>
        <ArrowRightEndOnRectangleIcon className="h-6 w-6"/>
        Iniciar sesión como administrador
      </Link>
    </SheetClose>
  );
}

export function SheetDashboardLink() {
  const pathname = usePathname();
  return (
    <SheetClose asChild>
      <Link href="/admin" className={cn(
        "text-sm flex align-middle items-center gap-2 rounded-lg p-2 hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
        {
          'bg-gray-700 text-blue-400': pathname === "/admin",
        }
      )}>
        <ClipboardDocumentListIcon className="h-6 w-6" />
        Panel de administración
      </Link>
    </SheetClose>
  );
}

export function DropdownLogInLink() {
  const pathname = usePathname();
  return (
    <DropdownMenuItem asChild>
      <Link
        href="/login"
        className={cn(
          "text-sm cursor-pointer flex align-middle items-center gap-2 rounded-lg p-2 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
          {
            'bg-gray-700 text-blue-400': pathname === "/login",
          }
        )}
      >
        <ArrowRightEndOnRectangleIcon className="h-5 w-5"/>
        Iniciar sesión
      </Link>
    </DropdownMenuItem>
  );
}

export function DropdownDashboardLink() {
  const pathname = usePathname();
  return (
    <DropdownMenuItem asChild>
      <Link
        href="/admin"
        className={cn(
          "text-sm cursor-pointer flex align-middle items-center gap-2 rounded-lg p-2 hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
          {
            'bg-gray-700 text-blue-400': pathname === "/admin",
          }
        )}>
        <ClipboardDocumentListIcon className="h-5 w-5"/>
        Panel de administración
      </Link>
    </DropdownMenuItem>
  );
}