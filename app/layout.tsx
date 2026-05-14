import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HARIA Residence | Locuințe Premium în Comuna Berceni",
  description: "HARIA RESIDENCE SRL — dezvoltator imobiliar premium din Comuna Berceni, înființat 2016. CUI: RO35832849. Locuințe moderne, finisaje de lux, arhitectură contemporană. Creăm. Dezvoltăm. Construim Frumos.",
  keywords: "haria residence, locuinte premium, berceni, imobiliare lux, case moderne, vila, rezidential premium, haria residence srl",
  openGraph: {
    title: "HARIA Residence | Arhitectură Premium",
    description: "HARIA RESIDENCE SRL — Locuințe moderne create pentru un stil de viață exclusivist în Comuna Berceni.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-black-matte text-ivory antialiased">
        {children}
      </body>
    </html>
  );
}
