import { getAboutPage } from '@/sanity/sanity-tech-utils';
import Hero from '@/app/components/Hero';
import AboutSection from '@/app/components/AboutSection';
import { Suspense } from 'react';
import Loading from '@/app/loading';

export const revalidate = 0;

export async function generateMetadata() {
  return {
    title: 'Tech About Page',
  };
}

export default async function TechAboutPage() {
  const {
    image1,
    image1_hotspot,
    image1_title,
    image1_subTitle,
    image2,
    image2_hotspot,
    image2_title,
    image2_subTitle,
    image3,
    image3_hotspot,
    image3_title,
    image3_subTitle,
    facilities_title,
    facilities_text,
    philosophy_title,
    philosophy_text,
  } = await getAboutPage();

  const heroProps = {
    image: image1,
    hotspot: image1_hotspot,
    title: image1_title,
    subTitle: image1_subTitle,
  };
  const aboutSection1Props = {
    image: image2,
    hotspot: image2_hotspot,
    title: image2_title,
    subTitle: image2_subTitle,
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
    title: philosophy_title,
    subTitle: philosophy_text,
  };

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero {...heroProps} />
        <AboutSection {...aboutSection1Props} />
        <AboutSection {...aboutSection2Props} />
        <div className="flex flex-col">
          <AboutSection {...aboutSection3Props} />
          <AboutSection {...aboutSection4Props} />
        </div>
      </main>
    </Suspense>
  );
}
