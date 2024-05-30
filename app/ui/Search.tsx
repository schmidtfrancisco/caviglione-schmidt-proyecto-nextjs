'use client';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';


export default function Search() {
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
    <>
      <Label htmlFor="search">
        Search
      </Label>
      <Input
        placeholder="Search..."
        className="w-full"
        onChange={(ev) => {
          handleSearch(ev.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </>
  )
}