import { HeroBlock } from '@/sanity/sanity-military-utils';
import {
  HeroTitle,
  HeroTitleSubtitle,
  VideoHero,
} from '@/app/components/heroes';

function renderBlock(block: HeroBlock) {
  switch (block._type) {
    case 'heroTitle':
      return (
        <HeroTitle
          key={block._key}
          image={block.image}
          hotspot={block.hotspot}
          title={block.title}
          titleColor={block.titleColor}
        />
      );
    case 'heroTitleSubtitle':
      return (
        <HeroTitleSubtitle
          key={block._key}
          image={block.image}
          hotspot={block.hotspot}
          title={block.title}
          subTitle={block.subTitle}
          titleColor={block.titleColor}
        />
      );
    case 'videoHero':
      return (
        <div key={block._key} className="py-5 lg:py-10">
          <VideoHero
            thumbnail={block.thumbnail}
            thumbnailHotspot={block.hotspot}
            muxPlaybackId={block.muxPlaybackId}
            title={block.title}
            autoPlay={block.autoPlay}
          />
        </div>
      );
    default:
      return null;
  }
}

export default function BlockRenderer({
  blocks,
}: {
  blocks?: HeroBlock[] | null;
}) {
  if (!blocks?.length) return null;
  return <>{blocks.map(renderBlock)}</>;
}
