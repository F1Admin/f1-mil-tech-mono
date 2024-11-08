import Hero from '@/app/components/Hero';
import { getCadrePage, getInstructors } from '@/sanity/sanity-military-utils';
import InstructorCard from '@/app/components/InstructorCard';
import FooterHero from '@/app/components/FooterHero';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loading from '@/app/loading';

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

  const manager = instructors.filter(
    (instructor) => instructor.title === 'Military Director'
  );
  const founders = instructors.filter(
    (instructor) => instructor.title === 'Co-Founder'
  );
  const coordinators = instructors.filter((instructor) =>
    instructor.title.includes('Coordinator')
  );
  const topRow = [...manager, ...founders, ...coordinators];
  const courseDirectors = instructors.filter(
    (instructor) => instructor.title === 'Course Director'
  );
  const cadreInstructors = instructors.filter(
    (instructor) => instructor.title === 'Instructor'
  );

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
          {topRow.length > 0 &&
            topRow.map((instructor) => (
              <InstructorCard key={instructor._id} instructor={instructor} />
            ))}
        </div>
        <div className="flex flex-wrap justify-center gap-7 px-4 py-10 text-zinc-400 md:gap-10 md:p-11 lg:p-20">
          {courseDirectors.map((instructor) => (
            <InstructorCard key={instructor._id} instructor={instructor} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-7 px-4 py-10 text-zinc-400 md:gap-10 md:p-11 lg:p-20">
          {cadreInstructors.map((instructor) => (
            <InstructorCard key={instructor._id} instructor={instructor} />
          ))}
        </div>
        <FooterHero {...footerProps} />
      </main>
    </Suspense>
  );
}
