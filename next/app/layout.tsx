import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';

//TODO: Add your F1 Font: DIN 2014
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '900'], // Adjust the weights according to your needs
});

export const metadata: Metadata = {
  title: 'Flight-1.com',
  description: 'Flight-1.com',
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
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
