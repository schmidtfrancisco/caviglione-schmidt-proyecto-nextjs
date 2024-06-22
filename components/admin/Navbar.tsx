
import { signOut } from '@/auth';
import NavLinks from "@/components/admin/NavLinks"
import { Package2Icon } from "lucide-react";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
	return (
		<div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
			<div className="flex flex-col gap-2">
				<div className="flex h-[60px] items-center px-6">
					<div className="flex items-center gap-2 font-semibold">
						<Package2Icon className="h-6 w-6" />
						<span>Panel de Administración</span>
					</div>
				</div>
				<div className="flex-1">
					<nav className="grid items-start px-4 text-sm font-medium">
						<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
							<NavLinks/>
							<form className="m-0"
								action={async () => {
									'use server';
									await signOut();
								}}
							>
								<button
									className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-700 hover:text-gray-300 w-full"
									type="submit"
								>
									<PowerIcon className="h-4 w-4" />
									<div>Cerrar sesión</div>
								</button>
							</form>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}