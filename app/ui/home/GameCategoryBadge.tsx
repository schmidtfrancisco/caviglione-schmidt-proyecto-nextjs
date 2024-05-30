import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";


export default function GameCategoryBadge(
  { category, className = '' }: 
  { category: 'Juegos de mesa' | 'Videojuegos' | 'Juguetes', className?: string }
) {
  return (
    <Badge className={cn(className,
      { 'bg-green-800': category === 'Juegos de mesa' },
      { 'bg-blue-600': category === 'Videojuegos' },
      { 'bg-orange-600': category === 'Juguetes' },
    )}>
      {category}
    </Badge>
  );
}