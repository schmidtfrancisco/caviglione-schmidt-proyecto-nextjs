import Breadcrumbs from "@/components/admin/orders/Breadcrumbs";
import EditOrderForm from "@/components/admin/orders/EditOrderForm";
import { fetchOrderById } from "@/lib/data/orders-data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const order = await fetchOrderById(id);
  if (!order) {
    notFound();
  }
  return (
    <div className="p-4">
      <Breadcrumbs
        breadcrumbs={[
          { 
						label: "Pedidos",
						href: "/admin/"
					},
          {
            label: "Editar pedido",
            href: `/admin/pedidos/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditOrderForm order={order}/>
    </div>
  );
}