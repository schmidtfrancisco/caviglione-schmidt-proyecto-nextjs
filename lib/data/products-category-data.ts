import { sql, QueryResultRow } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Category, Game } from "@/lib/definitions/products-definitions";
import { mapToGameArray } from "@/lib/data/products-data";

const ITEMS_PER_PAGE = 10;

export async function fetchGamesByCategory(category: Category) {
  noStore();
  try {
    const data = await sql`
      SELECT *
      FROM gamestore.games 
      WHERE category = ${category};
    `;
    const games: Game[] = mapToGameArray(data.rows);
    return games;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games');
  }
}

export async function fetchGamesByCategoryWithLimit(category: Category, limit: number) {
  noStore();
  try {
    const data = await sql`
      SELECT *
      FROM gamestore.games 
      WHERE category = ${category}
      LIMIT ${limit};
    `;
    const games: Game[] = mapToGameArray(data.rows);
    return games;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games');
  }
}

export async function fetchFilteredGamesByCategorySorted(
  category: Category,
  query: string,
  currentPage: number,
  sort: string,
  min: number,
  max: number
) { 

  const minInCents = min * 100;
  const maxInCents = max * 100;
  if (sort == "none") {
    return fetchFilteredGamesByCategory(category, query, currentPage, minInCents, maxInCents);
  } else if (sort == "name_asc") {
    return fetchFilteredGamesNameAscByCategory(category, query, currentPage, minInCents, maxInCents);
  } else if (sort == "name_desc") {
    return fetchFilteredGamesNameDescByCategory(category, query, currentPage, minInCents, maxInCents);
  } else if (sort == "price_asc") {
    return fetchFilteredGamesPriceAscByCategory(category, query, currentPage, minInCents, maxInCents);
  } else if (sort == "price_desc") {
    return fetchFilteredGamesPriceDescByCategory(category, query, currentPage, minInCents, maxInCents);
  }
}

export async function fetchFilteredGamesByCategory(
  category: Category,
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
      WHERE category = ${category}
      AND name ILIKE ${`%${query}%`}
      AND price BETWEEN ${min} AND ${max}
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

export async function fetchFilteredGamesNameAscByCategory(
  category: Category,
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
      WHERE category = ${category}
      AND name ILIKE ${`%${query}%`}
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

export async function fetchFilteredGamesNameDescByCategory(
  category: Category,
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
      WHERE category = ${category}
      AND name ILIKE ${`%${query}%`}
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

export async function fetchFilteredGamesPriceAscByCategory(
  category: Category,
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
      WHERE category = ${category}
      AND name ILIKE ${`%${query}%`}
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

export async function fetchFilteredGamesPriceDescByCategory(
  category: Category,
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
      WHERE category = ${category}
      AND name ILIKE ${`%${query}%`}
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

export async function fetchGamesByCategoryCount(category: Category, query: string) {
  noStore();
  try {
    const data = await sql` 
      SELECT COUNT(*)
      FROM gamestore.games
      WHERE category = ${category}
      AND name ILIKE ${`%${query}%`};
    `;
    const totalPages = Math.ceil(Number(data.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games count');
  }
}

export async function fetchGamesByCategoryCountPrice(category: Category, query: string, min: number, max: number) {
  noStore();
  const minInCents = min * 100;
  const maxInCents = max * 100;
  try {
    const data = await sql` 
      SELECT COUNT(*)
      FROM gamestore.games
      WHERE category = ${category}
      AND name ILIKE ${`%${query}%`}
      AND price BETWEEN ${minInCents} AND ${maxInCents};
    `;
    const totalPages = Math.ceil(Number(data.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch games count');
  }
}

export async function fetchCategoryGamesMaxPrice(category: Category, query: string) {
  noStore();
  try {
    const data = await sql`
      SELECT MAX(price)
      FROM gamestore.games
      WHERE name ILIKE ${`%${query}%`}
      AND category = ${category};
    `;
    return data.rows[0].max / 100 ;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch max price');
  }
}