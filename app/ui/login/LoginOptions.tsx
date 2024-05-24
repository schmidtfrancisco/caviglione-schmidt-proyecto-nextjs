import { auth, signOut } from "@/auth"
import { UserRoundCogIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"
import { DropdownLogInLink, DropdownDashboardLink } from "@/app/ui/login/Admin-links"

export default async function LoginOptions() {
  const session = await auth()

  return (
    <div className="hidden lg:block">
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button
            className="bg-gray-900 hover:bg-gray-800 text-white hover:text-gray-300 rounded-full"
            size="icon"
          >
            <UserRoundCogIcon className="h-6 w-6" />
            <span className="sr-only">Options</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-50">
          <DropdownMenuLabel>Opciones de administrador</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {session ? (
            <>
              <DropdownDashboardLink />
              <LogOutButton />
            </>
          ) : (
            <DropdownLogInLink />
          )
          }
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export function LogOutButton() {
  return (
    <DropdownMenuItem  className="p-0">
      <form
        action={async () => {
          'use server';
          await signOut({ redirectTo: '/login' });
        }}
      >
        <button className="text-sm flex align-middle items-center gap-2 rounded-lg p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
          Cerrar sesión
        </button>
      </form>
    </DropdownMenuItem>
  )
}