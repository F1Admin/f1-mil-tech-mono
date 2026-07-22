import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { getLandingPage } from '@/sanity/sanity-military-utils';
import BlockRenderer from '@/app/components/BlockRenderer';

export async function generateMetadata() {
  return {
    title: 'Military Landing Page',
  };
}

export default async function MilitaryLandingPage() {
  try {
    const { heroes } = await getLandingPage();

    return (
      <Suspense fallback={<Loading />}>
        <section>
          <BlockRenderer blocks={heroes} />
        </section>
      </Suspense>
    );
  } catch (error) {
    console.error('Failed to load landing page:', error);
    notFound();
  }
}
