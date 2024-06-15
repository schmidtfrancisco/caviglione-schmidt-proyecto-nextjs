import Form from '@/app/ui/admin/orders/edit-form';
import Breadcrumbs from '@/app/ui/admin/orders/breadcrumbs';
import NotFound from '@/app/admin/(Orders)/[id]/edit/not-found';
import { fetchOrderById } from '@/lib/data/orders-data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const order = await fetchOrderById(id);
  if (!order) {
    NotFound();
  }
  return (
    <div className="p-4">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
        <Form order={order}/>
    </div>
  );
}