import { getAboutPage } from '@/sanity/sanity-utils';
import Hero from '@/app/components/Hero';
import AboutSection from '@/app/components/AboutSection';

export default async function MilitaryAboutPage() {
  const {
    image1,
    image1_title,
    image1_subTitle,
    image2,
    image2_title,
    image2_subTitle,
    image3,
    image3_title,
    image3_subTitle,
    facilities_title,
    facilities_text,
    selection_title,
    selection_text,
  } = await getAboutPage();

  return (
    <section>
      <Hero image={image1} title={image1_title} subTitle={image1_subTitle} />
      <AboutSection
        image={image2}
        title={image2_title}
        subTitle={image2_subTitle}
      />
      <AboutSection
        image={image3}
        title={image3_title}
        subTitle={image3_subTitle}
      />
      <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 md:gap-3 md:py-20 md:pl-28 md:pr-10">
        <AboutSection title={facilities_title} subTitle={facilities_text} />
        <AboutSection title={selection_title} subTitle={selection_text} />
      </div>
    </section>
  );
}
