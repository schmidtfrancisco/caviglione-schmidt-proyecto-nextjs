'use client'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";


const SORT_OPTIONS = [
  { label: "Ninguno", value: "none" },
  { label: "Nombre: A-Z", value: "name_asc" },
  { label: "Nombre: Z-A", value: "name_desc" },
  { label: "Menor precio", value: "price_asc" },
  { label: "Mayor precio", value: "price_desc" },
] as const;

export default function FiltersSection() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  

  const isFilterActive = () => {
    return searchParams.has('state');
  }

  const handleSort = useDebouncedCallback((sort) => {
    const params = new URLSearchParams(searchParams);
    params.set('pag', '1');
    if (sort !== 'none') {
      params.set('sort', sort);
    } else {
      params.delete('sort');
    }

    replace(`${pathname}?${params.toString()}`);

  }, 500);

  const handleSortChange = (value: string) => {
    handleSort(value)
  }

  return (

    <div className="container grid md:grid-cols-[240px_1fr] gap-8 items-start px-4 md:px-6">
      <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950 dark:border dark:border-gray-800">
        <div className="p-6 border-b dark:border-gray-800">
          <h3 className="text-lg font-semibold">Filtros</h3>
        </div>
        <div className="space-y-6 p-6">
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center justify-between w-full text-base font-medium">
              <span>Ordenar por</span>
              <ChevronDownIcon className="w-5 h-5 transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid gap-2 mt-4">
                <RadioGroup defaultValue="none" onValueChange={handleSortChange}>
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
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50"
                  />
                  <Input
                    type="number"
                    placeholder="Max"
                    className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50"
                  />
                </div>
                <Slider defaultValue={[25, 75]} max={100} step={1} />
              </div>
            </CollapsibleContent>
          </Collapsible>

        </div>
      </div>
    </div>

  )
}