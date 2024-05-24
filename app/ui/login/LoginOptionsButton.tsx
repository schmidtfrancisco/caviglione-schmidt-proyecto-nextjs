import { auth, signOut } from "@/auth"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function LoginOptionsButton() {
  const session = await auth()
  if (!session?.user) {
    return (
      <Link href="/login" className="flex items-center gap-2 text-xs">
        <p>Iniciar sesión como administrador</p>
      </Link>
    )
  } else {
    return (
      <>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
          className=""
        >
        <Button variant="outline" size="sm" className="border-0 text-xs">
          <p>Cerrar sesión</p>  
        </Button>
          
        </form>
      </>
    )
  }
}