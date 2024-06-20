'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function Search({ placeholder, className }: { placeholder?: string, className?: string }) {
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
    <div className={`relative ${className ? className : 'ml-auto'}`}>
      <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
      <Input
        className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-gray-50"
        placeholder={`${placeholder || 'Buscar...'}`} 
        type="search"
        onChange={(ev) => {
          handleSearch(ev.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  )
}

