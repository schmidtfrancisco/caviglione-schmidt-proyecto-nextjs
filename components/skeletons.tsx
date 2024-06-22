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
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}

export function GameListSkeleton() {
  return (
    <>
      <GameItemSkeleton />
      <GameItemSkeleton />
      <GameItemSkeleton />
      <GameItemSkeleton />
      <GameItemSkeleton />
    </>
  );
}

export function GameItemSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-950">
      <div className="flex items-center gap-2">
        <Skeleton className="w-[150px] h-[150px] bg-gray-200 rounded-lg m-2"></Skeleton>
        <div className="flex-1 pt-4 pb-2 pr-2 md:pl-4">
          <Skeleton className="w-36 h-6 bg-gray-200 mb-2"></Skeleton>
          <Skeleton className="w-full h-10 bg-gray-200 mb-2"></Skeleton>
          <Skeleton className="w-36 h-6 bg-gray-200"></Skeleton>
          <div className="flex gap-2 mt-2 justify-end">
            <Skeleton className="w-48 h-10 bg-gray-200 rounded-lg"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GamePageSkeleton() {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div className="lg:max-w-lg lg:self-stretch">
          <div className="mt-10">
            <Skeleton className="w-56 h-10 bg-gray-200 rounded-lg"></Skeleton>
          </div>
          <section className="mt-4">
            <div className="flex items-center">
              <Skeleton className="w-24 h-8 bg-gray-200 rounded-full"></Skeleton>
              <Skeleton className="w-24 h-8 bg-gray-200 rounded-full ml-4"></Skeleton>
            </div>
            <div className="mt-4 space-y-2">
              <Skeleton className="w-full h-6 bg-gray-200 rounded-lg"></Skeleton>
              <Skeleton className="w-full h-6 bg-gray-200 rounded-lg"></Skeleton>
              <Skeleton className="w-full h-6 bg-gray-200 rounded-lg"></Skeleton>
              <Skeleton className="w-full h-6 bg-gray-200 rounded-lg"></Skeleton>
            </div>

            <div className="mt-6 flex items-center">

            </div>
          </section>
        </div>

        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="aspect-square rounded-lg">
            <Skeleton className="w-full h-auto [aspect-ratio:1/1] bg-gray-200 rounded-lg"></Skeleton>
          </div>
        </div>
        <div className="lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <div>
            <div className="mt-4 lg:mt-0 flex flex-col gap-5">
              <div className=' flex items-center gap-2'>
                <Skeleton className="w-44 h-10 bg-gray-200 rounded-lg"></Skeleton>
                <div className="flex items-center gap-2">
                  <Skeleton className="w-10 h-10 bg-gray-200 rounded-full"></Skeleton>
                  <Skeleton className="w-8 h-10 bg-gray-200 rounded-lg"></Skeleton>
                  <Skeleton className="w-10 h-10 bg-gray-200 rounded-full"></Skeleton>
                </div>
              </div>
              <Skeleton className="lg:w-72 h-10 bg-gray-200 rounded-lg"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
