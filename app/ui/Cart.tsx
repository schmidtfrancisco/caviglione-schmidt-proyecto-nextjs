import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Game } from "@/lib/definitions"
import CartItem from "./CartItem"
import { ScrollArea } from "@/components/ui/scroll-area"
export default function Cart() {
  const game: Game = {
    name: 'AjeChess',
    description: 'Classic strategy game for 2 players.',
    img: 'https://t.ly/Ia7tG',
    category: 'Juego de mesa',
    price: 777
  }
  const gameJuguete: Game = {
    name: 'Caballito de troya',
    description: 'Probablemente es solo una escoba.',
    img: 'https://t.ly/QkCcx',
    category: 'Juguete',
    price: 99.99
  }
  const gameVideojuego: Game = {
    name: 'Minecraft',
    description: 'Juego de mundo abierto',
    img: 'https://t.ly/XLzbu',
    category: 'Videojuego',
    price: 4120
  }
  const items = [game, gameJuguete, gameVideojuego, game, gameJuguete, gameVideojuego, game, gameJuguete, gameVideojuego, game, gameJuguete, gameVideojuego]


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-gray-900 hover:bg-gray-800 text-white hover:text-gray-300 rounded-full"
          size="icon"
        >
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="sr-only">Cart</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Your Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <ScrollArea className="h-[400px]">
          {items.map((game) => (
            <CartItem key={game.name} game={game} />
          ))}
        </ScrollArea>


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
  )
}