'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { generatePagination } from '@/lib/utils';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function PagePagination({ maxPage }: { maxPage: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('pag')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('pag', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, maxPage);

  console.log(allPages);
  return (
    <div className="flex justify-center my-8 ">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={createPageURL(currentPage - 1)}
              isDisabled={currentPage <= 1}
              className='border-1'
            />
          </PaginationItem>

          {allPages.map((page, index) => (
            <PaginationItem key={index}>
              {(page === '...') ?
                <PaginationEllipsis /> :
                <PaginationLink
                  href={createPageURL(page)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              }
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href={createPageURL(currentPage + 1)}
              isDisabled={currentPage >= maxPage}
              className='border-red-600 border-1'
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
