import Hero from '@/app/components/Hero';
import { getStorePage } from '@/sanity/sanity-utils';
import Link from 'next/link';

export default async function militaryStore() {
  const { heroImage, heroTitle, heroSubtitle, link, footerImage, footerText } =
    await getStorePage();
  return (
    <section>
      <Hero image={heroImage} title={heroTitle} subTitle={heroSubtitle} />
      <div className="flex items-center border m-5 p-5 md:m-10 md:p-10 h-96 max-w-[500px] text-zinc-400">
        <Link className="flex flex-col justify-center" href={link}>
          <h2 className="text-5xl mb-5">Merchandise</h2>
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
