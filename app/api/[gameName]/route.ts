import { fetchGameByName } from "@/lib/data/products-data";
import { NextResponse } from "next/server";

type Params = {
  gameName: string
}

export async function GET(request: Request, context: { params: Params }) {

  const paramsName = context.params.gameName;

  try {
    const game = await fetchGameByName(paramsName);
    if (!game) {
      return NextResponse.json({ error: 'Game not found' }, { status: 404 });
    }

    return NextResponse.json(game);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch game' }, { status: 500 });
  }
}