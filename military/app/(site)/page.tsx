import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { getLandingPage } from '@/sanity/sanity-military-utils';
import Hero from '@/app/components/Hero';

export const revalidate = 0;

export async function generateMetadata() {
  return {
    title: 'Military Landing Page',
  };
}

export default async function MilitaryLandingPage() {
  try {
    const {
      image1,
      image1_hotspot,
      image1_title,
      image2,
      image2_hotspot,
      image2_title,
      image2_subTitle,
      image3,
      image3_hotspot,
    } = await getLandingPage();

    return (
      <Suspense fallback={<Loading />}>
        <section>
          <Hero image={image1} hotspot={image1_hotspot} title={image1_title} />
          <Hero
            image={image2}
            hotspot={image2_hotspot}
            title={image2_title}
            subTitle={image2_subTitle}
          />
          <Hero image={image3} hotspot={image3_hotspot} />
        </section>
      </Suspense>
    );
  } catch (error) {
    console.error('Failed to load landing page:', error);
    notFound();
  }
}
