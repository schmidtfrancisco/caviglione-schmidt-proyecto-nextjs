import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import NavLinks from "@/app/ui/Nav-links"
import Cart from "@/app/ui/Cart"
import LoginOptions from "@/app/ui/LoginOptions"
import { Bars3BottomLeftIcon, FlagIcon } from "@heroicons/react/24/outline"


export default function Navbar() {
  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900 text-white">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden bg-gray-900" size="icon">
            <Bars3BottomLeftIcon strokeWidth={2} className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="flex items-center gap-2" href="#">
            <FlagIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Game Store</span>
          </Link>
          <div className="grid gap-2 py-6">
            <NavLinks />
          </div>
        </SheetContent>
      </Sheet>

      <Link className="mr-6 hidden lg:flex items-center gap-2" href="/">
        <FlagIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Game Store</span>
      </Link>
      
      <nav className="hidden lg:flex lg:flex-row items-center gap-4 mx-auto">
        <NavLinks />
      </nav>

      <div className="ml-auto flex items-center gap-4">
        <Cart />
        <LoginOptions />
      </div>
    </header>
  )
}
