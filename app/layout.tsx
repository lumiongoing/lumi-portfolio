import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumi Portfolio",
  description: "Personal portfolio of Lumi Huang, Visual / Web Designer and Creative Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
