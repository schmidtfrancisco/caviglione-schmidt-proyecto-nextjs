import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import CarouselGame from "@/app/ui/home/CarouselGame";
import { Game } from '@/lib/definitions'
import { fetchBoardgames } from "@/lib/data";

export default async function Home() {
  
  const game : Game = {
    id: '1',
    name : 'AjeChess',
    description : 'Classic strategy game for 2 players.',
    images_url: ['https://t.ly/Ia7tG'],
    category: 'Juego de mesa',
    price: 777
  }
  const gameJuguete : Game = {
    id: '2',
    name : 'Caballito de troya',
    description : 'Probablemente es solo una escoba.',
    images_url: ['https://t.ly/QkCcx'],
    category: 'Juguete',
    price: 99.99
  }
  const gameVideojuego : Game = {
    id: '3',
    name : 'Minecraft',
    description : 'Juego de mundo abierto',
    images_url: ['https://t.ly/XLzbu'],
    category: 'Videojuego',
    price: 4120
  }
  const recommended = [game, gameJuguete, gameVideojuego]
  const boardGames = await fetchBoardgames();
  const toys = [gameJuguete, gameJuguete, gameJuguete]
  const videogames = [gameVideojuego, gameVideojuego, gameVideojuego, gameVideojuego]

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
            <CarouselContent>
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
            <CarouselContent>
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
            <CarouselContent>
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
            <CarouselContent>
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
