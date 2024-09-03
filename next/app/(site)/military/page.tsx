import Hero from '@/app/components/Hero';
import { getLandingPage } from '@/sanity/sanity-utils';

export default async function MilitaryLandingPage() {
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
  );
}
