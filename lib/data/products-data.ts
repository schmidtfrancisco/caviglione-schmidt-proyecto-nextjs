import { sql, QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Category, Game } from "@/lib/definitions/products-definitions";

export async function fetchGameById(id: string) {
  noStore();
  try {
    const data = await sql`
      SELECT *
      FROM gamestore.games 
      WHERE id = ${id}
      LIMIT 1;
    `;
    const dbGame = data.rows[0];
    if (!dbGame) {
      return null;
    }
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

export async function fetchGameByName(name: string) {
  noStore();
  try {
    const data = await sql`
      SELECT *
      FROM gamestore.games 
      WHERE name ILIKE ${`%${name}%`} OR
      description ILIKE ${`%${name}%`}
      LIMIT 1;
    `;
    const dbGame = data.rows[0];
    if (!dbGame) {
      return null;
    }
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
  noStore();
  try { 
    const data = await sql`
      SELECT *
      FROM gamestore.games;
    `;

    const games: Game[] = mapToGameArray(data.rows);

    return games;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games');
  }
} 

const ITEMS_PER_PAGE = 10;

export async function fetchFilteredGamesSorted(
  query: string,
  currentPage: number,
  sort: string,
  min: number,
  max: number
) {
  const minInCents = min * 100;
  const maxInCents = max * 100;
  if (sort == "none") {
    return fetchFilteredGames(query, currentPage);
  } else if (sort == "name_asc") {
    return fetchFilteredGamesNameAsc(query, currentPage, minInCents, maxInCents);
  } else if (sort == "name_desc") {
    return fetchFilteredGamesNameDesc(query, currentPage, minInCents, maxInCents);
  } else if (sort == "price_asc") {
    return fetchFilteredGamesPriceAsc(query, currentPage, minInCents, maxInCents);
  } else if (sort == "price_desc") {
    return fetchFilteredGamesPriceDesc(query, currentPage, minInCents, maxInCents);
  }
}



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

    const games: Game[] = mapToGameArray(data.rows);
    return games;

  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games');
  }
} 

export async function fetchFilteredGamesNameAsc(
  query: string,
  currentPage: number,
  min: number,
  max: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();

  try {
    const data = await sql`
      SELECT *
      FROM gamestore.games
      WHERE name ILIKE ${`%${query}%`}
      AND price BETWEEN ${min} AND ${max}
      ORDER BY name ASC
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${offset};
    `;

    const games: Game[] = mapToGameArray(data.rows);
    return games;

  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games');
  }
} 

export async function fetchFilteredGamesNameDesc(
  query: string,
  currentPage: number,
  min: number,
  max: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  noStore();

  try {
    const data = await sql`
      SELECT *
      FROM gamestore.games
      WHERE name ILIKE ${`%${query}%`}
      AND price BETWEEN ${min} AND ${max}
      ORDER BY name DESC
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${offset};
    `;

    const games: Game[] = mapToGameArray(data.rows);

    return games;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games');
  }
} 

export async function fetchFilteredGamesPriceAsc(
  query: string,
  currentPage: number,
  min: number,
  max: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();
  try {
    const data = await sql`
      SELECT *
      FROM gamestore.games
      WHERE name ILIKE ${`%${query}%`}
      AND price BETWEEN ${min} AND ${max}
      ORDER BY price ASC
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${offset};
    `;

    const games: Game[] = mapToGameArray(data.rows);
    return games;

  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games');
  }
}

export async function fetchFilteredGamesPriceDesc(
  query: string,
  currentPage: number,
  min: number,
  max: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  noStore();
  try {
    const data = await sql`
      SELECT *
      FROM gamestore.games
      WHERE name ILIKE ${`%${query}%`}
      AND price BETWEEN ${min} AND ${max}
      ORDER BY price DESC
      LIMIT ${ITEMS_PER_PAGE}
      OFFSET ${offset};
    `;

    const games: Game[] = mapToGameArray(data.rows);
    return games;

  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games');
  }
}

export async function fetchGamesCount(query: string) {
  noStore();
  try {
    const data = await sql` 
      SELECT COUNT(*)
      FROM gamestore.games
      WHERE name ILIKE ${`%${query}%`};
    `;
    const totalPages = Math.ceil(Number(data.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games count');
  }
}

export async function fetchGamesCountPrice(query: string, min: number, max: number) {
  noStore();
  try {
    const data = await sql` 
      SELECT COUNT(*)
      FROM gamestore.games
      WHERE name ILIKE ${`%${query}%`}
      AND price BETWEEN ${min} AND ${max};
    `;
    const totalPages = Math.ceil(Number(data.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games count');
  }
}

export async function fetchGamesMaxPrice(query: string) {
  noStore();
  try {
    const data = await sql`
      SELECT MAX(price)
      FROM gamestore.games
      WHERE name ILIKE ${`%${query}%`};
    `;
    return data.rows[0].max / 100 ;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch max price');
  }
}


export function mapToGameArray(data: QueryResultRow[]): Game[] {
  return data.map((dbGame: any) => {
    return {
      id: dbGame.id,
      name: dbGame.name,
      description: dbGame.description,
      images_url: JSON.parse(dbGame.images_url),
      category: dbGame.category,
      price: dbGame.price
    };
  });
}
