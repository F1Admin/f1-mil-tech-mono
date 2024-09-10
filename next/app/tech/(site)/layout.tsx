import type { Metadata } from 'next';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Flight-1 Tech',
  description: 'Flight-1 Tech Services',
};

export default function TechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
