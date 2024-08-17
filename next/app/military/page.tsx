import { client } from '../utils/sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export default async function militaryLandingPage() {
  // build military landing page
  // fetch different sections from sanity
  // build page to display the sections

  const query = `*[_type == "militaryLandingPage"]`;
  const data = await client.fetch(query);
  const {
    image1,
    image1_title,
    image2,
    image2_title,
    image2_subTitle,
    image3,
  } = data[0];

  const builder = imageUrlBuilder(client);

  return (
    <section>
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${builder.image(image1).url()})`,
        }}
      >
        <div className="absolute bottom-14 left-14">
          <h1 className="text-white text-6xl font-bold">{image1_title}</h1>
        </div>
      </div>
      <div
        className="relative h-[400px] bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${builder.image(image2).url()})`,
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
          backgroundImage: `url(${builder.image(image3).url()})`,
        }}
      ></div>
    </section>
  );
}
