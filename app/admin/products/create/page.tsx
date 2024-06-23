import Breadcrumbs from "@/components/admin/orders/Breadcrumbs";
import CreateProductForm from "@/components/admin/products/CreateProductForm";

export default function Page() {
  return (
		<div className="p-4">
      <Breadcrumbs
        breadcrumbs={[
          {
						label: "Productos",
						href: "/admin/products"
					},
          {
            label: "Añadir producto",
            href: "/admin/products/create",
            active: true,
          },
        ]}
      />
			<CreateProductForm/>
    </div>
  )
}