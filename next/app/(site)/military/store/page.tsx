import { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getStorePage } from '@/sanity/sanity-utils';
import Loading from '@/app/(site)/loading';
import Hero from '@/app/components/Hero';
import Slider from '@/app/components/Slider/Slider';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Military Store Page',
};

export default async function militaryStore() {
  const {
    heroImage,
    heroImage_hotspot,
    heroTitle,
    heroSubtitle,
    link,
    storeCarousel,
  } = await getStorePage();

  const heroProps = {
    image: heroImage,
    hotspot: heroImage_hotspot,
    title: heroTitle,
    subTitle: heroSubtitle,
  };
  console.log('storeCarousel', storeCarousel);
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero {...heroProps} />
        <div className="flex items-center gap-4 px-4 py-8 md:px-10">
          <Link
            href={link}
            className="rounded-full border border-zinc-400 px-6 py-3 text-2xl font-bold text-white transition hover:border-white"
          >
            Click Here
          </Link>
          <h4 className="text-xl font-thin">
            and discover our exclusive online military collection.
          </h4>
        </div>
        <Link href={link}>
          <Slider images={storeCarousel} />
        </Link>
      </main>
    </Suspense>
  );
}
