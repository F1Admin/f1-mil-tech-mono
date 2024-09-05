import React from 'react';
import { ReactNode } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

interface MilitaryLayoutProps {
  children: ReactNode;
}

export default function MilitaryLayout({ children }: MilitaryLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
