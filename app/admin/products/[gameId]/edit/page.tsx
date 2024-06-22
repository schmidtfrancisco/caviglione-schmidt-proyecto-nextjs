
import { notFound } from "next/navigation";
import { Category, Game } from "@/lib/definitions/products-definitions";
import { fetchGameById } from "@/lib/data/products-data";
import GameCategoryBadge from "@/components/inicio/GameCategoryBadge";
import GameCldImage from "@/components/juegos/GameCldImage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "@/components/admin/pedidos/breadcrumbs";
import EditProductForm from '@/components/admin/productos/EditProductForm'

interface PageProps {
  params: {
    gameId: string
  }
}

export default async function Page({ params }: PageProps) {
	const id = params.gameId;
  const game: Game | null = await fetchGameById(id);
  if (!game) {
    notFound();
  }
	return(
		<div className="p-4">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Productos', href: '/admin/products' },
          {
            label: 'Editar producto',
            href: `/admin/products/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditProductForm game={game}/>
    </div>
	)
}