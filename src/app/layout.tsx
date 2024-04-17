import type { Metadata } from "next";
import "../styles/globals.scss";
import Head from "next/head";

export const metadata: Metadata = {
  title: "abdee",
  description: "Personal Portfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="favicon.ico" />
      </Head>
      <body >{children}</body>
    </html>
  );
}
