import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProA Despeñaderos",
  description: "Portal institucional de la Escuela Experimental ProA Despeñaderos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}