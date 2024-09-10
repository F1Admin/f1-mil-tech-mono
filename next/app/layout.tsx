'use client';

import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CMSLayout from './cmsLayout';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  if (pathname.includes('/cms')) {
    return (
      <html lang="en">
        <body>
          <CMSLayout>{children}</CMSLayout>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/sed5grg.css" />
      </head>
      <body className="font-din">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
