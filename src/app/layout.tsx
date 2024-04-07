import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/style.scss";

import { Open_Sans } from 'next/font/google'

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "abderr",
  description: "Personal Portfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} ${openSans.className}`}>{children}</body>
    </html>
  );
}
