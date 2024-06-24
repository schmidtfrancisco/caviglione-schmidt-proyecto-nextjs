import Cart from "@/components/cart/Cart";
import LoginOptions from "@/components/login/LoginOptions";
import SheetLoginOptions from "@/components/login/SheetLoginOptions";
import NavLinks from "@/components/navbar/Nav-links";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Bars3BottomLeftIcon, FlagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { outfit } from "@/components/fonts";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between px-4 bg-white border-b border-gray-200 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden bg-white text-black hover:bg-gray-700 hover:text-gray-300" size="icon">
            <Bars3BottomLeftIcon strokeWidth={2} className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-2">
            <Link className="flex items-center gap-2" href="/">
              <Image src={"/logoGameStore.png"} alt="Logo GameStore" width={50} height={50} />
              <h3 className={cn(outfit.className, "text-3xl font-bold")}>
                Game<span className="text-sky-800">Store</span>
              </h3>
            </Link>
            <div className="grid gap-2 py-6">
              <NavLinks isForSidebar />
            </div>
          </div>
          <div className="flex-shrink-0">
            <SheetLoginOptions />
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex items-center gap-2" href="/">
        <Image src={"/logoGameStore.png"} alt="Logo GameStore" width={50} height={50} />
        <h3 className={cn(outfit.className, "text-2xl font-bold")}>
          Game<span className="text-sky-800">Store</span>
        </h3>
      </Link>
      <Link href="/" className="lg:hidden items-center gap-2">
      <Image src={"/logoGameStore.png"} alt="Logo GameStore" width={50} height={50} className="justify-self-center"/>
      </Link>
      <nav className="flex flex-row gap-4 items-center">
        <div className="hidden lg:flex lg:flex-row items-center gap-4 ml-auto justify-self-end">
          <NavLinks />
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Cart />
          <LoginOptions />
        </div>
      </nav>
    </header>
  );
}