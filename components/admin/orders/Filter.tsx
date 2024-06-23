"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const isFilterActive = () => {
    return searchParams.has("state");
  }
  const handleFilter = useDebouncedCallback((state) => {
    const params = new URLSearchParams(searchParams);
    params.set("pag", "1");
    if (state !== "Todos") {
      params.set("state", state);
    } else {
      params.delete("state");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);
  const handleChange = (value: string) => {
    handleFilter(value)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <FunnelIcon className="w-5 md:mr-2" />
          <div className="relative">
            <Badge className={cn("absolute -top-6 -right-5 md:-right-[64px] rounded-full bg-sky-700 px-1 py-0 text-xs text-white w-3 h-3",
              { 'hidden': !isFilterActive() }
						)}>
            </Badge>
          </div>
          <span className="hidden md:inline-block ml-1 text-sm">
						Filtrar
					</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
				<DropdownMenuRadioGroup
					value={`${searchParams.get('state') || 'Todos'}`}
					onValueChange={handleChange}
				>
					<DropdownMenuRadioItem value="Aprobado">Aprobado</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="Enviado">Enviado</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="Entregado">Entregado</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="Cancelado">Cancelado</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="Todos">Todos</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}