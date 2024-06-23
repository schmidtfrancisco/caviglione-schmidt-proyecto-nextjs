import { OrderItem } from "@/lib/definitions/orders-definitions";
import { CartItem, Category } from "@/lib/definitions/products-definitions";
import { type ClassValue, clsx } from "clsx";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number) {
  return (price / 100).toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}

export function getCategoryLink(category: Category) {
  return `/juegos/${category.toLowerCase().replaceAll(' ', '-')}`
}

export function linkToCategory(link: string) {
  switch (link) {
    case "juegos-de-mesa":
      return Category.JUEGOS_DE_MESA;
    case "videojuegos":
      return Category.VIDEOJUEGOS;
    case "juguetes":
      return Category.JUGUETES;
    default: return null
  }
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (currentPage <= 2) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }
  if (currentPage <= 3) {
    return [1, 2, 3, 4, '...', totalPages - 1, totalPages];
  }
  if (currentPage >= totalPages - 1) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export function mapToMPItems(cartItems: CartItem[]) {
  return cartItems.map((item) => {
    return {
      id: item.game.id,
      title: item.game.name,
      unit_price: item.game.price / 100,
      quantity: item.quantity,
      picture_url: item.game.images_url[0],
      description: item.game.description,
      currency_id: "ARS",
    };
  }
  );
}

export function mapToOrderItems(items: Items[]): OrderItem[] {
  return items.map((item) => {
    return {
      game_id: item.id,
      quantity: Number(item.quantity),
    };
  });
}