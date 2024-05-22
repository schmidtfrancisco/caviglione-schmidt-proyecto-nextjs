import { sql } from '@vercel/postgres';
import { Game, DbGame } from '@/lib/definitions';

export async function fetchBoardgames() {
  try {
    const data = await sql<DbGame>`
      SELECT *
      FROM gamestore.games 
      WHERE category = 'Juego de mesa';
    `;

    const games: Game[] = data.rows.map((dbGame) => {
      return {
        id: dbGame.id,
        name: dbGame.name,
        description: dbGame.description,
        images_url: JSON.parse(dbGame.images_url),
        category: dbGame.category,
        price: dbGame.price
      };
    });

    return games;

  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch boardgames');
  }
}