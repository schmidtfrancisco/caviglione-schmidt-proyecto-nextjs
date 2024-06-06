'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function Search({placeholder} : {placeholder?: string}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('pag', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
    
  }, 500);

  return (
    <div className="flex flex-row items-center gap-4">
      <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
      <Input
        type="search"
        placeholder={placeholder || 'Buscar...'}
        className="w-full"
        onChange={(ev) => {
          handleSearch(ev.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  )
}