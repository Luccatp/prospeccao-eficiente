import Providers from "@/components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prospecção Eficiente",
  description: "Um E-book que impulsionara a sua carreira",
  icons: [
    {
      href: "/capajpg",
      url: "/capa.jpg",
      sizes: "80x160",
      type: "image/jpg",
      rel: "icon",
    },
  ],
  creator: "Luisa Oliveira",
  authors: [{ name: "Luisa Oliveira" }],
  keywords: ["Prospecção", "Social Media", "Sucesso"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
