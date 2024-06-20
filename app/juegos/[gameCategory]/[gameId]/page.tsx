
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, getCategoryLink } from "@/lib/utils";
import { Category, Game } from "@/lib/definitions/products-definitions";
import { fetchGameById } from "@/lib/data/products-data";
import AddToCartButton from "@/components/cart/AddToCartButton";
import GameCategoryBadge from "@/components/inicio/GameCategoryBadge";
import GameCldImage from "@/components/juegos/GameCldImage";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PageProps {
  params: {
    gameId: string
  }
}

export default async function Page({ params }: PageProps) {
  const game: Game | null = await fetchGameById(params.gameId);

  if (!game) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:max-w-lg lg:self-stretch">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
              <BreadcrumbLink asChild>
                  <Link href="/juegos">Juegos</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
              <BreadcrumbLink asChild>
                  <Link href={getCategoryLink(game.category)}>{game.category}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{game.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-10">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{game.name}</h1>
          </div>
          <section className="mt-4">
            <div className="flex items-center">
              <p className="font-medium text-gray-900">
                {formatPrice(game.price)}
              </p>
              <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
                <GameCategoryBadge category={game.category} className="text-white px-2 py-1 rounded-full text-xs"/>
              </div>
            </div>
            <div className="mt-4 space-y-6">
              <p className="text-base text-muted-foreground">{game.description}</p>
            </div>

            <div className="mt-6 flex items-center">

            </div>
          </section>
        </div>

        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-square rounded-lg">
            <Carousel className="rounded-lg overflow-hidden">
              <CarouselContent>
                {game.images_url.map((image) => (
                  <CarouselItem key={image}>
                    <GameCldImage src={image} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-white/50 hover:bg-white rounded-xl p-2 cursor-pointer">
                <ChevronLeftIcon className="h-6 w-6" />
              </CarouselPrevious>
              <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white/50 hover:bg-white rounded-xl p-2 cursor-pointer">
                <ChevronRightIcon className="h-6 w-6" />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <div>
            <div className="mt-10 flex flex-col gap-5">
              <AddToCartButton game={game} size={"lg"} quantityOption={true} buttonClassName="min-w-[182px]"/>
              <Button size="lg" className="lg:max-w-[310px] m-w">Comprar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}