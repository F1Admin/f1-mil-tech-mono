import { getAboutPage } from '@/sanity/sanity-military-utils';
import Hero from '@/app/components/Hero';
import AboutSection from '@/app/components/AboutSection';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import Image from 'next/image';

export const revalidate = 0;

export async function generateMetadata() {
  return {
    title: 'Military About Page',
  };
}

export default async function MilitaryAboutPage() {
  const {
    image1,
    image1_hotspot,
    image1_title,
    image1_subTitle,
    image3,
    image3_hotspot,
    image3_title,
    image3_subTitle,
    facilities_title,
    facilities_text,
    selection_title,
    selection_text,
  } = await getAboutPage();

  const heroProps = {
    image: image1,
    hotspot: image1_hotspot,
    title: image1_title,
    subTitle: image1_subTitle,
  };
  const aboutSection2Props = {
    image: image3,
    hotspot: image3_hotspot,
    title: image3_title,
    subTitle: image3_subTitle,
  };
  const aboutSection3Props = {
    title: facilities_title,
    subTitle: facilities_text,
  };
  const aboutSection4Props = {
    title: selection_title,
    subTitle: selection_text,
  };

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero {...heroProps} />
        <AboutSection {...aboutSection2Props} />
        <div className="flex flex-col gap-10 p-10 md:p-20">
          <AboutSection {...aboutSection3Props} />
          <AboutSection {...aboutSection4Props} />
        </div>
      </main>
    </Suspense>
  );
}
