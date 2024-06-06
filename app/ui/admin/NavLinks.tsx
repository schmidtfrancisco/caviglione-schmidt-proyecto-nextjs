'use client';

import ShoppingCartIcon from '@/app/ui/admin/ShoppingCartIcon'
import PackageIcon from '@/app/ui/admin/PackageIcon'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	{ name: 'Orders', href: '/admin', icon: ShoppingCartIcon },
	{ name: 'Products', href: '/admin/products', icon: PackageIcon},
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
