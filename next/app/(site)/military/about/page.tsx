import { getAboutPage } from '@/sanity/sanity-utils';
import Hero from '@/app/components/Hero';
import AboutPicture from '@/app/components/AboutPIcture';

export default async function MilitaryAboutPage() {
  const {
    image1,
    image1_title,
    image1_subTitle,
    image2,
    image2_title,
    image2_subTitle1,
    image2_subTitle2,
    image3,
    image3_title,
    image3_subTitle,
  } = await getAboutPage();

  return (
    <section>
      <Hero
        image1={image1}
        image1_title={image1_title}
        image1_subTitle={image1_subTitle}
      />
      <AboutPicture
        image={image2}
        title={image2_title}
        subTitle1={image2_subTitle1}
        subTitle2={image2_subTitle2}
      />
      <AboutPicture
        image={image3}
        title={image3_title}
        subTitle1={image3_subTitle}
      />
      <div className="grid grid-cols-2 pl-28 py-20 pr-10 gap-3">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold uppercase">Our Facilities</div>
          <div className="font-thin">
            Our HQ in Deland, Florida with a secondary facility in Lake
            Elsinore, California.
          </div>
          <div className="font-thin">
            Flight-1 is completely mobile training company that can conduct
            training in nearly any environment around the world, from a tropical
            environment to a high alpine environment.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold uppercase">
            Selection and Training of Flight-1 Cadre
          </div>
          <div className="font-thin">
            Flight-1 has not only pioneered the standard for canopy control
            training, but also the standard for what it means to be a canopy
            instructor.
          </div>
          <div className="font-thin">
            Due to the unique risks of teaching canopy control our extensive
            selection and training process to become a Flight-1 instructor is
            unprecedented in the industry.
          </div>
          <div className="font-thin">
            Flight-1 instructors are committed to maintaining the standards
            necessary to be a successful educator to the world’s elite. Passion,
            an educator mentality, experience, and currency, are at the heart of
            each instructor’s success.
          </div>
        </div>
      </div>
    </section>
  );
}
