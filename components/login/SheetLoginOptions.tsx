import { auth, signOut } from "@/auth"
import { SheetLogInLink, SheetDashboardLink } from "@/components/login/Admin-links"
import { SheetClose } from "@/components/ui/sheet"
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"

export default async function SheetLoginOptions() {
  const session = await auth()
  if (!session?.user) {
    return (
      <SheetLogInLink />
    )
  } else {
    return (
      <>
        <SheetDashboardLink />
        <SheetClose asChild>
          <form
            action={async () => {
              'use server';
              await signOut({redirectTo: '/login'});
            }}
          >
            <button className="text-sm flex align-middle items-center gap-2 rounded-lg p-2 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <ArrowRightStartOnRectangleIcon className="h-6 w-6" />
              Cerrar sesión
            </button>
          </form>
        </SheetClose>
      </>
    )
  }

}