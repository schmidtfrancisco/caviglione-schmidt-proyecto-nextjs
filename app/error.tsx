'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import GameCldImage from '@/components/juegos/GameCldImage';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[85dvh] w-full flex-col items-center justify-center gap-8 px-4 md:px-6">
      <div className="flex max-w-[400px] flex-col items-center justify-center">
        <GameCldImage
          src="GameStore/errorimage"
          alt="Error image"
          width={200}
          height={200}
        />
        <h1 className="mt-4 text-4xl font-bold">¡Oops!, algo salió mal!</h1>
        <p className="mt-2 text-center text-muted-foreground">
          Lo sentimos, pero se ha producido un error inesperado. Vuelva a intentarlo o comuníquese con nosotros si el problema persiste.
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Button 
          onClick={() => reset()}
        >
          Volver a intentarlo
        </Button>
        <Link
          href="/"
          className={buttonVariants({ variant: "outline" })}
        >
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
}