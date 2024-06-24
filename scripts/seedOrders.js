const { db } = require("@vercel/postgres");
const { orders, games_orders } = require("../lib/placeholder-orders.js");

async function seedOrders(client) {
  await client.sql`CREATE TYPE order_status AS ENUM ('Aprobado', 'Cancelado', 'Enviado', 'Entregado');`;
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS gamestore.orders (
        id SERIAL PRIMARY KEY,
        payment_id VARCHAR(255) UNIQUE NOT NULL,
        client VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        addressNumber INT NOT NULL,
        zip VARCHAR(255) NOT NULL,
        total INT NOT NULL,
        status order_status NOT NULL,
        date DATE DEFAULT CURRENT_DATE
      );
    `;
    console.log("Table created: orders");
    const insertedOrders = await Promise.all(
      orders.map(
        (order) => client.sql`
          INSERT INTO gamestore.orders (payment_id, client, email, address, addressNumber, zip, total, status, date)
          VALUES
          (${order.payment_id}, ${order.client}, ${order.email}, ${order.address}, ${order.addressNumber}, ${order.zip}, ${order.total}, ${order.status}, ${order.date})
          ON CONFLICT DO NOTHING;`,
      ),
    )
    console.log("Orders inserted:", insertedOrders.length);
  } catch (error) {
    console.error("Error seeding orders:", error);
    throw error;
  }
}

async function seedGamesOrders(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS gamestore.games_orders (
        game_id UUID REFERENCES gamestore.games(id),
        order_id INT REFERENCES gamestore.orders(id),
        quantity INT NOT NULL,
        PRIMARY KEY (game_id, order_id)
      );
    `;
    console.log("Table created: games_orders");
    const insertedGamesOrders = await Promise.all(
      games_orders.map(
        (game_order) => client.sql`
          INSERT INTO gamestore.games_orders (game_id, order_id, quantity)
          VALUES
          (${game_order.game_id}, ${game_order.order_id}, ${game_order.quantity})
          ON CONFLICT DO NOTHING;`,
      ),
    );
    console.log("Games_orders inserted:", insertedGamesOrders.length);
  } catch (error) {
    console.error("Error seeding games_orders:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect()
  await seedOrders(client)
  await seedGamesOrders(client)
  await client.end()
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});