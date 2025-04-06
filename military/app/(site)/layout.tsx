import type { Metadata } from 'next';
import React from 'react';
import HeaderWrapper from '@/app/components/HeaderWrapper';
import FooterMilitary from '@/app/components/FooterMilitary';

export const metadata: Metadata = {
  title: 'Flight-1 Military',
  description: 'Flight-1 Military Services',
};

export default function MilitaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderWrapper />
      {children}
      <FooterMilitary />
    </>
  );
}
