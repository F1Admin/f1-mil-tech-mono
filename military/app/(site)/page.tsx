import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import {
  getLandingPage,
  HeroBlock,
} from '@/sanity/sanity-military-utils';
import {
  HeroTitle,
  HeroTitleSubtitle,
  VideoHero,
} from '@/app/components/heroes';

export async function generateMetadata() {
  return {
    title: 'Military Landing Page',
  };
}

function renderHero(hero: HeroBlock) {
  switch (hero._type) {
    case 'heroTitle':
      return (
        <HeroTitle
          key={hero._key}
          image={hero.image}
          hotspot={hero.hotspot}
          title={hero.title}
          titleColor={hero.titleColor}
        />
      );
    case 'heroTitleSubtitle':
      return (
        <HeroTitleSubtitle
          key={hero._key}
          image={hero.image}
          hotspot={hero.hotspot}
          title={hero.title}
          subTitle={hero.subTitle}
          titleColor={hero.titleColor}
        />
      );
    case 'videoHero':
      return (
        <VideoHero
          key={hero._key}
          thumbnail={hero.thumbnail}
          thumbnailHotspot={hero.hotspot}
          muxPlaybackId={hero.muxPlaybackId}
          title={hero.title}
          autoPlay={hero.autoPlay}
        />
      );
    default:
      return null;
  }
}

export default async function MilitaryLandingPage() {
  try {
    const { heroes } = await getLandingPage();

    return (
      <Suspense fallback={<Loading />}>
        <section>
          {heroes?.map((hero) => renderHero(hero))}
        </section>
      </Suspense>
    );
  } catch (error) {
    console.error('Failed to load landing page:', error);
    notFound();
  }
}
