import { NextResponse } from 'next/server';
import { fetchGames } from '@/lib/data/products-data';

export async function GET() {
  try {
    const games = await fetchGames();
    return NextResponse.json(games);
    
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch games' }, { status: 500 });
  }
}
