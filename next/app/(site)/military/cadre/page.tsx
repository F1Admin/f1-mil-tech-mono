import Hero from '@/app/components/Hero';
import { getCadrePage, getInstructors } from '@/sanity/sanity-utils';
import InstructorCard from '@/app/components/InstructorCard';
import FooterHero from '@/app/components/FooterHero';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/app/(site)/loading';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Military Cadre Page',
};

export default async function Cadre() {
  const {
    heroImage,
    heroImage_hotspot,
    heroTitle,
    heroSubtitle,
    footerImage,
    footerImage_hotspot,
    footerQuote,
    footerAuthor,
  } = await getCadrePage();

  const instructors = await getInstructors();

  const heroProps = {
    image: heroImage,
    hotspot: heroImage_hotspot,
    title: heroTitle,
    subTitle: heroSubtitle,
  };
  const footerProps = {
    image: footerImage,
    hotspot: footerImage_hotspot,
    quote: footerQuote,
    author: footerAuthor,
  };

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero {...heroProps} />
        <div className="flex flex-wrap justify-center gap-7 px-4 py-10 text-zinc-400 md:gap-10 md:p-11 lg:p-20">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor._id} instructor={instructor} />
          ))}
        </div>
        <FooterHero {...footerProps} />
      </main>
    </Suspense>
  );
}
