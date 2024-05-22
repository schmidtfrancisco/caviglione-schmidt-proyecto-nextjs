// El nombre del esquema es gamestore

/*SELECT *
FROM pg_catalog.pg_tables
WHERE schemaname != 'pg_catalog' AND 
    schemaname != 'information_schema';*/

const { db } = require('@vercel/postgres');
const boardgames = require('../lib/placeholder-data');

async function seedGames(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    await client.sql`CREATE TYPE game_category AS ENUM ('Juego de mesa', 'Videojuego', 'Juguete');`;

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS gamestore.games (
            id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
            name VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            images_url TEXT[] NOT NULL,
            category game_category NOT NULL,
            price NUMERIC(10, 2) NOT NULL
        );`;

    console.log('Table created: games');

    const insertedGames = await Promise.all(
      boardgames.map(
        (game) => client.sql`
          INSERT INTO gamestore.games (name, description, images_url, category, price)
          VALUES
          (${game.name}, ${game.description}, ARRAY[${toJSON(game.imgs)}], ${game.category}, ${game.price})
          ON CONFLICT DO NOTHING;`,
      ),
    );

    console.log('Games inserted:', insertedGames.length);

    return { createTable, games: insertedGames };

  } catch (error) {
    console.error('Error seeding games', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect()

  await seedGames(client)

  await client.end()
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

function toPostgresArray(arr) {
  return `{${arr.map(item => `"${item}"`).join(',')}}`;
}

function toJSON(arr) {
  return JSON.stringify(arr);
}