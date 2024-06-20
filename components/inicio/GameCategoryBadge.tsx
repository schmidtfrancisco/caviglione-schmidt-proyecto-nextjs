import { cn } from "@/lib/utils";
import { Category } from "@/lib/definitions/products-definitions";
import { Badge } from "@/components/ui/badge";

export default function GameCategoryBadge(
  { category, className = '' }: 
  { category: Category, className?: string }
) {
  return (
    <Badge className={cn(className,
      { 'bg-green-800': category === Category.JUEGOS_DE_MESA },
      { 'bg-blue-600': category === Category.VIDEOJUEGOS },
      { 'bg-orange-600': category === Category.JUGUETES },
    )}>
      {category}
    </Badge>
  );
}