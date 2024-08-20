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
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image1})`,
        }}
      >
        <div className="absolute bottom-14 left-14">
          <h1 className="text-white text-6xl font-bold">{image1_title}</h1>
        </div>
      </div>
      <div
        className="relative h-[400px] bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${image2})`,
        }}
      >
        <div className="absolute flex flex-col gap-2 bottom-14 left-14">
          <h1 className="text-white text-6xl font-bold">{image2_title}</h1>
          <h5 className="text-white text-2xl">{image2_subTitle}</h5>
        </div>
      </div>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${image3})`,
        }}
      ></div>
    </section>
  );
}
