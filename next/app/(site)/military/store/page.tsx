import Hero from '@/app/components/Hero';
import { getStorePage } from '@/sanity/sanity-utils';
import Link from 'next/link';

export default async function militaryStore() {
  const { heroImage, heroTitle, heroSubtitle, link, footerImage, footerText } =
    await getStorePage();
  return (
    <section>
      <Hero image={heroImage} title={heroTitle} subTitle={heroSubtitle} />
      <div className="m-5 flex h-96 max-w-[500px] items-center border p-5 text-zinc-400 md:m-10 md:p-10">
        <Link className="flex flex-col justify-center" href={link}>
          <h2 className="mb-5 text-5xl">Merchandise</h2>
          <p className="text-lg font-thin leading-8">
            Fly over to the Flight-1 Military Store. There you will find all of
            the gear you need to get started on your journey to becoming a
            better skydiver.
          </p>
        </Link>
      </div>
      <Hero image={footerImage} title={footerText} />
    </section>
  );
}
