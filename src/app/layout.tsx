import type { Metadata } from "next";
import "../styles/globals.scss";
import Head from "next/head";

export const metadata: Metadata = {
  title: "abder",
  description: "my Personal Portfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="favicon.ico" />
      </Head>
      <body className="bg-gradient-to-r from-[#203547] to-[#1e3042] text-gray-200" >{children}</body>
    </html>
  );
}
