
import { NextResponse } from "next/server";
import { linkToCategory } from "@/lib/utils";
import { fetchGamesByCategory } from "@/lib/data/products-data";

type Params = {
  category: string
}
 
export async function GET(request: Request, context: { params: Params }) {
  const paramsCategory = context.params.category;
  const category = linkToCategory(paramsCategory);
  if (!category) {
    return NextResponse.json({ error: 'Category not found' }, { status: 404 });
  }

  try {
    const games = await fetchGamesByCategory(category);
    return NextResponse.json(games);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch games' }, { status: 500 });
  }
}