import { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getStorePage } from '@/sanity/sanity-utils';
import Loading from '@/app/(site)/loading';
import Hero from '@/app/components/Hero';
import FooterHero from '@/app/components/FooterHero';

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
    footerImage,
    footerImage_hotspot,
    footerText,
    footerAuthor,
  } = await getStorePage();

  const heroProps = {
    image: heroImage,
    hotspot: heroImage_hotspot,
    title: heroTitle,
    subTitle: heroSubtitle,
  };

  const footerProps = {
    image: footerImage,
    hotspot: footerImage_hotspot,
    quote: footerText,
    author: footerAuthor,
  };

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero {...heroProps} />
        <div className="py-15 flex min-h-[400px] items-center px-4 md:px-10">
          <div className="flex-grow items-center border border-zinc-700 p-10 text-white md:min-w-[75vw] md:flex-none lg:min-w-[50vw]">
            <Link className="flex flex-col justify-center" href={link}>
              <h3 className="mb-5 text-3xl">Merchandise</h3>
              <h4 className="text-xl">
                Flight-1 Military Pilots - fly your colors here
              </h4>
            </Link>
          </div>
        </div>
        <FooterHero {...footerProps} />
      </main>
    </Suspense>
  );
}
