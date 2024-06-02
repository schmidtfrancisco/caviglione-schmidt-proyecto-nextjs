import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import PackageIcon from "@/app/ui/admin/PackageIcon"
import Package2Icon from "@/app/ui/admin/Package2Icon"
import ShoppingCartIcon from "@/app/ui/admin/ShoppingCartIcon"

export default function Navbar() {
	return (
		<div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
			<div className="flex flex-col gap-2">
				<div className="flex h-[60px] items-center px-6">
					<div className="flex items-center gap-2 font-semibold">
						<Package2Icon className="h-6 w-6" />
						<span className="">Admin panel</span>
					</div>
				</div>
				<div className="flex-1">
					<nav className="grid items-start px-4 text-sm font-medium">
						<Link
							className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
							href="#"
						>
							<ShoppingCartIcon className="h-4 w-4" />
							Orders
							<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">12</Badge>
						</Link>
						<Link
							className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
							href="#"
						>
							<PackageIcon className="h-4 w-4" />
							Products
						</Link>
					</nav>
				</div>
			</div>
		</div>
	)
}