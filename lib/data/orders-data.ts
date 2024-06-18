import { sql } from '@vercel/postgres';
import { OrderItem, OrdersTable } from '@/lib/definitions/orders-definitions';
import { unstable_noStore as noStore } from 'next/cache';

const ITEMS_PER_PAGE = 10;
export async function fetchOrders() {
  noStore();
  try {
    const data = await sql<OrdersTable>`
      SELECT *
      FROM gamestore.orders;
    `;
    
    return data.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch orders');
  }
}

export async function fetchFilteredOrders(query: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();
  try {
    const data = await sql<OrdersTable>`
      SELECT *
      FROM gamestore.orders
      WHERE (client ILIKE ${`%${query}%`}
      OR email ILIKE ${`%${query}%`})
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${offset};
    `;
    
    return data.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch orders');
  }
}

export async function fetchFilteredOrdersByState(query: string, state: string, currentPage: number) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();
  try {
    const data = await sql<OrdersTable>`
      SELECT *
      FROM gamestore.orders
      WHERE status = ${state}
      AND (client ILIKE ${`%${query}%`}
      OR email ILIKE ${`%${query}%`})
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${offset};
    `;
    
    return data.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch orders');
  }
}

export async function fetchOrderById(id: string) {
  noStore();
  try {
    const data = await sql<OrdersTable>`
      SELECT *
      FROM gamestore.orders
      WHERE id = ${id}
      LIMIT 1;
    `;
    
    return data.rows[0];
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch order');
  }
}

export async function fetchOrdersCount(query: string) {
  noStore();
  try {
    const data = await sql`
      SELECT COUNT(*)
      FROM gamestore.orders
      WHERE (client ILIKE ${`%${query}%`}
      OR email ILIKE ${`%${query}%`});
    `;
    
    const totalPages = Math.ceil(Number(data.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch orders count');
  }
}

export async function fetchOrdersCountByState(query: string, state: string) {
  noStore();
  try {
    const data = await sql`
      SELECT COUNT(*)
      FROM gamestore.orders
      WHERE (client ILIKE ${`%${query}%`}
      OR email ILIKE ${`%${query}%`})
      AND status = ${state};
    `;
    
    const totalPages = Math.ceil(Number(data.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch orders count');
  }
}

export async function fetchOrderItems(orderId: string) {
  noStore();
  try {
    const data = await sql<OrderItem>`
      SELECT *
      FROM gamestore.games_orders
      WHERE order_id = ${orderId};
    `;
    
    return data.rows;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch order items');
  }
}

export async function existsOrderWithPaymentId(paymentId: string) {
  try {
    const data = await sql<OrdersTable>`
      SELECT *
      FROM gamestore.orders
      WHERE payment_id = ${paymentId}
      LIMIT 1;
    `;
    
    return data.rows.length > 0;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch order');
  }
}