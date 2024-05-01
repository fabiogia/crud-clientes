import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuSide from "./shared/menu-side";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRUD Clientes",
  description: "Para fins educacionais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-theme="light">
      <body className={`${inter.className}`}>
        <div className=" bg-gray-200 h-full">
          <MenuSide />
          <div className="__mt-16">
            <div className="h-1">&nbsp;</div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
