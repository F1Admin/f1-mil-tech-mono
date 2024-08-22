import type { Metadata } from 'next';
import './globals.css';

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
      <body className="font-din">{children}</body>
    </html>
  );
}
