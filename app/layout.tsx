import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { CartProvider } from "@/lib/hooks/useCart";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "GameStore",
    template: "%s | GameStore",
  },
  description: "La tienda oficial de GameStore, venta de videojuegos, juguetes y juegos de mesa."+
  "Envios a todo el pais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <CartProvider>
        <body className={cn(
          "relative h-full font-sans antialiased bg-white",
          inter.className
        )}>
          <main className="relative flex flex-col min-h-screen bg-white">
            <Navbar/>
            <div className="flex-grow flex-1">{children}</div>
          </main>
        </body>
      </CartProvider>
    </html>
  );
}