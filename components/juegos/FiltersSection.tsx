"use client";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { ChevronDownIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";


const SORT_OPTIONS = [
  { label: "Ninguno", value: "none" },
  { label: "Nombre: A-Z", value: "name_asc" },
  { label: "Nombre: Z-A", value: "name_desc" },
  { label: "Menor precio", value: "price_asc" },
  { label: "Mayor precio", value: "price_desc" },
] as const;

export default function FiltersSection({ maxPrice }: { maxPrice: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [priceFilter, setPriceFilter] = useState({
    min: searchParams.get("min") ? Number(searchParams.get("min")) : 0,
    max: searchParams.get("max") ? Number(searchParams.get("max")) : maxPrice
  });

  const handleFilter = useDebouncedCallback((min: number, max: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("pag", "1");

    if (min !== 0) {
      params.set("min", min.toString());
    } else {
      params.delete("min");
    }
    if (max !== 0) {
      params.set("max", max.toString());
    } else {
      params.delete("max");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const handleChange = (min: number, max: number) => {
    setPriceFilter({ min, max });
    handleFilter(min, max);
  }
  const handleSort = (sort: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("pag", "1");
    if (sort !== "none") {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }

    replace(`${pathname}?${params.toString()}`);

  }

  const handleSortChange = (value: string) => {
    handleSort(value)
  }

  return (

    <div className="container grid gap-8 items-start px-4 md:px-0">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Filtros</h3>
        </div>
        <div className="space-y-6 p-2">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-medium">
              <span>Ordenar por</span>
              <ChevronDownIcon className="w-5 h-5 transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid gap-2 mt-4">
                <RadioGroup
                  value={`${searchParams.get('sort') || 'none'}`}
                  onValueChange={handleSortChange}
                >
                  {SORT_OPTIONS.map((option) => (
                    <div key={option.value} className="flex items-center gap-2">
                      <RadioGroupItem
                        id={option.value}
                        value={option.value}
                      />
                      <Label htmlFor={option.value}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-medium">
              <span>Rango de precio</span>
              <ChevronDownIcon className="w-5 h-5 transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid gap-4 mt-4">
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceFilter.min}
                      onChange={(e) => handleChange(Number(e.target.value), priceFilter.max)}
                      className="pl-8 pr-3 py-2 rounded-md border border-gray-300 "
                    />
                    <CurrencyDollarIcon className="absolute top-1/2 left-1 w-5 h-5 -translate-y-1/2 text-gray-400"/>
                  </div>
                  <div className="relative">
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceFilter.max}
                      onChange={(e) => handleChange(priceFilter.min, Number(e.target.value))}
                      className="pl-8 pr-3 py-2 rounded-md border border-gray-300 "
                    />
                    <CurrencyDollarIcon className="absolute top-1/2 left-1 w-5 h-5 -translate-y-1/2 text-gray-400"/>
                  </div>
                </div>
                <Slider
                  defaultValue={[priceFilter.min, priceFilter.max]}
                  onValueChange={([min, max]) => handleChange(min, max)}
                  min={0}
                  max={maxPrice}
                  step={100}
                />
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  )
}