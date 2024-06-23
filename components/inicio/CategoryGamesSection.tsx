import GameCarouselContent from "@/components/inicio/GameCarouselContent";
import GameCategoryBadge from "@/components/inicio/GameCategoryBadge";
import { CarouselGameSkeleton } from "@/components/skeletons";
import { Carousel, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Category } from "@/lib/definitions/products-definitions";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

export default function CategoryGamesSection(
  { category, title, subtitle, isFirst = false }:
    { category: Category, title: string, subtitle: string, isFirst?: boolean }
) {
  return (
    <section
      className={cn("mx-12 py-10 border-t border-gray-100 md:py-14 lg:py-18 dark:bg-gray-800",
        isFirst ? "" : "border-t border-gray-100")}
    >
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <GameCategoryBadge category={category} />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {subtitle}
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="horizontal"
        >
          <Suspense fallback={<CarouselGameSkeleton/>}>
            <GameCarouselContent category={category}/>
          </Suspense>
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </div>
    </section>
  );
}