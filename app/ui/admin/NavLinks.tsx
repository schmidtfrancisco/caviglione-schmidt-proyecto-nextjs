'use client';

import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { Package } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
	{ name: 'Pedidos', href: '/admin', icon: ShoppingCartIcon },
	{ name: 'Productos', href: '/admin/products', icon: Package},
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
					'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
					{
						'bg-gray-100 text-gray-900 transition-all dark:bg-gray-800 dark:text-gray-50': pathname === link.href,
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
