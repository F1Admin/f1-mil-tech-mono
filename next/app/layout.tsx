import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

//TODO: Add your F1 Font: DIN 2014
const cabin = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flight-1.com",
  description: "Flight-1.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://use.typekit.net/sed5grg.css" />
      </head>
      <body className={cabin.className}>
        {children}
        </body>
    </html>
  );
}
