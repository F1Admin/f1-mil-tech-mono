import Hero from '@/app/components/Hero';
import { getLandingPage } from '@/sanity/sanity-tech-utils';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '@/app/loading';

export const revalidate = 0;

export default async function TechLandingPage() {
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
