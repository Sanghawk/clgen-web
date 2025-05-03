import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/ui/Header";
export const metadata: Metadata = {
  title: "Greptile CC - AI changelog view",
  description: "Part II of the Greptile coding challenge.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
