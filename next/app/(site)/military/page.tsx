import Hero from '@/app/components/Hero';
import { getLandingPage } from '@/sanity/sanity-utils';

export default async function MilitaryLandingPage() {
  const {
    image1,
    image1_title,
    image2,
    image2_title,
    image2_subTitle,
    image3,
  } = await getLandingPage();

  return (
    <section>
      <Hero image1={image1} image1_title={image1_title} />
      <Hero
        image1={image2}
        image1_title={image2_title}
        image1_subTitle={image2_subTitle}
      />
      <Hero image1={image3} />
    </section>
  );
}
