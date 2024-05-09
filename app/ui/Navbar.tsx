import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import NavLinks from "@/app/ui/Nav-links"
import { Bars3BottomLeftIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"

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
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              href="#"
            >
              Login as Admin
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              href="#"
            >
              PC Games
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              href="#"
            >
              Table Games
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <Link className="mr-6 hidden lg:flex items-center gap-2" href="#">
        <FlagIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Game Store</span>
      </Link>
      <nav className="hidden lg:flex lg:flex-row items-center gap-4 mx-auto">
        <NavLinks />
      </nav>

      <div className="ml-auto flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="bg-gray-900 text-white hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              size="icon"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="sr-only">Cart</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Your Cart</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    alt="Product Image"
                    className="rounded-md"
                    height={40}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div>
                    <p className="font-medium">Product Name</p>
                    <p className="text-sm text-gray-500">$19.99</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    alt="Product Image"
                    className="rounded-md"
                    height={40}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div>
                    <p className="font-medium">Another Product</p>
                    <p className="text-sm text-gray-500">$29.99</p>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <p className="font-medium">Total</p>
                <p className="font-medium">$49.98</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button className="w-full">Checkout</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}



function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}