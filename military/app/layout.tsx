import './globals.css';
import React from 'react';

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
      <body className="font-din">
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
