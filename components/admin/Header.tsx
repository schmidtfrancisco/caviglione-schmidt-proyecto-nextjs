"use client"

import Filter from "@/components/admin/orders/Filter";
import Search from "@/components/pagination-search/Search";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname()
	return (
		<>
			<header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
				<div className="flex-1">
					<h1 className="font-semibold text-lg">
						{cn(
							{"Pedidos": pathname === "/admin",},
							{"Productos": pathname === "/admin/products",}
						)}
					</h1>
				</div>
				<div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
					{pathname === "/admin" && <Filter/>}
					<Search placeholder={`Buscar ${pathname === "/admin" ? "pedidos..." : "productos..."}`}/>
				</div>
			</header>
		</>
	)
}