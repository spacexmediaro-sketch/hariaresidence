import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HARIA Residence | Locuințe Premium în Comuna Berceni",
  description: "HARIA Residence — dezvoltator imobiliar premium din Comuna Berceni. Locuințe moderne, finisaje de lux, arhitectură contemporană. Creăm. Dezvoltăm. Construim Frumos.",
  keywords: "haria residence, locuinte premium, berceni, imobiliare lux, case moderne, vila, rezidential premium",
  openGraph: {
    title: "HARIA Residence | Arhitectură Premium",
    description: "Locuințe moderne create pentru un stil de viață exclusivist.",
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
