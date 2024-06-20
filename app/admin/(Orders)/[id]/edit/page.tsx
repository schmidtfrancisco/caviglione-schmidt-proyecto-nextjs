
import { fetchOrderById } from '@/lib/data/orders-data';
import NotFound from '@/app/admin/(Orders)/[id]/edit/not-found';
import Form from '@/components/admin/pedidos/edit-form';
import Breadcrumbs from '@/components/admin/pedidos/breadcrumbs';

export default async function Page({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const order = await fetchOrderById(id);
  if (!order) {
    NotFound();
  }
  return (
    <div className="p-4">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Pedidos', href: '/admin/' },
          {
            label: 'Editar pedido',
            href: `/admin/pedidos/${id}/edit`,
            active: true,
          },
        ]}
      />
        <Form order={order}/>
    </div>
  );
}