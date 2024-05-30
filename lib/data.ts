import { sql } from '@vercel/postgres';
import { Game } from '@/lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchGamesByCategory(category: 'Juegos de mesa' | 'Videojuegos' | 'Juguetes') {
  noStore();

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('Category:', category);

    const data = await sql`
      SELECT *
      FROM gamestore.games 
      WHERE category = ${category};
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
    throw new Error('Failed to fetch games');
  }
}

export async function fetchGameById(id: string) {
  try {
    
    const data = await sql`
      SELECT *
      FROM gamestore.games 
      WHERE id = ${id}
      LIMIT 1;
    `;

    const dbGame = data.rows[0];
    const game: Game = {
      id: dbGame.id,
      name: dbGame.name,
      description: dbGame.description,
      images_url: JSON.parse(dbGame.images_url),
      category: dbGame.category,
      price: dbGame.price
    };

    return game;

  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch game');
  }
} 

export async function fetchGames() { 
  try { 

    const data = await sql`
      SELECT *
      FROM gamestore.games;
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
    throw new Error('Failed to fetch games');
  }
} 


const ITEMS_PER_PAGE = 10;
export async function fetchFilteredGames(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  noStore();
  try {
    const data = await sql`
      SELECT *
      FROM gamestore.games
      WHERE name ILIKE ${`%${query}%`}
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${offset};
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
    throw new Error('Failed to fetch games');
  }
} 
