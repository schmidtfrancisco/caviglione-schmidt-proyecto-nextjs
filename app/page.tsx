import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CarouselGame from "./ui/home/CarouselGame";
import { Game } from '@/lib/definitions'

export default function Home() {
  
  const game : Game = {
    name : 'AjeChess',
    description : 'Classic strategy game for 2 players.',
    img: 'https://t.ly/Ia7tG',
    category: 'Juego de mesa',
    price: 777
  }
  const gameJuguete : Game = {
    name : 'Caballito de troya',
    description : 'Probablemente es solo una escoba.',
    img: 'https://t.ly/QkCcx',
    category: 'Juguete',
    price: 99.99
  }
  const gameVideojuego : Game = {
    name : 'Minecraft',
    description : 'Juego de mundo abierto',
    img: 'https://t.ly/XLzbu',
    category: 'Videojuego',
    price: 4120
  }
  const recommended = [game, gameJuguete, gameVideojuego]
  const boardGames = [game, game, game, game, game]
  const toys = [gameJuguete, gameJuguete, gameJuguete]
  const videogames = [gameVideojuego, gameVideojuego, gameVideojuego]

  return (
    <>
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-950">JuegoLandia</h1>
        <section className="mb-12 mx-12 pt-6 border-t border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Juegos recomendados</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            orientation="horizontal"
          >
            <CarouselContent className='-ml-1'>
              {recommended.map((game) => (
                <CarouselGame key={game.name} game={game} />
              ))}

            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="mb-12 mx-12 pt-6 border-t border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Juegos de mesa</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            orientation="horizontal"
          >
            <CarouselContent className='-ml-1'>
              {boardGames.map((game) => (
                <CarouselGame key={game.name} game={game} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="mb-12 mx-12 pt-6 border-t border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Videojuegos</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            orientation="horizontal"
          >
            <CarouselContent className='-ml-1'>
              {videogames.map((game) => (
                <CarouselGame key={game.name} game={game} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section className="mb-12 mx-12 pt-6 border-t border-gray-100">
          <h2 className="text-2xl font-bold mb-4">Juguetes</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            orientation="horizontal"
          >
            <CarouselContent className='-ml-1'>
              {toys.map((game) => (
                <CarouselGame key={game.name} game={game} />
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
    </>

  );
}
