"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Package } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ name: "Pedidos", href: "/admin", icon: ShoppingCartIcon },
	{ name: "Productos", href: "/admin/products", icon: Package},
];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
				<Link
					key={link.name}
					href={link.href}
					className={clsx(
						"flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-700 hover:text-gray-300",
						{
							'bg-gray-700 text-sky-400 hover:text-gray-300': pathname === link.href,
						},
					)}
				>
					<LinkIcon className="h-4 w-4" />
					<p>{link.name}</p>
				</Link>
				);
			})}
		</>
	);
}
