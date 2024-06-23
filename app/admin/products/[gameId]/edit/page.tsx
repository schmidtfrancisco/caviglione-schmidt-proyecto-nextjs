import Breadcrumbs from "@/components/admin/orders/Breadcrumbs";
import EditProductForm from "@/components/admin/products/EditProductForm";
import { fetchGameById } from "@/lib/data/products-data";
import { Game } from "@/lib/definitions/products-definitions";
import { notFound } from "next/navigation";

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
          {
						label: "Productos",
						href: "/admin/products"
					},
          {
            label: "Editar producto",
            href: `/admin/products/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditProductForm game={game}/>
    </div>
	);
}