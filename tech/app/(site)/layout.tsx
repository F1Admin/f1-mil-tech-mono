import type { Metadata } from 'next';
import React from 'react';
import Header from '../components/Header';
import FooterTech from '../components/FooterTech';

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
      <FooterTech />
    </>
  );
}
