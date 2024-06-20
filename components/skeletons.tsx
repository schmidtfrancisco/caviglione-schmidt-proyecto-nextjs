import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export function CarouselGameSkeleton() {
  return (
    <CarouselContent>
      <CarouselItemSkeleton />
      <CarouselItemSkeleton />
      <CarouselItemSkeleton />
      <CarouselItemSkeleton />
    </CarouselContent>
  );
}

export function CarouselItemSkeleton() {
  return (
    <CarouselItem className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <div className="bg-white rounded-lg border border-gray-200">
        <Skeleton className="w-full h-48 bg-gray-200 rounded-t-md"></Skeleton>
        <div className="p-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 bg-gray-200 rounded w-1/2"></Skeleton>
              <Skeleton className="h-5 bg-gray-300 rounded-full w-1/4"></Skeleton>
            </div>
            <Skeleton className="h-10 bg-gray-200 rounded w-full"></Skeleton>
            <Skeleton className="h-5 bg-gray-200 rounded w-1/3"></Skeleton>
            <div className="flex flex-col sm:flex-row gap-2 w-full justify-end">
              <Skeleton className="h-8 bg-gray-200 rounded w-full sm:w-1/2"></Skeleton>
              <Skeleton className="h-8 bg-gray-200 rounded w-full sm:w-1/2"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}

