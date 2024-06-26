import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/(components)/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darcy Shaw's Portfolio",
  description: "Darcy Shaw's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'bg-background-900 h-dvh w-full text-text-50' + inter.className}>
        <div className="bg-background-900 h-dvh">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
