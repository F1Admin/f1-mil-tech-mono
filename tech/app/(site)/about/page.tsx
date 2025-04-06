import { getAboutPage } from '@/sanity/sanity-tech-utils';
import Hero from '@/app/components/Hero';
import AboutSection from '@/app/components/AboutSection';
import { Suspense } from 'react';
import Loading from '@/app/loading';

export async function generateMetadata() {
  return {
    title: 'Tech About Page',
  };
}

export default async function TechAboutPage() {
  const { heroImage, heroImage_hotspot, title, about_text } =
    await getAboutPage();

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Hero image={heroImage} hotspot={heroImage_hotspot} title={title} />
        <div className="flex flex-col gap-4 px-4 py-10 text-zinc-400 md:px-10">
          <h2 className="text-2xl font-bold uppercase">Our Story</h2>
          {about_text.map((text, index) => (
            <p className="md:px-4" key={index}>
              {text.children[0].text}
            </p>
          ))}
        </div>
      </main>
    </Suspense>
  );
}
