'use client';

import { NextStudio } from 'next-sanity/studio';
import { techConfig } from '@/sanity.config';

export default function AdminPage() {
  return <NextStudio config={techConfig} />;
}
