import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import GameCldImage from '@/components/juegos/GameCldImage';
 
export default function NotFound() {
  return (
    <div className="flex h-[85dvh] w-full flex-col items-center justify-center gap-8 px-4 md:px-6">
      <div className="flex max-w-[400px] flex-col items-center justify-center">
        <GameCldImage
          src="GameStore/404"
          alt="404 image"
          width={250}
          height={250}
        />
        <h1 className="mt-4 text-4xl font-bold text-center">404 - Página no encontrada</h1>
        <p className="mt-2 text-center text-muted-foreground">
          Lo sentimos, pero la página que estas buscando no existe.
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Link
          href="/"
          className={buttonVariants({ variant: "default" })}
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
}