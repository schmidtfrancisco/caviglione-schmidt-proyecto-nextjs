'use client'

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Search from "@/app/ui/Search";

export default function Header() {
	const pathname = usePathname()
	return (
		<>
			<header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
				<div className="flex-1">
					<h1 className="font-semibold text-lg">{cn({"Órdenes": pathname === "/admin",},
						{"Productos": pathname === "/admin/products",}
					)}</h1>
				</div>
				<div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
					<Search placeholder="Buscar..." />
				</div>
			</header>
		</>
	)
}